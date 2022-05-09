const CATEGORIES_STATUS = 'CATEGORY_STATUS';

export const caretgoriesStatusAction = (status) => ({
  type: CATEGORIES_STATUS,
  payload: {
    status,
  },
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_STATUS:
      return [
        {
          status: 'Under construction',
        },
      ];
    default:
      return state;
  }
};

export default categoriesReducer;
