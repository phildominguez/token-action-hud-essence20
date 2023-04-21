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
export const REQUIRED_CORE_MODULE_VERSION = '1.3';

/**
 * Actors types supported by this module
 */
export const supportedActors = [
  'giJoe',
  'megaformZord',
  'npc',
  'pony',
  'powerRanger',
  'transformer',
  'vehicle',
  'zord',
];

/**
 * Skill actions
 */
export const skillActions = {
  strength: [
    {
      id: 'id-athletics-action',
      name: "Athletics",
      encodedValue: 'skill|athletics',
    },
    {
      id: 'id-brawn-action',
      name: "Brawn",
      encodedValue: 'skill|brawn',
    },
    {
      id: 'id-intimidation-action',
      name: "Intimidation",
      encodedValue: 'skill|intimidation',
    },
    {
      id: 'id-might-action',
      name: "Might",
      encodedValue: 'skill|might',
    },
  ],
  speed: [
    {
      id: 'id-acrobatics-action',
      name: "Acrobatics",
      encodedValue: 'skill|acrobatics',
    },
    {
      id: 'id-driving-action',
      name: "Driving",
      encodedValue: 'skill|driving',
    },
    {
      id: 'id-finesse-action',
      name: "Finesse",
      encodedValue: 'skill|finesse',
    },
    {
      id: 'id-infiltration-action',
      name: "Infiltration",
      encodedValue: 'skill|infiltration',
    },
    {
      id: 'id-targeting-action',
      name: "Targeting",
      encodedValue: 'skill|targeting',
    },
  ],
  smarts: [
    {
      id: 'id-alertness-action',
      name: "Alertness",
      encodedValue: 'skill|alertness',
    },
    {
      id: 'id-culture-action',
      name: "Culture",
      encodedValue: 'skill|culture',
    },
    {
      id: 'id-science-action',
      name: "Science",
      encodedValue: 'skill|science',
    },
    {
      id: 'id-survival-action',
      name: "Survival",
      encodedValue: 'skill|survival',
    },
    {
      id: 'id-technology-action',
      name: "Technology",
      encodedValue: 'skill|technology',
    },
  ],
  social: [
    {
      id: 'id-animal-handling-action',
      name: "Animal Handling",
      encodedValue: 'skill|animal-handling',
    },
    {
      id: 'id-deception-action',
      name: "Deception",
      encodedValue: 'skill|deception',
    },
    {
      id: 'id-performance-action',
      name: "Performance",
      encodedValue: 'skill|performance',
    },
    {
      id: 'id-persuasion-action',
      name: "Persuasion",
      encodedValue: 'skill|persuasion',
    },
    {
      id: 'id-streetwise-action',
      name: "Streetwise",
      encodedValue: 'skill|streetwise',
    },
  ],
};
