import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { caretgoriesStatusAction } from '../../redux/categories/categories';
import './categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkCategoriesStatus = () => {
    dispatch(caretgoriesStatusAction());
  };
  return (
    <div className="flex">
      <button
        onClick={checkCategoriesStatus}
        type="button"
        className="btn btn--primary"
      >
        Check status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
