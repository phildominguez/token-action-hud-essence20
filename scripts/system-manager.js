import { ActionHandler as ActionHandler } from "./action-handler.js";
import { RollHandler as Core } from "./roll-handler.js";
import { DEFAULTS } from './defaults.js';

export let SystemManager = null;

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
  SystemManager = class SystemManager extends coreModule.api.SystemManager {
    /** @override */
    doGetCategoryManager() {
      return new CoreCategoryManager();
    }

    /** @override */
    doGetActionHandler(categoryManager) {
      return new ActionHandler(categoryManager);
    }

    /** @override */
    getAvailableRollHandlers() {
      return { core: "Core Essence20" };
    }

    /** @override */
    doGetRollHandler(handlerId) {
      return new Core();
    }

    async doRegisterDefaultFlags() {
      return DEFAULTS;
    }
  }
});
