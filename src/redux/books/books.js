import { v4 as uuidv4 } from 'uuid';

const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = [
  {
    id: uuidv4(),
    title: 'book 1',
    author: 'author 1',
  },
  {
    id: uuidv4(),
    title: 'book 2',
    author: 'author 2',
  },
  {
    id: uuidv4(),
    title: 'book 3',
    author: 'author 3',
  },
  {
    id: uuidv4(),
    title: 'book 4',
    author: 'author 4',
  },
  {
    id: uuidv4(),
    title: 'book 5',
    author: 'author 5',
  },
  {
    id: uuidv4(),
    title: 'book 6',
    author: 'author 6',
  },
];

export const bookAddedAction = (book) => ({
  type: BOOK_ADDED,
  payload: {
    title: book.title,
    author: book.author,
  },
});

export const bookRemovedAction = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

const booksReducer = (state = initialState, action) => {
  let newState = [];
  if (action.type === BOOK_ADDED) {
    newState = [
      ...state,
      {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
  } else if (action.type === BOOK_REMOVED) {
    newState = state.filter((book) => book.id !== action.payload.id);
  } else {
    newState = state;
  }

  return newState;
};

export default booksReducer;
