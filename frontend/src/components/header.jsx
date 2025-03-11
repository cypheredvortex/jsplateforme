import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleSearch = (s) => {
    s.preventDefault();
    if (query) {
      navigate(`/${query.toLowerCase()}/`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');  
    navigate('/');
  };

  return (
    <header>
      <Link to="/">
        <h1 style={{ fontSize: 'xx-large' }}>ExpertCoder</h1>
      </Link>

      <form onSubmit={handleSearch} className="search-form">
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

        {["/loginpage", "/signuppage", "/"].includes(location.pathname) && (
          <>
            <Link to="/loginpage">Login</Link>
            <Link to="/signuppage">Sign up</Link>
          </>
        )}

        {["/coursespage", "/examspage"].includes(location.pathname) && (
          <>
            <Link to="/coursespage">Courses</Link>
            <Link to="/examspage">Exams</Link>
            <button onClick={handleLogout} style={{ border: 'none', background: 'none', color: 'red', cursor: 'pointer' }}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
