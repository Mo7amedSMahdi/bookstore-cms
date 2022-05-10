import React from 'react';
import { useSelector } from 'react-redux';
import './books.css';
import Book from '../book/Book';
import AddBook from '../addBookForm/AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <section className="books flex flex--column">
      <div className="books-list flex flex--column">
        {books.length ? (
          books.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <p>No Books to show!</p>
        )}
      </div>
      <AddBook />
    </section>
  );
};

export default Books;
