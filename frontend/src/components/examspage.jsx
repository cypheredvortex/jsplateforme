import React from "react";
import Exams from "./exams.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="Appexams">
        <Header/>
        <br/><br/><br/><br/>
        <Footer />
        <Routes>
          <Route path="/" element={<Exams/>}/>
        </Routes>
    </div>
    </Router>
  );
}
export default App;
