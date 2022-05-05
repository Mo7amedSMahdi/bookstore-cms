import React from 'react';
import './books.css';
import Book from '../book/Book';
import AddBook from '../addBookForm/AddBook';

const Books = () => (
  <section className="books flex flex--column">
    <div className="books-list flex flex--column">
      <Book />
      <Book />
      <Book />
    </div>
    <AddBook />
  </section>
);

export default Books;
