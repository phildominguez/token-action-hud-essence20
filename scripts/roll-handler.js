import { MACRO_TYPES } from './constants.js';
import { Utils } from "./utils.js";

export let RollHandler = null;

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
  RollHandler = class RollHandler extends coreModule.api.RollHandler {
    /** @override */
    async doHandleActionEvent(event, encodedValue) {
      let payload = encodedValue.split("|");

      const macroType = payload[0];
      const actionId = payload[1];

      if (Utils.getSetting('renderItemOnRightClick') && this.isRenderItem()) {
        if (macroType == MACRO_TYPES.info) {
          this.renderItem(this.actor, actionId);
        }

        return;
      }

      switch (macroType) {
        case MACRO_TYPES.initiative:
          this.actor.rollInitiative({ createCombatants: true });
          break;
        case MACRO_TYPES.skill:
          this.actor.rollSkill({ skill: actionId });
          break;
        case MACRO_TYPES.item:
          this.rollItemMacro(actionId);
          break;
        case MACRO_TYPES.info:
          this.rollItemMacro(actionId, { rollType: 'info' });
          break;
        default:
          break;
      }
    }

    rollItemMacro(actionId, dataset = {}) {
      const item = this.actor.items.find((i) => i.uuid === actionId);
      if (item) {
        item.roll(dataset);
      }
    }
  }
})
