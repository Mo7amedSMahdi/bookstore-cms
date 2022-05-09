const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

let lastId = 0;

export const bookAddedAction = (book) => {
  return {
    type: BOOK_ADDED,
    payload: {
      title: book.title,
      author: book.author,
      category: book.category,
    },
  };
};

export const bookRemovedAction = (id) => {
  return {
    type: BOOK_ADDED,
    payload: {
      id,
    },
  };
};

export default bookReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id === action.payload.id);
    default:
      return state;
  }
};
