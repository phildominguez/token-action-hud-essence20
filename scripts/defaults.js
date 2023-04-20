/**
 * Default categories and subcategories
 */

export const INITIATIVE_ID = 'initiative';

export const INITIATIVE_NAME = "Initiative";
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
          nestId: 'initiative-nest-id',
          id: INITIATIVE_ID,
          name: "",
          type: 'system',
          hasDerivedSubcategories: false,
        },
      ],
    },
  ],
};
