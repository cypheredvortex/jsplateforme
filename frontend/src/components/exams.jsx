import logo from './logo.svg';
import './App.css';
import './App.jsx';
import { Link } from 'react-router-dom';
import Card from './card.jsx';
import { useState } from 'react';


function Exams() {

    return (
      <>
        <div id="testskills">
          <fieldset>
            <h2 style={{ color: "aqua", fontSize: "xx-large" }}>Test your skills</h2>
            <h3>
              <q style={{ color: "white", fontSize: "xx-large" }}>
                Theory without practice is like having a key without a lock while practice without theory is like having a lock without a key.
              </q>
            </h3>
            <p style={{ color: "white", fontSize: "xx-large" }}>
              Testing your skills as a programmer is crucial for deepening your understanding, sharpening problem-solving abilities, and building confidence.
              <br />
              <br />
              Regular practice through challenges and projects helps identify areas for improvement, strengthens debugging skills, and ensures your code is efficient and reliable.
              <br />
              <br />
              Testing also prepares you to handle real-world issues and demonstrates your commitment to quality—qualities that stand out to employers and lead to growth in your career.
            </p>
          </fieldset>
          <br /><br /><br />
          <h2 style={{ color: "aqua" }}>
            <b>ExpertCoder</b> offers a variety of exams that would allow you to test your skills and knowledge so that you would know how to position yourself in the industry in terms of competence:
          </h2>
          <br />
          <div className="exfirstset">
            <Link to="/htmltest"><Card title="HTML" src="images/htmlpic.png"/></Link>
            <Link to="/csstest"><Card title="CSS" src="images/csspic.png"/></Link>
            <Link to="/jstest"><Card title="JavaScript" src="images/jspic.jpg"/></Link>
        </div>
        <br/><br/>
        <div className="exsecondset">
            <Link to="/phptest"><Card title="PHP" src="images/phppic.png"/></Link>
            <Link to="/sqltest"><Card title="SQL" src="images/sqlpic.png"/></Link>
            <Link to="/pytest"><Card title="Python" src="images/pypic.jpeg"/></Link>
        </div>
        <br/><br/>
        <div className="exthirdset">
            <Link to="/ctest"><Card title="C" src="images/cpic.webp"/></Link>
            <Link to="/cshtest"><Card title="C#" src="images/csharp.webp"/></Link>
            <Link to="/cpptest"><Card title="C++" src="images/cpp.avif"/></Link>
        </div>
        <br/><br/>
        <div className="exforthset">
            <Link to="/tstest"><Card title="TypeScript" src="images/typescriptpic.jpg"/></Link>
            <Link to="/rubytest"><Card title="Ruby" src="images/rubypic.png"/></Link>
            <Link to="/swifttest"><Card title="Swift" src="images/swiftpic.webp"/></Link>
        </div>
        <br/><br/>
        <div className="exfifthset">
            <Link to="/gotest"><Card title="Go" src="images/gopic.jpg"/></Link>
            <Link to="/rtest"><Card title="R" src="images/rpic.webp"/></Link>
            <Link to="/kotlintest"><Card title="Kotlin" src="images/kotlinpic.jpg"/></Link>
        </div>
        <br /><br /><br /><br /><br />
        </div>
      </>
    );
  }
  export default Exams;
