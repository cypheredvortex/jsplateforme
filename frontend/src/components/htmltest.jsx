import React, { useState } from 'react';

console.log("Quiz component file loaded successfully!");

const HtmlQuiz = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: ''
  });
  const [score, setScore] = useState(null);

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const checkAnswers = () => {
    let totalScore = 0;
    const correctAnswers = {
      q1: '1',
      q2: '2',
      q3: '1',
      q4: '1',
      q5: '2',
      q6: '1',
      q7: '1',
      q8: '1',
      q9: '1',
      q10: '1',
    };

    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        totalScore++;
      }
    });

    setScore(totalScore);
  };

  const quizStyles = {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f7fa",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
    color: "#333",
    paddingBottom: '30px',
  };

  const headingStyles = {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50"
  };

  const questionStyles = {
    marginBottom: "10px"
  };

  const questionTextStyles = {
    fontSize: "1.2rem",
    marginBottom: "5px",
    fontWeight: "bold"
  };

  const optionsStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  };

  const labelStyles = {
    fontSize: "1.1rem",
    cursor: "pointer",
    lineHeight: "1.5"
  };

  const buttonStyles = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    marginTop: "20px",
    transition: "background-color 0.3s"
  };

  const buttonHoverStyles = {
    backgroundColor: "#2980b9"
  };

  const resultStyles = {
    backgroundColor: "#eaf7e6",
    color: "#27ae60",
    padding: "15px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "1.2rem",
    marginTop: "20px"
  };

  return (
    <div style={quizStyles}>
      <h1 style={headingStyles}>HTML Quiz</h1>

      <div className="quiz">
        <div style={questionStyles}>
          <p style={questionTextStyles}>1. What does HTML stand for?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q1a1"
              name="q1"
              value="1"
              checked={answers.q1 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a1" style={labelStyles}>Hyper Text Markup Language</label>
            <input
              type="radio"
              id="q1a2"
              name="q1"
              value="2"
              checked={answers.q1 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a2" style={labelStyles}>Home Tool Markup Language</label>
            <input
              type="radio"
              id="q1a3"
              name="q1"
              value="3"
              checked={answers.q1 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a3" style={labelStyles}>Hyperlinks and Text Markup Language</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>2. Who is making the Web standards?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q2a1"
              name="q2"
              value="1"
              checked={answers.q2 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a1" style={labelStyles}>Microsoft</label>
            <input
              type="radio"
              id="q2a2"
              name="q2"
              value="2"
              checked={answers.q2 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a2" style={labelStyles}>The World Wide Web Consortium</label>
            <input
              type="radio"
              id="q2a3"
              name="q2"
              value="3"
              checked={answers.q2 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a3" style={labelStyles}>Google</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>3. What is the correct HTML element for inserting a line break?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q3a1"
              name="q3"
              value="1"
              checked={answers.q3 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a1" style={labelStyles}>&lt;br&gt;</label>
            <input
              type="radio"
              id="q3a2"
              name="q3"
              value="2"
              checked={answers.q3 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a2" style={labelStyles}>&lt;break&gt;</label>
            <input
              type="radio"
              id="q3a3"
              name="q3"
              value="3"
              checked={answers.q3 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a3" style={labelStyles}>&lt;lb&gt;</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>4. Which HTML element is used to define important text?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q4a1"
              name="q4"
              value="1"
              checked={answers.q4 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a1" style={labelStyles}>&lt;strong&gt;</label>
            <input
              type="radio"
              id="q4a2"
              name="q4"
              value="2"
              checked={answers.q4 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a2" style={labelStyles}>&lt;em&gt;</label>
            <input
              type="radio"
              id="q4a3"
              name="q4"
              value="3"
              checked={answers.q4 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a3" style={labelStyles}>&lt;bold&gt;</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>5. Which attribute is used to specify the URL in the anchor tag?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q5a1"
              name="q5"
              value="1"
              checked={answers.q5 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a1" style={labelStyles}>src</label>
            <input
              type="radio"
              id="q5a2"
              name="q5"
              value="2"
              checked={answers.q5 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a2" style={labelStyles}>href</label>
            <input
              type="radio"
              id="q5a3"
              name="q5"
              value="3"
              checked={answers.q5 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a3" style={labelStyles}>url</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>6. What does the &lt;img&gt; tag do?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q6a1"
              name="q6"
              value="1"
              checked={answers.q6 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a1" style={labelStyles}>Inserts an image</label>
            <input
              type="radio"
              id="q6a2"
              name="q6"
              value="2"
              checked={answers.q6 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a2" style={labelStyles}>Creates a link</label>
            <input
              type="radio"
              id="q6a3"
              name="q6"
              value="3"
              checked={answers.q6 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a3" style={labelStyles}>Defines a list</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>7. How do you create a comment in HTML?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q7a1"
              name="q7"
              value="1"
              checked={answers.q7 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a1" style={labelStyles}>&lt;!-- comment --&gt;</label>
            <input
              type="radio"
              id="q7a2"
              name="q7"
              value="2"
              checked={answers.q7 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a2" style={labelStyles}>&lt;comment&gt;</label>
            <input
              type="radio"
              id="q7a3"
              name="q7"
              value="3"
              checked={answers.q7 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a3" style={labelStyles}>&lt;!--! comment !--&gt;</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>8. How do you add a background color in CSS?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q8a1"
              name="q8"
              value="1"
              checked={answers.q8 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a1" style={labelStyles}>background-color</label>
            <input
              type="radio"
              id="q8a2"
              name="q8"
              value="2"
              checked={answers.q8 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a2" style={labelStyles}>bg-color</label>
            <input
              type="radio"
              id="q8a3"
              name="q8"
              value="3"
              checked={answers.q8 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a3" style={labelStyles}>color-bg</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>9. What is the correct HTML for creating a table?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q9a1"
              name="q9"
              value="1"
              checked={answers.q9 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a1" style={labelStyles}>&lt;table&gt; &lt;tr&gt; &lt;td&gt;</label>
            <input
              type="radio"
              id="q9a2"
              name="q9"
              value="2"
              checked={answers.q9 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a2" style={labelStyles}>&lt;table&gt; &lt;row&gt; &lt;cell&gt;</label>
            <input
              type="radio"
              id="q9a3"
              name="q9"
              value="3"
              checked={answers.q9 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a3" style={labelStyles}>&lt;table&gt; &lt;tr&gt; &lt;td&gt;</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>10. What does the CSS 'display' property do?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q10a1"
              name="q10"
              value="1"
              checked={answers.q10 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a1" style={labelStyles}>Defines how an element is displayed on the page</label>
            <input
              type="radio"
              id="q10a2"
              name="q10"
              value="2"
              checked={answers.q10 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a2" style={labelStyles}>Sets the font size</label>
            <input
              type="radio"
              id="q10a3"
              name="q10"
              value="3"
              checked={answers.q10 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a3" style={labelStyles}>Specifies the border of an element</label>
          </div>
        </div>

        <button
          style={buttonStyles}
          onClick={checkAnswers}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
        >
          Submit Quiz
        </button>

        {score !== null && (
          <div style={resultStyles}>
            <p>You scored {score} out of 10</p>
          </div>
        )}
      </div>
      <br /><br /><br />
    </div>
  );
};

export default HtmlQuiz;
