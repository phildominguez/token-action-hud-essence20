import { CoreRollHandler, CoreUtils } from './config.js'

export class RollHandler extends CoreRollHandler {
  /** @override */
  async doHandleActionEvent(event, encodedValue) {
    let payload = encodedValue.split("|");

    const macroType = payload[0];
    const actionId = payload[1];

    switch (macroType) {
      case "initiative":
        console.log("Roll initiative here")
        break;
      default:
        break;
    }
  }
}
