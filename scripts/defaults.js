/**
 * Default categories and subcategories
 */

export const INITIATIVE_ID = 'id-initiative';
export const INITIATIVE_NAME = "Initiative";

export const WEAPONS_ID = 'id-weapons';
export const WEAPONS_NAME = "Weapons";

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
  ],
};
