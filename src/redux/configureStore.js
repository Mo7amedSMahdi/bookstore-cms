import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export default store = createStore(rootReducer);
