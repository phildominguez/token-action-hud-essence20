import { CoreRollHandler, CoreUtils } from './config.js'

export class RollHandler extends CoreRollHandler {
  /** @override */
  async doHandleActionEvent(event, encodedValue) {
    let payload = encodedValue.split("|");

    const macroType = payload[0];
    const actionId = payload[1];

    switch (macroType) {
      case 'initiative':
        this.actor.rollInitiative({ createCombatants: true });
        break;
      case 'item':
        this.rollItemMacro(event, actionId);
        break;
      default:
        break;
    }
  }

  rollItemMacro(event, actionId) {
    const item = this.actor.items.find((i) => i.id === actionId);

    if (item) {
      item.roll({});
    }
  }
}
