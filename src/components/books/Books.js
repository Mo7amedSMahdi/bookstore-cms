import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookApiAction } from '../../redux/books/books';
import './books.css';
import Book from '../book/Book';
import AddBook from '../addBookForm/AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApiAction());
  }, []);

  return (
    <section className="books flex flex--column">
      <div className="books-list flex flex--column">
        {books.length ? books.map((book) => <Book key={book.item_id} book={book} />) : <p>No Books available!</p>}
      </div>
      <AddBook />
    </section>
  );
};

export default Books;
