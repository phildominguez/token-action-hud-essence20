/**
 * Default categories and subcategories
 */

export const INITIATIVE_ID = 'id-initiative';
export const INITIATIVE_NAME = "Initiative";

export const WEAPONS_ID = 'id-weapons';
export const WEAPONS_NAME = "Weapons";

export const POWERS_ID = 'id-powers';
export const POWERS_NAME = "Powers";

export const INFO_CLASS_FEATURES_ID = 'id-info-class-features'
export const INFO_WEAPONS_ID = 'id-info-weapons'
export const INFO_ARMOR_ID = 'id-info-armor'
export const INFO_ID = 'id-info'
export const INFO_NAME = "Info";
export const ARMOR_NAME = "Armor";

export const ROLL_NAME = "Roll";

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
          name: "Class Features",
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
      ],
    },
  ],
};
