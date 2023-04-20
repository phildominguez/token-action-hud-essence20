import { CoreActionHandler, CoreUtils } from './config.js'
import {
  INITIATIVE_ID,
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

    this._addInitiativeActions(actor, tokenId, {id: INITIATIVE_ID, type: 'system'})
  }

  _addInitiativeActions(actor, tokenId, parent) {
    const actions = [{
      id: 'initiative-action-id',
      name: 'Initiative',
      encodedValue: 'initiative',
    }];
    this.addActionsToActionList(actions, parent);
  }
}
