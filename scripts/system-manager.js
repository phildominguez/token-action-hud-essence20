import { CoreSystemManager, CoreCategoryManager, CoreUtils } from './config.js'
import { ActionHandler as ActionHandler } from "./action-handler.js";
import { RollHandler as Core } from "./roll-handler.js";
import { DEFAULTS } from './defaults.js';

export class SystemManager extends CoreSystemManager {
  constructor(appName) {
    super(appName);
  }

  /** @override */
  doGetCategoryManager () {
    return new CoreCategoryManager()
  }

  /** @override */
  doGetActionHandler(categoryManager) {
    let actionHandler = new ActionHandler(categoryManager);
    return actionHandler;
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

  async doRegisterDefaultFlags () {
    return DEFAULTS;
  }
}
