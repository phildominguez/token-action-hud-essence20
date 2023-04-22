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

    this._addInitiativeActions();
    this._addSkillsActions();
    this._addWeaponsActions(actor);
    this._addPowersActions(actor);
    this._addInfoActions(actor);
  }

  _addActionHelper(actions, parentId) {
    this.addActionsToActionList(actions, { id: parentId, type: 'system' });
  }

  _addInitiativeActions() {
    const actions = [{
      id: 'id-initiative-action',
      name: "Roll",
      encodedValue: 'initiative',
    }];
    this._addActionHelper(actions, INITIATIVE_ID);
  }

  _addSkillsActions() {
    this._addActionHelper(skillActions.strength, SKILLS_STRENGTH_ID);
    this._addActionHelper(skillActions.speed, SKILLS_SPEED_ID);
    this._addActionHelper(skillActions.smarts, SKILLS_SMARTS_ID);
    this._addActionHelper(skillActions.social, SKILLS_SOCIAL_ID);
  }

  _addWeaponsActions(actor) {
    this._addActionHelper(this._getActionsForItemType('weapon', actor), WEAPONS_ID);
  }

  _addPowersActions(actor) {
    this._addActionHelper(this._getActionsForItemType('power', actor), POWERS_ID);
  }

  _addInfoActions(actor) {
    // Common items
    this._addActionHelper(
      this._getActionsForItemType('classFeature', actor, 'info'), INFO_CLASS_FEATURES_ID);
    this._addActionHelper(
      this._getActionsForItemType('weapon', actor, 'info'), INFO_WEAPONS_ID);
    this._addActionHelper(
      this._getActionsForItemType('armor', actor, 'info'), INFO_ARMOR_ID);
    this._addActionHelper(
      this._getActionsForItemType('contact', actor, 'info'), INFO_CONTACTS_ID);
    this._addActionHelper(
      this._getActionsForItemType('gear', actor, 'info'), INFO_GEAR_ID);
    this._addActionHelper(
      this._getActionsForItemType('power', actor, 'info'), INFO_POWERS_ID);
    this._addActionHelper(
      this._getActionsForItemType('perk', actor, 'info'), INFO_PERKS_ID);
    this._addActionHelper(
      this._getActionsForItemType('origin', actor, 'info'), INFO_ORIGINS_ID);
    this._addActionHelper(
      this._getActionsForItemType('bond', actor, 'info'), INFO_BONDS_ID);
    this._addActionHelper(
      this._getActionsForItemType('hangUp', actor, 'info'), INFO_HANG_UPS_ID);

    // Transformer items
    this._addActionHelper(
      this._getActionsForItemType('altMode', actor, 'info'), INFO_ALT_MODES_ID);
    this._addActionHelper(
      this._getActionsForItemType('feature', actor, 'info'), INFO_FEATURES_ID);
    this._addActionHelper(
      this._getActionsForItemType('megaformTrait', actor, 'info'), INFO_MEGAFORM_TRAITS_ID);

    // Pony items
    this._addActionHelper(
      this._getActionsForItemType('spell', actor, 'info'), INFO_SPELLS_ID);
    this._addActionHelper(
      this._getActionsForItemType('magicBauble', actor, 'info'), INFO_MAGIC_BAUBLES_ID);

    // Threat items
    this._addActionHelper(
      this._getActionsForItemType('threatPower', actor, 'info'), INFO_THREAT_POWERS_ID);
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
