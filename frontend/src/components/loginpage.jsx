import logo from './logo.svg';
import './App.css';
import './App.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
function App() {
    return (
      <Router>
        <div className="Applogin">
          <Header />
          <br/><br/><br/><br /><br /><br /><br />
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signuppage.jsx" element={<Signup/>}></Route>
          </Routes>
          <Footer />
      </div>
      </Router>
    );
  }
  export default App;
  