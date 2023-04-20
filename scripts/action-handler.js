import { CoreActionHandler, CoreUtils } from './config.js'
import {
  INITIATIVE_ID,
  POWERS_ID,
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

    if (actor.type !== 'powerRanger') {
      return;
    }

    this._addInitiativeActions(actor, tokenId, { id: INITIATIVE_ID, type: 'system' })
    this._addWeaponsActions(actor, tokenId, { id: WEAPONS_ID, type: 'system' })
    this._addPowersActions(actor, tokenId, { id: POWERS_ID, type: 'system' })
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

  _getActionsForItemType(type, actor) {
    return actor.items.filter((i) => !!i && i.type == type)
      .map((i) => {
        let encodedValue = ['item', i.id].join(
          this.delimiter
        );
        return { name: i.name, encodedValue: encodedValue, id: i.id };
      });
  }
}
