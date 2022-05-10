import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRemovedAction } from '../../redux/books/books';
import './book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleBookRemoved = (id) => {
    dispatch(bookRemovedAction(id));
  };

  return (
    <div className="book flex">
      <div className="book-details flex flex--column">
        <p className="text text--h">Category</p>
        <h2 className="text text--t">{book.title}</h2>
        <p className="text text--p">{book.author}</p>
        <ul className="nav nav--buttons">
          <li>
            <button type="button" className="btn btn--text">
              Comments
            </button>
          </li>
          <li>
            <button
              onClick={() => handleBookRemoved(book.id)}
              type="button"
              className="btn btn--text"
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="btn btn--text">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-status flex">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="inside-circle" />
          </div>
        </div>

        <div className="complete-status flex flex--column">
          <span className="percent">64%</span>
          <p className="text text--p">Completed</p>
        </div>
      </div>
      <div className="book-chapter flex flex--column">
        <p className="text text--h">CURRENT CHAPTER</p>
        <p className="text text--p">Chapter 17</p>
        <button type="button" className="btn btn--primary">
          UPDAE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;
