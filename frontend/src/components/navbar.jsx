import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const Handlesearch = (s) => {
    s.preventDefault();
    if (query) {
      navigate(`/${query.toLowerCase()}/`);
    }
  };

  return (
    <header>
      <Link to="/">
        <h1 style={{ fontSize: 'xx-large' }}>ExpertCoder</h1>
      </Link>
      <form onSubmit={Handlesearch} className="search-form">
        <input
          type="search"
          value={query}
          onChange={(s) => setQuery(s.target.value)}
          placeholder="Search here"
        />
        <button type="submit" style={{ color: 'black' }}>
          Search
        </button>
      </form>
      <div>
        <Link to="/">Home</Link>
        <Link to="/coursespage">Courses</Link>
        <Link to="/examspage">Exams</Link>
        <Link to="">Logout</Link>
      </div>
    </header>
  );
}

export default Navbar;