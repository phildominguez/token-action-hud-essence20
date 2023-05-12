import { CoreSystemManager } from './config.js';
import { ActionHandler as ActionHandler } from "./action-handler.js";
import { RollHandler as Core } from "./roll-handler.js";
import { DEFAULTS } from './defaults.js';

export class SystemManager extends CoreSystemManager {
  /** @override */
  doGetActionHandler() {
    return new ActionHandler();
  }

  /** @override */
  getAvailableRollHandlers() {
    let choices = { core: "Core Essence20" };

    return choices;
  }

  /** @override */
  doGetRollHandler(handlerId) {
    return new Core();
  }

  async doRegisterDefaultFlags() {
    return DEFAULTS;
  }
}
