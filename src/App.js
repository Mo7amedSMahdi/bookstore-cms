import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Books from './components/books/Books';
import Categories from './components/categories/Categories';

const App = () => (
  <Router>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  </Router>
);

export default App;
