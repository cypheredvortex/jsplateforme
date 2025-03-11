import logo from './logo.svg';
import './App.css';
import './App.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx';
import Signup from './signup.jsx';
import Login from './login.jsx';
function App() {
    return (
      <Router>
        <div className="App">
        <Header />
        <br/><br/><br/><br /><br /><br /><br />
        <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/loginpage.jsx" element={<Login/>}></Route>
          </Routes>
        <Footer />
      </div>
      </Router>
    );
  }
export default App;
  