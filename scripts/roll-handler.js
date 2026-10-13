import { MACRO_TYPES } from './constants.js';
import { Utils } from "./utils.js";

export let RollHandler = null;

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
  RollHandler = class RollHandler extends coreModule.api.RollHandler {
    /** @override */
    async handleActionClick(event, encodedValue) {
      const [macroType, actionId] = encodedValue.split(this.delimiter ?? "|");

      if (Utils.getSetting('renderItemOnRightClick') && this.isRenderItem()) {
        if ([MACRO_TYPES.info, MACRO_TYPES.item, MACRO_TYPES.use].includes(macroType)) {
          this.renderItem(this.actor, actionId);
        }

        return;
      }

      // The system's own entry points (game.essence20 - the sheet's buttons under stable names).
      const api = game.essence20;
      switch (macroType) {
        case MACRO_TYPES.initiative:
          this.actor.rollInitiative({ createCombatants: true });
          break;
        case MACRO_TYPES.morph:
          this.actor.morph();
          break;
        case MACRO_TYPES.transform:
          this.actor.transform(actionId ?? null);
          break;
        case MACRO_TYPES.skill:
          if (api?.rollSkill) {
            api.rollSkill(this.actor, actionId);
          } else {
            this.actor.rollSkill({ skill: actionId });
          }
          break;
        case MACRO_TYPES.item:
          this.rollItemMacro(actionId);
          break;
        case MACRO_TYPES.info:
          this.rollItemMacro(actionId, { rollType: 'info' });
          break;
        case MACRO_TYPES.use: {
          const item = this.findItem(actionId);
          if (item) api?.useItem?.(item);
          break;
        }
        case MACRO_TYPES.zordSummon:
        case MACRO_TYPES.zordBoard:
        case MACRO_TYPES.zordDisembark: {
          const zord = await fromUuid(actionId);
          const method = { [MACRO_TYPES.zordSummon]: 'summon', [MACRO_TYPES.zordBoard]: 'board', [MACRO_TYPES.zordDisembark]: 'disembark' }[macroType];
          if (zord) await api?.zord?.[method]?.(this.actor, zord);
          break;
        }
        case MACRO_TYPES.zordDisembarkCrew: {
          const member = await fromUuid(actionId);
          if (member) await api?.zord?.disembark?.(member, this.actor);
          break;
        }
        default:
          break;
      }
    }

    findItem(actionId) {
      return this.actor.items.find((i) => i.uuid === actionId) ?? null;
    }

    rollItemMacro(actionId, dataset = {}) {
      const item = this.findItem(actionId);
      if (item) {
        item.roll(dataset);
      }
    }

    /** @override - an item's sheet from its uuid (the action ids are uuids). */
    renderItem(actor, actionId) {
      const item = this.findItem(actionId);
      if (item) {
        item.sheet.render(true);
        return;
      }

      super.renderItem?.(actor, actionId);
    }
  };
});
