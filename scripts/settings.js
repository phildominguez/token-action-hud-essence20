import { MODULE } from './constants.js'

/**
 * Register module settings
 * Called by Token Action HUD Core to register Token Action HUD system module settings
 * @param {function} coreUpdate Token Action HUD Core update function
 */
export function register(coreUpdate) {
  game.settings.register(MODULE.ID, 'renderItemOnRightClick', {
    name: "Open Item Sheet on Right-Click",
    hint: "When right-clicking an item, open the item's sheet",
    scope: 'client',
    config: true,
    type: Boolean,
    default: true,
    onChange: (value) => {
      coreUpdate(value)
    },
  });
}
