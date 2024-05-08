import {
  MACRO_TYPES,
  SKILL_ACTIONS,
  SUPPORTED_ACTORS
} from './constants.js'
import {
  INITIATIVE_ID,
  ITEMS,
  SKILLS,
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
      this._addSkillsActions();
      this._addWeaponsActions(actor);
      this._addPowersActions(actor);
      this._addInfoActions(actor);
    }

    _addActionHelper(actions, parentId) {
      this.addActions(actions, { id: parentId, type: 'system' });
    }

    _addInitiativeActions() {
      const actions = [{
        id: 'id-initiative-action',
        name: "Roll",
        encodedValue: MACRO_TYPES.initiative,
      }];
      this._addActionHelper(actions, INITIATIVE_ID);
    }

    _addSkillsActions() {
      for (let [essence, actions] of Object.entries(SKILL_ACTIONS)) {
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
        const weaponEffectsActions = Object.values(weapon.system.items).filter(
          // Find all the weapon's weapon effects
          (i) => !!i && i.type == ITEMS.weaponEffects.type)
          .map((i) => {
            const weaponEffectId = i.uuid.split('.')[3]; // uuid -> id
            let encodedValue = [MACRO_TYPES.item, weaponEffectId].join(this.delimiter);
            return { name: i.name, encodedValue: encodedValue, id: weaponEffectId };
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

    _addInfoActions(actor) {
      for (let [_, item] of Object.entries(ITEMS)) {
        this._addActionHelper(
          this._getActionsForItemType(item.type, actor, 'info'), item.infoId);
      }
    }

    _getActionsForItemType(type, actor, actionId = MACRO_TYPES.item) {
      return actor.items.filter((i) => !!i && i.type == type)
        .map((i) => {
          let encodedValue = [actionId, i.id].join(this.delimiter);
          return { name: i.name, encodedValue: encodedValue, id: i.id };
        });
    }
  }
})
