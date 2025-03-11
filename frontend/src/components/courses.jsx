import './App.css';
import { Link } from 'react-router-dom';
import Card from './card';
function Courses(){
    return(
        <div id="courseid">
        <fieldset>
            <h2 style={{color: "aqua",fontSize: "xx-large"}}>Get learning</h2>
            <h3 style={{color: "white",fontSize:"xx-large"}}><q>It is through forging that you bacome a forgerer</q></h3>
            <p style={{color: "white",fontSize:"xx-large"}}>Therefore the only way to become a programmer is to program.</p>
        </fieldset>
        <br /><br /><br />
        <h2 style={{color: "aqua"}}>ExpertCoder offers multiple courses for multiple programming langages to help you get started:</h2>
        <br/>
        <div className="exfirstset">
            <Link to="/htmlcourse"><Card title="HTML" src="images/htmlpic.png"/></Link>
            <Link to="/csscourse"><Card title="CSS" src="images/csspic.png"/></Link>
            <Link to="/jscourse"><Card title="JavaScript" src="images/jspic.jpg"/></Link>
        </div>
        <br/><br/>
        <div className="exsecondset">
            <Link to="/phpcourse"><Card title="PHP" src="images/phppic.png"/></Link>
            <Link to="/sqlcourse"><Card title="SQL" src="images/sqlpic.png"/></Link>
            <Link to="/pycourse"><Card title="Python" src="images/pypic.jpeg"/></Link>
        </div>
        <br/><br/>
        <div className="exthirdset">
            <Link to="/ccourse"><Card title="C" src="images/cpic.webp"/></Link>
            <Link to="/cshcourse"><Card title="C#" src="images/csharp.webp"/></Link>
            <Link to="/cppcourse"><Card title="C++" src="images/cpp.avif"/></Link>
        </div>
        <br/><br/>
        <div className="exforthset">
            <Link to="/tscourse"><Card title="TypeScript" src="images/typescriptpic.jpg"/></Link>
            <Link to="/rubycourse"><Card title="Ruby" src="images/rubypic.png"/></Link>
            <Link to="/swiftcourse"><Card title="Swift" src="images/swiftpic.webp"/></Link>
        </div>
        <br/><br/>
        <div className="exfifthset">
            <Link to="/gocourse"><Card title="Go" src="images/gopic.jpg"/></Link>
            <Link to="/rcourse"><Card title="R" src="images/rpic.webp"/></Link>
            <Link to="/kotlincourse"><Card title="Kotlin" src="images/kotlinpic.jpg"/></Link>
        </div>
        <br /><br /><br /><br /><br />
        </div>
    );
}
export default Courses;
