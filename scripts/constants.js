/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-essence20',
};

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core',
};

/**
 * Core module version required by the system module
 */
// "2": any 2.x - Token Action HUD Core 2.0 (Foundry v13) and 2.1 (Foundry v14) alike.
export const REQUIRED_CORE_MODULE_VERSION = '2';

/**
 * Macro types used in encoded strings and RollHandler
 */
export const MACRO_TYPES = {
  info: 'info',
  initiative: 'initiative',
  item: 'item',
  morph: 'morph',
  skill: 'skill',
  transform: 'transform',
  // An item's Use button (game.essence20.useItem), and a Ranger's Zord actions (game.essence20.zord).
  use: 'use',
  zordSummon: 'zordSummon',
  zordBoard: 'zordBoard',
  zordDisembark: 'zordDisembark',
  // From the Zord's own HUD: one of its crew gets out.
  zordDisembarkCrew: 'zordDisembarkCrew',
}

/**
 * Actors types supported by this module
 */
export const SUPPORTED_ACTORS = [
  'companion',
  'megaform',
  'npc',
  'playerCharacter',
  'vehicle',
  'zord',
];

/**
 * The Skill groups, in order: CONFIG.E20.skillsByEssence's keys ("any" - Spellcasting, Weird - shown as Other).
 */
export const SKILL_ESSENCES = ['strength', 'speed', 'smarts', 'social', 'any'];
