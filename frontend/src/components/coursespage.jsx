import React from "react";
import './App.css';
import Courses from "./courses.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Htmlco from "./htmlco.jsx";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <Router>
      <div className="Appexams">
        <Header/>
        <Footer />
      <Routes>
        <Route path="/" element={<Courses/>}/>
        <Route path="/htmlcourse" element={<Htmlco/>}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;
