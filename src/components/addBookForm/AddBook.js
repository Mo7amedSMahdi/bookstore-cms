import React from 'react';
import './addbook.css';

const AddBook = () => (
  <div className="add-book flex flex--column">
    <h2 className="text text--t">ADD NEW BOOK</h2>
    <form action="/" className="add-book-form flex">
      <input
        id="title"
        name="title"
        type="text"
        className="input input--text"
        placeholder="Book title"
      />
      <input
        type="text"
        id="author"
        name="author"
        className="input input--text"
        placeholder="author"
      />
      <button type="button" className="btn btn--primary">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default AddBook;
