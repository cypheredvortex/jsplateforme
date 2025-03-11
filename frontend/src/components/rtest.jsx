import React, { useState } from 'react';

console.log("R Quiz component file loaded successfully!");

const RQuiz = () => {
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
      q2: '1',
      q3: '1',
      q4: '1',
      q5: '1',
      q6: '1',
      q7: '1',
      q8: '1',
      q9: '1',
      q10: '1'
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
      <h1 style={headingStyles}>R Quiz</h1>

      <div className="quiz">
        <div style={questionStyles}>
          <p style={questionTextStyles}>1. How do you create a vector in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q1a1"
              name="q1"
              value="1"
              checked={answers.q1 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a1" style={labelStyles}>c(1, 2, 3)</label>
            <input
              type="radio"
              id="q1a2"
              name="q1"
              value="2"
              checked={answers.q1 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a2" style={labelStyles}>vector(1, 2, 3)</label>
            <input
              type="radio"
              id="q1a3"
              name="q1"
              value="3"
              checked={answers.q1 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a3" style={labelStyles}>list(1, 2, 3)</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>2. How do you read a CSV file in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q2a1"
              name="q2"
              value="1"
              checked={answers.q2 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a1" style={labelStyles}>read.csv("file.csv")</label>
            <input
              type="radio"
              id="q2a2"
              name="q2"
              value="2"
              checked={answers.q2 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a2" style={labelStyles}>import.csv("file.csv")</label>
            <input
              type="radio"
              id="q2a3"
              name="q2"
              value="3"
              checked={answers.q2 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a3" style={labelStyles}>open.csv("file.csv")</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>3. How do you create a function in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q3a1"
              name="q3"
              value="1"
              checked={answers.q3 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a1" style={labelStyles}>function myFunc() { }</label>
            <input
              type="radio"
              id="q3a2"
              name="q3"
              value="2"
              checked={answers.q3 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a2" style={labelStyles}>myFunc() = function() { }</label>
            <input
              type="radio"
              id="q3a3"
              name="q3"
              value="3"
              checked={answers.q3 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a3" style={labelStyles}>def myFunc() { }</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>4. How do you assign a value to a variable in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q4a1"
              name="q4"
              value="1"
              checked={answers.q4 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a1" style={labelStyles}>x &lt;- 10</label>
            <input
              type="radio"
              id="q4a2"
              name="q4"
              value="2"
              checked={answers.q4 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a2" style={labelStyles}>x = 10</label>
            <input
              type="radio"
              id="q4a3"
              name="q4"
              value="3"
              checked={answers.q4 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a3" style={labelStyles}>let x = 10</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>5. What function is used to generate a sequence of numbers in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q5a1"
              name="q5"
              value="1"
              checked={answers.q5 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a1" style={labelStyles}>seq(1, 10)</label>
            <input
              type="radio"
              id="q5a2"
              name="q5"
              value="2"
              checked={answers.q5 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a2" style={labelStyles}>generate(1, 10)</label>
            <input
              type="radio"
              id="q5a3"
              name="q5"
              value="3"
              checked={answers.q5 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a3" style={labelStyles}>range(1, 10)</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>6. How do you load a library in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q6a1"
              name="q6"
              value="1"
              checked={answers.q6 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a1" style={labelStyles}>library(ggplot2)</label>
            <input
              type="radio"
              id="q6a2"
              name="q6"
              value="2"
              checked={answers.q6 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a2" style={labelStyles}>use(ggplot2)</label>
            <input
              type="radio"
              id="q6a3"
              name="q6"
              value="3"
              checked={answers.q6 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a3" style={labelStyles}>import(ggplot2)</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>7. How do you check the structure of an object in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q7a1"
              name="q7"
              value="1"
              checked={answers.q7 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a1" style={labelStyles}>str(object)</label>
            <input
              type="radio"
              id="q7a2"
              name="q7"
              value="2"
              checked={answers.q7 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a2" style={labelStyles}>structure(object)</label>
            <input
              type="radio"
              id="q7a3"
              name="q7"
              value="3"
              checked={answers.q7 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a3" style={labelStyles}>info(object)</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>8. How do you filter rows in a data frame in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q8a1"
              name="q8"
              value="1"
              checked={answers.q8 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a1" style={labelStyles}>df[df$col == value, ]</label>
            <input
              type="radio"
              id="q8a2"
              name="q8"
              value="2"
              checked={answers.q8 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a2" style={labelStyles}>df.select(df$col == value)</label>
            <input
              type="radio"
              id="q8a3"
              name="q8"
              value="3"
              checked={answers.q8 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a3" style={labelStyles}>filter(df, col == value)</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>9. How do you remove an object in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q9a1"
              name="q9"
              value="1"
              checked={answers.q9 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a1" style={labelStyles}>rm(object)</label>
            <input
              type="radio"
              id="q9a2"
              name="q9"
              value="2"
              checked={answers.q9 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a2" style={labelStyles}>delete(object)</label>
            <input
              type="radio"
              id="q9a3"
              name="q9"
              value="3"
              checked={answers.q9 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a3" style={labelStyles}>remove(object)</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>10. How do you create a matrix in R?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q10a1"
              name="q10"
              value="1"
              checked={answers.q10 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a1" style={labelStyles}>matrix(1:6, nrow = 2)</label>
            <input
              type="radio"
              id="q10a2"
              name="q10"
              value="2"
              checked={answers.q10 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a2" style={labelStyles}>mat(1:6, nrow = 2)</label>
            <input
              type="radio"
              id="q10a3"
              name="q10"
              value="3"
              checked={answers.q10 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a3" style={labelStyles}>createMatrix(1:6, nrow = 2)</label>
          </div>
        </div>

        <button
          style={buttonStyles}
          onMouseEnter={() => (buttonStyles.backgroundColor = buttonHoverStyles.backgroundColor)}
          onMouseLeave={() => (buttonStyles.backgroundColor = "#3498db")}
          onClick={checkAnswers}
        >
          Submit
        </button>

        {score !== null && (
          <div style={resultStyles}>
            <p>Your score: {score} / 10</p>
          </div>
        )}
      </div>
      <br /><br /><br />
    </div>
  );
};

export default RQuiz;
