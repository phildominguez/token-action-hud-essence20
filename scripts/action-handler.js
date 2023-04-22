import { CoreActionHandler, CoreUtils } from './config.js'
import { SKILL_ACTIONS, SUPPORTED_ACTORS } from './constants.js'
import {
  INITIATIVE_ID,
  ITEMS,
  SKILLS,
} from './defaults.js';

export class ActionHandler extends CoreActionHandler {
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
    for (let [essence, actions] of Object.entries(SKILL_ACTIONS)) {
      this._addActionHelper(actions, SKILLS[essence].id);
    }
  }

  _addWeaponsActions(actor) {
    this._addActionHelper(
      this._getActionsForItemType(ITEMS.weapons.type, actor),
      ITEMS.weapons.id,
    );
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

  _getActionsForItemType(type, actor, actionId = 'item') {
    return actor.items.filter((i) => !!i && i.type == type)
      .map((i) => {
        let encodedValue = [actionId, i.id].join(this.delimiter);
        return { name: i.name, encodedValue: encodedValue, id: i.id };
      });
  }
}
