import Card from "./card";
import { Link } from "react-router-dom";
import './App.css'; 

function Introcourse() {
    return (
        <div className="intro">
            <h2 className="intro-title">Explore our most popular courses:</h2>
            <div className="courses-container">
                <Link to="/jscourse"><Card title="JavaScript" src="images/jspic.jpg"/></Link>
                <Link to="/pycourse"><Card title="Python" src="images/pypic.jpeg"/></Link>
                <Link to="/javacourse"><Card title="Java" src="./images/javapic.jpg" /></Link>
            </div>
        </div>
    );
}

export default Introcourse;
