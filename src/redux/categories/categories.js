const CATEGORIES_STATUS = 'CATEGORY_STATUS';

export const caretgoriesStatusAction = (status) => {
  return {
    type: CATEGORIES_STATUS,
    payload: {
      status,
    },
  };
};

export default categoriesReducer = (state = [], action) => {
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
