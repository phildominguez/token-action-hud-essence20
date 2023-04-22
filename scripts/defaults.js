/**
 * Top-level Categories
 */

export const INITIATIVE_NAME = "Initiative";
export const INITIATIVE_ID = 'id-initiative';

export const SKILLS_NAME = "Skills";
export const SKILLS_ID = 'id-skills';

export const WEAPONS_NAME = "Weapons";
export const WEAPONS_ID = 'id-weapons';
export const INFO_WEAPONS_ID = 'id-info-weapons';

export const CLASS_FEATURES_NAME = "Class Features";
export const INFO_CLASS_FEATURES_ID = 'id-info-class-features';

export const INFO_NAME = "Info";
export const INFO_ID = 'id-info';

/* Subcategories - Skills */

export const STRENGTH_NAME = "Strength";
export const SKILLS_STRENGTH_ID = 'id-skills-strength';

export const SPEED_NAME = "Speed";
export const SKILLS_SPEED_ID = 'id-skills-speed';

export const SMARTS_NAME = "Smarts";
export const SKILLS_SMARTS_ID = 'id-skills-smarts';

export const SOCIAL_NAME = "Social";
export const SKILLS_SOCIAL_ID = 'id-skills-social';

/* Subcategories - Common Items */

export const ARMOR_NAME = "Armor";
export const INFO_ARMOR_ID = 'id-info-armor';

export const CONTACTS_NAME = "Contacts";
export const INFO_CONTACTS_ID = 'id-info-contacts';

export const GEAR_NAME = "Gear";
export const INFO_GEAR_ID = 'id-info-gear';

export const POWERS_NAME = "Powers";
export const POWERS_ID = 'id-powers';
export const INFO_POWERS_ID = 'id-info-powers';

export const PERKS_NAME = "Perks";
export const INFO_PERKS_ID = 'id-info-perks';

export const ORIGINS_NAME = "Origins";
export const INFO_ORIGINS_ID = 'id-info-origins';

export const BONDS_NAME = "Bonds";
export const INFO_BONDS_ID = 'id-info-bonds';

export const HANG_UPS_NAME = "Hang-Ups";
export const INFO_HANG_UPS_ID = 'id-info-hang-ups';

/* Subcategories - Transformers Items */

export const ALT_MODES_NAME = "Alt Modes";
export const INFO_ALT_MODES_ID = 'id-info-alt-modes';

/* Subcategories - Zord Items */

export const FEATURES_NAME = "Features";
export const INFO_FEATURES_ID = 'id-info-features';

export const MEGAFORM_TRAITS_NAME = "Megaform Traits";
export const INFO_MEGAFORM_TRAITS_ID = 'id-info-megaform-traits';

/* Subcategories - Pony Items */

export const SPELLS_NAME = "Spells";
export const INFO_SPELLS_ID = 'id-info-spells';

export const MAGIC_BAUBLES_NAME = "Magic Baubles";
export const INFO_MAGIC_BAUBLES_ID = 'id-info-magic-baubles';

/* Subcategories - NPC Items */

export const THREAT_POWERS_NAME = "Threat Powers";
export const INFO_THREAT_POWERS_ID = 'id-info-threat-powers';

export const DEFAULTS = {
  categories: [ // The first row of buttons always visible on the HUD
    {
      nestId: INITIATIVE_ID,
      id: INITIATIVE_ID,
      name: INITIATIVE_NAME,
      type: 'system',
      subcategories: [ // The action groups visible when a Category is hovered/clicked
        {
          nestId: 'nest-id-initiative',
          id: INITIATIVE_ID,
          name: "",
          type: 'system',
          hasDerivedSubcategories: false,
        },
      ],
    },
    {
      nestId: SKILLS_ID,
      id: SKILLS_ID,
      name: SKILLS_NAME,
      type: 'system',
      subcategories: [
        {
          nestId: 'nest-id-strength',
          id: SKILLS_STRENGTH_ID,
          name: STRENGTH_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-strength',
          id: SKILLS_SPEED_ID,
          name: SPEED_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-smarts',
          id: SKILLS_SMARTS_ID,
          name: SMARTS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-social',
          id: SKILLS_SOCIAL_ID,
          name: SOCIAL_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
      ],
    },
    {
      nestId: WEAPONS_ID,
      id: WEAPONS_ID,
      name: WEAPONS_NAME,
      type: 'system',
      subcategories: [
        {
          nestId: 'nest-id-weapons',
          id: WEAPONS_ID,
          name: "",
          type: 'system',
          hasDerivedSubcategories: false,
        },
      ],
    },
    {
      nestId: POWERS_ID,
      id: POWERS_ID,
      name: POWERS_NAME,
      type: 'system',
      subcategories: [
        {
          nestId: 'nest-id-powers',
          id: POWERS_ID,
          name: "",
          type: 'system',
          hasDerivedSubcategories: false,
        },
      ],
    },
    {
      nestId: INFO_ID,
      id: INFO_ID,
      name: INFO_NAME,
      type: 'system',
      subcategories: [
        {
          nestId: 'nest-id-info-class-features',
          id: INFO_CLASS_FEATURES_ID,
          name: CLASS_FEATURES_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-weapons',
          id: INFO_WEAPONS_ID,
          name: WEAPONS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-weapons',
          id: INFO_ARMOR_ID,
          name: ARMOR_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-contacts',
          id: INFO_CONTACTS_ID,
          name: CONTACTS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-gear',
          id: INFO_GEAR_ID,
          name: GEAR_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-powers',
          id: INFO_POWERS_ID,
          name: POWERS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-perks',
          id: INFO_PERKS_ID,
          name: PERKS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-origins',
          id: INFO_ORIGINS_ID,
          name: ORIGINS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-bonds',
          id: INFO_BONDS_ID,
          name: BONDS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-hang-ups',
          id: INFO_HANG_UPS_ID,
          name: HANG_UPS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-alt-modes',
          id: INFO_ALT_MODES_ID,
          name: ALT_MODES_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-features',
          id: INFO_FEATURES_ID,
          name: FEATURES_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-megaform-traits',
          id: INFO_MEGAFORM_TRAITS_ID,
          name: MEGAFORM_TRAITS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-spells',
          id: INFO_SPELLS_ID,
          name: SPELLS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-spells',
          id: INFO_MAGIC_BAUBLES_ID,
          name: MAGIC_BAUBLES_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
        {
          nestId: 'nest-id-info-threat-powers',
          id: INFO_THREAT_POWERS_ID,
          name: THREAT_POWERS_NAME,
          type: 'system',
          hasDerivedSubcategories: false,
        },
      ],
    },
  ],
};
