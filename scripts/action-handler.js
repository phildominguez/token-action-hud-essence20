import { CoreActionHandler, CoreUtils } from './config.js'
import {
  INFO_ID,
  INITIATIVE_ID,
  POWERS_ID,
  WEAPONS_ID,
  INFO_CLASS_FEATURES_ID,
  INFO_WEAPONS_ID,
  INFO_ARMOR_ID,
  INFO_CONTACTS_ID,
  INFO_GEAR_ID,
  INFO_POWERS_ID,
} from './defaults.js';

export class ActionHandler extends CoreActionHandler {
  /** @override */
  async buildSystemActions(subcategoryIds) {
    const token = this.token;
    if (!token) return;
    const tokenId = token.id;
    const actor = this.actor;
    if (!actor) return;

    if (actor.type !== 'powerRanger') {
      return;
    }

    this._addInitiativeActions(actor, tokenId, { id: INITIATIVE_ID, type: 'system' })
    this._addWeaponsActions(actor, tokenId, { id: WEAPONS_ID, type: 'system' })
    this._addPowersActions(actor, tokenId, { id: POWERS_ID, type: 'system' })
    this._addInfoActions(actor, tokenId, { id: INFO_ID, type: 'system' })
  }

  _addInitiativeActions(actor, tokenId, parent) {
    const actions = [{
      id: 'id-initiative-action',
      name: 'Initiative',
      encodedValue: 'initiative',
    }];
    this.addActionsToActionList(actions, parent);
  }

  _addWeaponsActions(actor, tokenId, parent) {
    this.addActionsToActionList(this._getActionsForItemType('weapon', actor), parent);
  }

  _addPowersActions(actor, tokenId, parent) {
    this.addActionsToActionList(this._getActionsForItemType('power', actor), parent);
  }

  _addInfoActions(actor, tokenId, parent) {
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
