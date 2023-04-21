import { CoreActionHandler, CoreUtils } from './config.js'
import { skillActions, supportedActors } from './constants.js'
import {
  INFO_ALT_MODES_ID,
  INFO_ARMOR_ID,
  INFO_BONDS_ID,
  INFO_CLASS_FEATURES_ID,
  INFO_CONTACTS_ID,
  INFO_FEATURES_ID,
  INFO_GEAR_ID,
  INFO_HANG_UPS_ID,
  INFO_ID,
  INFO_ORIGINS_ID,
  INFO_MAGIC_BAUBLES_ID,
  INFO_MEGAFORM_TRAITS_ID,
  INFO_PERKS_ID,
  INFO_POWERS_ID,
  INFO_SPELLS_ID,
  INFO_THREAT_POWERS_ID,
  INFO_WEAPONS_ID,
  INITIATIVE_ID,
  POWERS_ID,
  SKILLS_ID,
  SKILLS_SMARTS_ID,
  SKILLS_SOCIAL_ID,
  SKILLS_SPEED_ID,
  SKILLS_STRENGTH_ID,
  WEAPONS_ID,
} from './defaults.js';

export class ActionHandler extends CoreActionHandler {
  /** @override */
  async buildSystemActions(subcategoryIds) {
    const token = this.token;
    if (!token) return;
    const tokenId = token.id;
    const actor = this.actor;
    if (!actor) return;

    if (!supportedActors.includes(actor.type)) {
      return;
    }

    this._addInitiativeActions(actor, tokenId, { id: INITIATIVE_ID, type: 'system' })
    this._addSkillsActions(actor, tokenId, { id: SKILLS_ID, type: 'system' })
    this._addWeaponsActions(actor, tokenId, { id: WEAPONS_ID, type: 'system' })
    this._addPowersActions(actor, tokenId, { id: POWERS_ID, type: 'system' })
    this._addInfoActions(actor, tokenId, { id: INFO_ID, type: 'system' })
  }

  _addInitiativeActions(actor, tokenId, parent) {
    const actions = [{
      id: 'id-initiative-action',
      name: "Roll",
      encodedValue: 'initiative',
    }];
    this.addActionsToActionList(actions, parent);
  }

  _addSkillsActions(actor, tokenId, parent) {
    this.addActionsToActionList(skillActions.strength, { id: SKILLS_STRENGTH_ID, type: 'system' });
    this.addActionsToActionList(skillActions.speed, { id: SKILLS_SPEED_ID, type: 'system' });
    this.addActionsToActionList(skillActions.smarts, { id: SKILLS_SMARTS_ID, type: 'system' });
    this.addActionsToActionList(skillActions.social, { id: SKILLS_SOCIAL_ID, type: 'system' });
  }

  _addWeaponsActions(actor, tokenId, parent) {
    this.addActionsToActionList(this._getActionsForItemType('weapon', actor), parent);
  }

  _addPowersActions(actor, tokenId, parent) {
    this.addActionsToActionList(this._getActionsForItemType('power', actor), parent);
  }

  _addInfoActions(actor, tokenId, parent) {
    // Common items
    this.addActionsToActionList(
      this._getActionsForItemType('classFeature', actor, 'info'), { id: INFO_CLASS_FEATURES_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('weapon', actor, 'info'), { id: INFO_WEAPONS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('armor', actor, 'info'), { id: INFO_ARMOR_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('contact', actor, 'info'), { id: INFO_CONTACTS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('gear', actor, 'info'), { id: INFO_GEAR_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('power', actor, 'info'), { id: INFO_POWERS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('perk', actor, 'info'), { id: INFO_PERKS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('origin', actor, 'info'), { id: INFO_ORIGINS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('bond', actor, 'info'), { id: INFO_BONDS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('hangUp', actor, 'info'), { id: INFO_HANG_UPS_ID, type: 'system' });

    // Transformer items
    this.addActionsToActionList(
      this._getActionsForItemType('altMode', actor, 'info'), { id: INFO_ALT_MODES_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('feature', actor, 'info'), { id: INFO_FEATURES_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('megaformTrait', actor, 'info'), { id: INFO_MEGAFORM_TRAITS_ID, type: 'system' });

    // Pony items
    this.addActionsToActionList(
      this._getActionsForItemType('spell', actor, 'info'), { id: INFO_SPELLS_ID, type: 'system' });
    this.addActionsToActionList(
      this._getActionsForItemType('magicBauble', actor, 'info'), { id: INFO_MAGIC_BAUBLES_ID, type: 'system' });

    // Threat items
    this.addActionsToActionList(
      this._getActionsForItemType('threatPower', actor, 'info'), { id: INFO_THREAT_POWERS_ID, type: 'system' });
  }

  _getActionsForItemType(type, actor, actionId = 'item') {
    return actor.items.filter((i) => !!i && i.type == type)
      .map((i) => {
        let encodedValue = [actionId, i.id].join(
          this.delimiter
        );
        return { name: i.name, encodedValue: encodedValue, id: i.id };
      });
  }
}
