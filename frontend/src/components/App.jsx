import React from "react";
import './App.css';
import './App.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Herosection from "./herosection.jsx";
import Benefits from "./benefits.jsx";
import Introcourse from "./introcourse.jsx";
import Calltoaction from "./calltoaction.jsx";
import Courses from "./courses.jsx";
import Exams from "./exams.jsx";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import Html from "./htmlcourse.jsx"; 
import Csscourse from "./csscourse.jsx";
import JsCourse from "./jscourse.jsx";
import SqlCourse from "./sqlcourse.jsx";
import CCourse from "./ccourse.jsx";
import CSharpCourse from "./cshcourse.jsx";
import CppCourse from "./cppcourse.jsx";
import KotlinCourse from "./kotlincourse.jsx";
import RCourse from "./rcourse.jsx";
import RubyCourse from "./rubycourse.jsx";
import TypeScriptCourse from "./tscourse.jsx";
import PythonCourse from "./pycourse.jsx";
import PhpCourse from "./phpcourse.jsx";
import SwiftCourse from "./swiftcourse.jsx";
import GoCourse from "./gocourse.jsx";
import HtmlQuiz from "./htmltest.jsx";
import CssQuiz from "./csstest.jsx";
import JsQuiz from "./jstest.jsx";
import PhpQuiz from "./phptest.jsx";
import SqlQuiz from "./sqltest.jsx";
import PyQuiz from "./pytest.jsx";
import CQuiz from "./ctest.jsx";
import CshQuiz from "./cshtest.jsx";
import CppQuiz from "./cpptest.jsx";
import TypeScriptQuiz from "./tstest.jsx";
import RubyQuiz from "./rubytest.jsx";
import SwiftQuiz from "./swifttest.jsx";
import GoQuiz from "./gotest.jsx";
import RQuiz from "./rtest.jsx";
import KotlinQuiz from "./kotlintest.jsx";
import JavaCourse from "./javacourse.jsx";

const Notfound=()=><h2>The page you are looking for does not exist!</h2>
 
const Page = ({ match }) => {
  return <h2>Welcome to the {match.params.page} page</h2>;
};
function App() {

  return (
    <Router>
      <div id="app">
      <Header/>
      <Routes>
      <Route path="/" element={<><Herosection/><Introcourse/><Benefits/><Calltoaction/></>}/>
      <Route path="/coursespage" element={<Courses/>}/>
      <Route path="/examspage" element={<Exams/>}/>
      <Route path="/loginpage" element={<Login/>}/>
      <Route path="/signuppage" element={<Signup/>}/>
      <Route path="/htmlcourse" element={<Html />} />
      <Route path="/csscourse" element={<Csscourse />} />
      <Route path="/jscourse" element={<JsCourse />} />
      <Route path="/sqlcourse" element={<SqlCourse />} />
      <Route path="/pycourse" element={<PythonCourse />} />
      <Route path="/ccourse" element={<CCourse />} />
      <Route path="/cshcourse" element={<CSharpCourse />} />
      <Route path="/kotlincourse" element={<KotlinCourse />} />
      <Route path="/rcourse" element={<RCourse />} />
      <Route path="/gocourse" element={<GoCourse />} />
      <Route path="/swiftcourse" element={<SwiftCourse />} />
      <Route path="/rubycourse" element={<RubyCourse />} />
      <Route path="/phpcourse" element={<PhpCourse />} />
      <Route path="/tscourse" element={<TypeScriptCourse />} />
      <Route path="/cppcourse" element={<CppCourse />} />
      <Route path="/htmltest" element={<HtmlQuiz />} />
      <Route path="/csstest" element={<CssQuiz />} />
      <Route path="/jstest" element={<JsQuiz />} />
      <Route path="/phptest" element={<PhpQuiz />} />
      <Route path="/sqltest" element={<SqlQuiz />} />
      <Route path="/pytest" element={<PyQuiz />} />
      <Route path="/ctest" element={<CQuiz />} />
      <Route path="/cshtest" element={<CshQuiz />} />
      <Route path="/cpptest" element={<CppQuiz />} />
      <Route path="/tstest" element={<TypeScriptQuiz />} />
      <Route path="/rubytest" element={<RubyQuiz />} />
      <Route path="/swifttest" element={<SwiftQuiz />} />
      <Route path="/gotest" element={<GoQuiz />} />
      <Route path="/rtest" element={<RQuiz />} />
      <Route path="/kotlintest" element={<KotlinQuiz />} />
      <Route path="/javacourse" element={<JavaCourse />} />
      </Routes>
      <Routes>
      <Route path="/:page" component={Page} />
      <Route path="/" exact />
      <Route path="*" component={Notfound} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
};
export default App;
