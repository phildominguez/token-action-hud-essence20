import {
  MACRO_TYPES,
  SKILL_ESSENCES,
  SUPPORTED_ACTORS,
} from './constants.js';
import {
  INITIATIVE_ID,
  ITEMS,
  MORPH_ID,
  SKILLS,
  TRANSFORM_ID,
  USES_ID,
  ZORDS_ID,
} from './defaults.js';

export let ActionHandler = null;

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
  ActionHandler = class ActionHandler extends coreModule.api.ActionHandler {
    /** @override */
    async buildSystemActions(subcategoryIds) {
      const token = this.token;
      if (!token) return;
      const actor = this.actor;
      if (!actor) return;

      if (!SUPPORTED_ACTORS.includes(actor.type)) {
        return;
      }

      this._addInitiativeActions();
      this._addMorphActions(actor);
      this._addTransformActions(actor);
      this._addSkillsActions(actor);
      this._addWeaponsActions(actor);
      this._addPowersActions(actor);
      this._addUsesActions(actor);
      this._addZordActions(actor);
      this._addInfoActions(actor);
    }

    _addActionHelper(actions, parentId) {
      this.addActions(actions, { id: parentId, type: 'system' });
    }

    _encode(...parts) {
      return parts.join(this.delimiter);
    }

    _addInitiativeActions() {
      const actions = [{
        id: 'id-initiative-action',
        name: game.i18n.localize('tokenActionHud.essence20.roll'),
        encodedValue: MACRO_TYPES.initiative,
      }];
      this._addActionHelper(actions, INITIATIVE_ID);
    }

    _addMorphActions(actor) {
      const actions = [];

      if (actor.system.canMorph) {
        actions.push({
          id: 'id-morph-action',
          name: game.i18n.localize(actor.system.isMorphed ? 'E20.ButtonUnmorph' : 'E20.ButtonMorph'),
          encodedValue: MACRO_TYPES.morph,
          img: actor.system.isMorphed ? actor.system.image?.unmorphed : actor.system.image?.morphed,
        });
      }

      this._addActionHelper(actions, MORPH_ID);
    }

    _addTransformActions(actor) {
      if (!actor.system.canTransform) {
        return;
      }

      const actions = [];

      if (actor.system.isTransformed) {
        actions.push({
          id: 'id-transform-bot-mode',
          encodedValue: MACRO_TYPES.transform,
          name: game.i18n.localize('E20.ModeBotMode'),
          img: actor.system.image?.botmode ?? actor.system.image?.unmorphed,
        });
      }

      const altModes = actor.items.filter((i) => !!i && i.type == ITEMS.altModes.type);

      for (const altMode of altModes) {
        if (actor.system.altModeId == altMode.id) continue;
        actions.push({
          id: altMode.uuid,
          encodedValue: this._encode(MACRO_TYPES.transform, altMode.uuid),
          name: altMode.name,
          img: altMode.system.tokenImage,
        });
      }

      this._addActionHelper(actions, TRANSFORM_ID);
    }

    /*
      Skills come from the system's own list (CONFIG.E20.skillsByEssence), so a new Skill shows up without a change here.
      An NPC only lists the Skills it has; Spellcasting and Weird only show when the actor has a die in them.
    */
    _addSkillsActions(actor) {
      const byEssence = CONFIG.E20?.skillsByEssence ?? {};
      for (const essence of SKILL_ESSENCES) {
        const actions = [];
        for (const skill of byEssence[essence] ?? []) {
          const fields = actor.system.skills?.[skill];
          if (!fields) continue;

          const untrained = !fields.shift || fields.shift == 'd20';
          if ((essence == 'any' || actor.type == 'npc') && untrained && !fields.isChosen) continue;

          actions.push({
            id: `id-skill-${skill}`,
            name: game.i18n.localize(CONFIG.E20.skills?.[skill] ?? skill),
            encodedValue: this._encode(MACRO_TYPES.skill, skill),
            info1: { text: untrained ? '' : `${fields.shift}${fields.isSpecialized ? '*' : ''}` },
          });
        }

        this._addActionHelper(actions, SKILLS[essence].id);
      }
    }

    /*
      Weapon effect groups are added dynamically for each weapon
    */
    _addWeaponsActions(actor) {
      const weapons = actor.items.filter((i) => !!i && i.type == ITEMS.weapons.type);
      for (const weapon of weapons) {
        // Create a group for this weapon (such as Blade Blaster)
        const weaponGroupId = `${ITEMS.weapons.id}-${weapon.id}`;
        this.addGroup(
          {
            id: weaponGroupId,
            name: weapon.name,
            type: 'system',
          },
          {
            id: ITEMS.weapons.id,
            type: 'system',
          },
        );

        // Get the actions for all the weapon's effects, to be added into this weapon group
        const weaponEffectsActions = this.actor.items.filter(
          // Find all the weapon's weapon effects by comparing the parentId (ID or UUID) to the weapon's ID
          (i) => !!i && i.type == ITEMS.weaponEffects.type && i.getFlag('essence20', 'parentId')?.split('.').slice(-1) == weapon.id)
          .map((i) => {
            const weaponEffectId = i.uuid;
            return { name: i.name, encodedValue: this._encode(MACRO_TYPES.item, weaponEffectId), id: weaponEffectId };
          });

        // Finally, add the effects/actions for this weapon
        this._addActionHelper(weaponEffectsActions, weaponGroupId);
      }
    }

    _addPowersActions(actor) {
      this._addActionHelper(
        this._getActionsForItemType(ITEMS.powers.type, actor),
        ITEMS.powers.id,
      );
    }

    /*
      Every item with a Use button (the sheet's bolt - a Perk, Zord Feature, piece of gear... with a rule to press) that
      can be pressed right now: the system decides, through game.essence20.canUseItem.
    */
    _addUsesActions(actor) {
      const canUse = game.essence20?.canUseItem;
      if (!canUse) return;

      const actions = actor.items.filter((i) => !!i && i.type != ITEMS.powers.type && canUse(i))
        .map((i) => ({ id: `use-${i.id}`, name: i.name, img: i.img, encodedValue: this._encode(MACRO_TYPES.use, i.uuid) }));
      this._addActionHelper(actions, USES_ID);
    }

    /*
      A Ranger's Zords (the sheet's Zords tab): Disembark when aboard, Board once it has arrived, otherwise Summon.
    */
    _addZordActions(actor) {
      const api = game.essence20?.zord;
      if (!api) return;

      // The Zord itself (its token is what's on the map while someone drives it): Disembark for each of its crew.
      if (actor.type == 'zord') {
        const crew = Object.values(actor.system.actors ?? {}).filter((entry) => entry?.vehicleRole)
          .map((entry) => fromUuidSync(entry.uuid, { strict: false })).filter(Boolean)
          .map((member) => ({
            id: `disembark-${member.id}`,
            name: `${game.i18n.localize('E20.ZordDisembark')}: ${member.name}`,
            img: member.img,
            encodedValue: this._encode(MACRO_TYPES.zordDisembarkCrew, member.uuid),
          }));
        this._addActionHelper(crew, ZORDS_ID);
        return;
      }

      if (!['playerCharacter', 'npc'].includes(actor.type)) return;

      const actions = [];
      for (const entry of Object.values(actor.system.actors ?? {})) {
        if (entry?.type != 'zord') continue;
        const zord = fromUuidSync(entry.uuid, { strict: false });
        if (!zord) continue;

        const [type, label] = api.isAboard(actor, zord) ? [MACRO_TYPES.zordDisembark, 'E20.ZordDisembark']
          : api.hasArrived(zord) ? [MACRO_TYPES.zordBoard, 'E20.ZordBoard']
            : [MACRO_TYPES.zordSummon, 'E20.ZordSummonButton'];
        actions.push({
          id: `zord-${zord.id}`,
          name: `${game.i18n.localize(label)}: ${zord.name}`,
          img: zord.img,
          encodedValue: this._encode(type, zord.uuid),
        });
      }

      this._addActionHelper(actions, ZORDS_ID);
    }

    _addInfoActions(actor) {
      for (const item of Object.values(ITEMS)) {
        if (!item.infoId) continue;
        this._addActionHelper(this._getActionsForItemType(item.type, actor, MACRO_TYPES.info, item.subtype), item.infoId);
      }
    }

    _getActionsForItemType(type, actor, actionId = MACRO_TYPES.item, subtype = null) {
      return actor.items.filter((i) => !!i && i.type == type && (!subtype || i.system?.type == subtype))
        .map((i) => ({ name: i.name, encodedValue: this._encode(actionId, i.uuid), id: i.uuid }));
    }
  };
});
