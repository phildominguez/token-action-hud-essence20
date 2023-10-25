export const INITIATIVE_NAME = "Initiative";
export const INITIATIVE_ID = 'id-initiative';

export const SKILLS_NAME = "Skills";
export const SKILLS_ID = 'id-skills';

export const INFO_NAME = "Info";
export const INFO_ID = 'id-info';

/* Skills */

export const SKILLS = {
  strength: {
    name: "Strength",
    id: "id-skills-strength",
  },
  speed: {
    name: "Speed",
    id: "id-skills-speed",
  },
  smarts: {
    name: "Smarts",
    id: "id-skills-smarts",
  },
  social: {
    name: "Social",
    id: "id-skills-social",
  },
}

/* Groups - Items */

export const ITEMS = {
  classFeatures: {
    name: "Class Features",
    infoId: 'id-info-class-features',
    type: 'classFeature',
  },
  weapons: {
    name: "Weapons",
    id: 'id-weapons',
    infoId: 'id-info-weapons',
    type: 'weapon',
  },
  weaponEffects: {
    name: "Weapon Effect",
    id: 'id-weapon-effects',
    infoId: 'id-info-weapon-effects',
    type: 'weaponEffect',
  },
  armor: {
    name: "Armor",
    infoId: 'id-info-armor',
    type: 'armor',
  },
  contacts: {
    name: "Contacts",
    infoId: 'id-info-contacts',
    type: 'contact',
  },
  gear: {
    name: "Gear",
    infoId: 'id-info-gear',
    type: 'gear',
  },
  powers: {
    name: "Powers",
    id: 'id-powers',
    infoId: 'id-info-powers',
    type: 'power',
  },
  perks: {
    name: "Perks",
    infoId: 'id-info-perks',
    type: 'perk',
  },
  origins: {
    name: "Origins",
    infoId: 'id-info-origins',
    type: 'origin',
  },
  bonds: {
    name: "Bonds",
    infoId: 'id-info-bonds',
    type: 'bond',
  },
  hangUps: {
    name: "Hang-Ups",
    infoId: 'id-info-hang-ups',
    type: 'hangUp',
  },
  altModes: {
    name: "Alt Modes",
    infoId: 'id-info-alt-modes',
    type: 'altMode',
  },
  features: {
    name: "Features",
    infoId: 'id-info-features',
    type: 'feature',
  },
  megaformTraits: {
    name: "Megaform Traits",
    infoId: 'id-info-megaform-traits',
    type: 'megaformTrait',
  },
  spells: {
    name: "Spells",
    infoId: 'id-info-spells',
    type: 'spell',
  },
  magicBaubles: {
    name: "Magic Baubles",
    infoId: 'id-info-magic-baubles',
    type: 'magicBauble',
  },
  threatPowers: {
    name: "Threat Powers",
    infoId: 'id-info-threat-powers',
    type: 'threatPower',
  },
};

export const DEFAULTS = {
  layout: [ // The first row of buttons always visible on the HUD
    {
      type: 'system',
      nestId: INITIATIVE_ID,
      id: INITIATIVE_ID,
      name: INITIATIVE_NAME,
      groups: [ // The action groups visible when a Category is hovered/clicked
        {
          type: 'system',
          nestId: `${INITIATIVE_ID}_${INITIATIVE_ID}`,
          id: INITIATIVE_ID,
          name: INITIATIVE_NAME,
          settings: {showTitle: false}
        },
      ],
    },
    {
      type: 'system',
      nestId: SKILLS_ID,
      id: SKILLS_ID,
      name: SKILLS_NAME,
      groups: [
        {
          type: 'system',
          nestId: `${SKILLS_ID}_${SKILLS.strength.id}`,
          id: SKILLS.strength.id,
          name: SKILLS.strength.name,
        },
        {
          type: 'system',
          nestId: `${SKILLS_ID}_${SKILLS.speed.id}`,
          id: SKILLS.speed.id,
          name: SKILLS.speed.name,
        },
        {
          type: 'system',
          nestId: `${SKILLS_ID}_${SKILLS.smarts.id}`,
          id: SKILLS.smarts.id,
          name: SKILLS.smarts.name,
        },
        {
          type: 'system',
          nestId: `${SKILLS_ID}_${SKILLS.social.id}`,
          id: SKILLS.social.id,
          name: SKILLS.social.name,
        },
      ],
    },
    {
      type: 'system',
      nestId: ITEMS.weapons.id,
      id: ITEMS.weapons.id,
      name: ITEMS.weapons.name,
      groups: [
        {
          type: 'system',
          nestId: `${ITEMS.weapons.id}_${ITEMS.weapons.id}`,
          id: ITEMS.weapons.id,
          name: "",
        },
      ],
    },
    {
      type: 'system',
      nestId: ITEMS.powers.id,
      id: ITEMS.powers.id,
      name: ITEMS.powers.name,
      groups: [
        {
          type: 'system',
          nestId: `${ITEMS.powers.id}_${ITEMS.powers.id}`,
          id: ITEMS.powers.id,
          name: "",
        },
      ],
    },
    {
      nestId: INFO_ID,
      id: INFO_ID,
      name: INFO_NAME,
      groups: [
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.classFeatures.infoId}`,
          id: ITEMS.classFeatures.infoId,
          name: ITEMS.classFeatures.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.weapons.infoId}`,
          id: ITEMS.weapons.infoId,
          name: ITEMS.weapons.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.armor.infoId}`,
          id: ITEMS.armor.infoId,
          name: ITEMS.armor.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.contacts.infoId}`,
          id: ITEMS.contacts.infoId,
          name: ITEMS.contacts.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.gear.infoId}`,
          id: ITEMS.gear.infoId,
          name: ITEMS.gear.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.powers.infoId}`,
          id: ITEMS.powers.infoId,
          name: ITEMS.powers.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.perks.infoId}`,
          id: ITEMS.perks.infoId,
          name: ITEMS.perks.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.origins.infoId}`,
          id: ITEMS.origins.infoId,
          name: ITEMS.origins.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.bonds.infoId}`,
          id: ITEMS.bonds.infoId,
          name: ITEMS.bonds.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.hangUps.infoId}`,
          id: ITEMS.hangUps.infoId,
          name: ITEMS.hangUps.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.altModes.infoId}`,
          id: ITEMS.altModes.infoId,
          name: ITEMS.altModes.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.features.infoId}`,
          id: ITEMS.features.infoId,
          name: ITEMS.features.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.megaformTraits.infoId}`,
          id: ITEMS.megaformTraits.infoId,
          name: ITEMS.megaformTraits.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.spells.infoId}`,
          id: ITEMS.spells.infoId,
          name: ITEMS.spells.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.magicBaubles.infoId}`,
          id: ITEMS.magicBaubles.infoId,
          name: ITEMS.magicBaubles.name,
        },
        {
          type: 'system',
          nestId: `${INFO_ID}_${ITEMS.threatPowers.infoId}`,
          id: ITEMS.threatPowers.infoId,
          name: ITEMS.threatPowers.name,
        },
      ],
    },
  ],
};
