/**
 * Default categories and subcategories
 */

export const INITIATIVE_ID = 'initiative';

export const INITIATIVE_NAME = "Initiative";
export const ROLL_NAME = "Roll";

export const DEFAULTS = {
  categories: [
    {
      nestId: INITIATIVE_ID,
      id: INITIATIVE_ID,
      name: INITIATIVE_NAME,
      type: 'system',
      subcategories: [
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
  subcategories: [
    { id: INITIATIVE_ID, name: INITIATIVE_NAME, type: 'system', hasDerivedSubcategories: false },
  ],
};
