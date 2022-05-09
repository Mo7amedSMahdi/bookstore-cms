const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

let lastId = 0;

export const bookAddedAction = (book) => ({
  type: BOOK_ADDED,
  payload: {
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const bookRemovedAction = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

const booksReducer = (state = [], action) => {
  let newState = [];
  if (action.type === BOOK_ADDED) {
    newState = [
      ...state,
      {
        id: (lastId += 1),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      },
    ];
  } else if (action.type === BOOK_REMOVED) {
    newState = state.filter((book) => book.id === action.payload.id);
  } else {
    newState = state;
  }

  return newState;
};

export default booksReducer;
