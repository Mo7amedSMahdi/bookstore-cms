import React from 'react';
import { useDispatch } from 'react-redux';
import { bookAddedAction } from '../../redux/books/books';
import './addbook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleBookAdded = (e) => {
    e.preventDefault();
    const [title, author] = e.target.elements;
    if (title.value.trim() && author.value.trim()) {
      const bookObj = {
        title: title.value.trim(),
        author: author.value.trim(),
      };
      dispatch(bookAddedAction(bookObj));
    }
  };

  return (
    <div className="add-book flex flex--column">
      <h2 className="text text--t">ADD NEW BOOK</h2>
      <form
        onSubmit={handleBookAdded}
        action="/"
        className="add-book-form flex"
      >
        <input
          id="title"
          name="title"
          type="text"
          className="input input--text"
          placeholder="Book title"
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          className="input input--text"
          placeholder="author"
          required
        />
        <button type="submit" className="btn btn--primary">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
