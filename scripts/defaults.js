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

/* Subcategories - Items */

export const ITEMS = {
  classFeatures: {
    name: "Class Features",
    infoId: 'id-info-class-features',
    type: 'classFeature',
    nestId: 'nest-id-info-class-features',
  },
  weapons: {
    name: "Weapons",
    id: 'id-weapons',
    infoId: 'id-info-weapons',
    type: 'weapon',
    nestId: 'nest-id-info-weapons',
  },
  armor: {
    name: "Armor",
    infoId: 'id-info-armor',
    type: 'armor',
    nestId: 'nest-id-info-armor',
  },
  contacts: {
    name: "Contacts",
    infoId: 'id-info-contacts',
    type: 'contact',
    nestId: 'nest-id-info-contacts',
  },
  gear: {
    name: "Gear",
    infoId: 'id-info-gear',
    type: 'gear',
    nestId: 'nest-id-info-gear',
  },
  powers: {
    name: "Powers",
    id: 'id-powers',
    infoId: 'id-info-powers',
    type: 'power',
    nestId: 'nest-id-info-powers',
  },
  perks: {
    name: "Perks",
    infoId: 'id-info-perks',
    type: 'perk',
    nestId: 'nest-id-info-perks',
  },
  origins: {
    name: "Origins",
    infoId: 'id-info-origins',
    type: 'origin',
    nestId: 'nest-id-info-origins',
  },
  bonds: {
    name: "Bonds",
    infoId: 'id-info-bonds',
    type: 'bond',
    nestId: 'nest-id-info-bonds',
  },
  hangUps: {
    name: "Hang-Ups",
    infoId: 'id-info-hang-ups',
    type: 'hangUp',
    nestId: 'nest-id-info-hang-ups',
  },
  altModes: {
    name: "Alt Modes",
    infoId: 'id-info-alt-modes',
    type: 'altMode',
    nestId: 'nest-id-info-alt-modes',
  },
  features: {
    name: "Features",
    infoId: 'id-info-features',
    type: 'feature',
    nestId: 'nest-id-info-features',
  },
  megaformTraits: {
    name: "Megaform Traits",
    infoId: 'id-info-megaform-traits',
    type: 'megaformTrait',
    nestId: 'nest-id-info-megaform-traits',
  },
  spells: {
    name: "Spells",
    infoId: 'id-info-spells',
    type: 'spell',
    nestId: 'nest-id-info-spells',
  },
  magicBaubles: {
    name: "Magic Baubles",
    infoId: 'id-info-magic-baubles',
    type: 'magicBauble',
    nestId: 'nest-id-info-spells',
  },
  threatPowers: {
    name: "Threat Powers",
    infoId: 'id-info-threat-powers',
    type: 'threatPower',
    nestId: 'nest-id-info-threat-powers',
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
          nestId: 'nest-id-initiative',
          id: INITIATIVE_ID,
          name: "",
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
          nestId: 'nest-id-strength',
          id: SKILLS.strength.id,
          name: SKILLS.strength.name,
        },
        {
          type: 'system',
          nestId: 'nest-id-speed',
          id: SKILLS.speed.id,
          name: SKILLS.speed.name,
        },
        {
          type: 'system',
          nestId: 'nest-id-smarts',
          id: SKILLS.smarts.id,
          name: SKILLS.smarts.name,
        },
        {
          type: 'system',
          nestId: 'nest-id-social',
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
          nestId: 'nest-id-weapons',
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
          nestId: 'nest-id-powers',
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
          nestId: ITEMS.classFeatures.nestId,
          id: ITEMS.classFeatures.infoId,
          name: ITEMS.classFeatures.name,
        },
        {
          type: 'system',
          nestId: ITEMS.weapons.nestId,
          id: ITEMS.weapons.infoId,
          name: ITEMS.weapons.name,
        },
        {
          type: 'system',
          nestId: ITEMS.armor.nestId,
          id: ITEMS.armor.infoId,
          name: ITEMS.armor.name,
        },
        {
          type: 'system',
          nestId: ITEMS.contacts.nestId,
          id: ITEMS.contacts.infoId,
          name: ITEMS.contacts.name,
        },
        {
          type: 'system',
          nestId: ITEMS.gear.nestId,
          id: ITEMS.gear.infoId,
          name: ITEMS.gear.name,
        },
        {
          type: 'system',
          nestId: ITEMS.powers.nestId,
          id: ITEMS.powers.infoId,
          name: ITEMS.powers.name,
        },
        {
          type: 'system',
          nestId: ITEMS.perks.nestId,
          id: ITEMS.perks.infoId,
          name: ITEMS.perks.name,
        },
        {
          type: 'system',
          nestId: ITEMS.origins.nestId,
          id: ITEMS.origins.infoId,
          name: ITEMS.origins.name,
        },
        {
          type: 'system',
          nestId: ITEMS.bonds.nestId,
          id: ITEMS.bonds.infoId,
          name: ITEMS.bonds.name,
        },
        {
          type: 'system',
          nestId: ITEMS.hangUps.nestId,
          id: ITEMS.hangUps.infoId,
          name: ITEMS.hangUps.name,
        },
        {
          type: 'system',
          nestId: ITEMS.altModes.nestId,
          id: ITEMS.altModes.infoId,
          name: ITEMS.altModes.name,
        },
        {
          type: 'system',
          nestId: ITEMS.features.nestId,
          id: ITEMS.features.infoId,
          name: ITEMS.features.name,
        },
        {
          type: 'system',
          nestId: ITEMS.megaformTraits.nestId,
          id: ITEMS.megaformTraits.infoId,
          name: ITEMS.megaformTraits.name,
        },
        {
          type: 'system',
          nestId: ITEMS.spells.nestId,
          id: ITEMS.spells.infoId,
          name: ITEMS.spells.name,
        },
        {
          type: 'system',
          nestId: ITEMS.magicBaubles.nestId,
          id: ITEMS.magicBaubles.infoId,
          name: ITEMS.magicBaubles.name,
        },
        {
          type: 'system',
          nestId: ITEMS.threatPowers.nestId,
          id: ITEMS.threatPowers.infoId,
          name: ITEMS.threatPowers.name,
        },
      ],
    },
  ],
};
