import React, { useState } from 'react';

const TypeScriptQuiz = () => {
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
      q1: '2',
      q2: '3',
      q3: '1',
      q4: '2',
      q5: '3',
      q6: '1',
      q7: '2',
      q8: '3',
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
      <h1 style={headingStyles}>TypeScript Quiz</h1>

      <div className="quiz">
        <div style={questionStyles}>
          <p style={questionTextStyles}>1. What is the type of the variable `x` after the following statement: `let x: any = 5;`?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q1a1"
              name="q1"
              value="1"
              checked={answers.q1 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a1" style={labelStyles}>number</label>
            <input
              type="radio"
              id="q1a2"
              name="q1"
              value="2"
              checked={answers.q1 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a2" style={labelStyles}>any</label>
            <input
              type="radio"
              id="q1a3"
              name="q1"
              value="3"
              checked={answers.q1 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a3" style={labelStyles}>unknown</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>2. Which TypeScript type is used to define an array?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q2a1"
              name="q2"
              value="1"
              checked={answers.q2 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a1" style={labelStyles}>Array&lt;T&gt;</label>
            <input
              type="radio"
              id="q2a2"
              name="q2"
              value="2"
              checked={answers.q2 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a2" style={labelStyles}>T[]</label>
            <input
              type="radio"
              id="q2a3"
              name="q2"
              value="3"
              checked={answers.q2 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a3" style={labelStyles}>Both Array&lt;T&gt; and T[]</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>3. How do you declare a variable with a type in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q3a1"
              name="q3"
              value="1"
              checked={answers.q3 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a1" style={labelStyles}>let variable: string = "hello";</label>
            <input
              type="radio"
              id="q3a2"
              name="q3"
              value="2"
              checked={answers.q3 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a2" style={labelStyles}>let variable = "hello" as string;</label>
            <input
              type="radio"
              id="q3a3"
              name="q3"
              value="3"
              checked={answers.q3 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a3" style={labelStyles}>var variable: string = "hello";</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>4. What is the return type of a function that does not return anything in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q4a1"
              name="q4"
              value="1"
              checked={answers.q4 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a1" style={labelStyles}>void</label>
            <input
              type="radio"
              id="q4a2"
              name="q4"
              value="2"
              checked={answers.q4 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a2" style={labelStyles}>null</label>
            <input
              type="radio"
              id="q4a3"
              name="q4"
              value="3"
              checked={answers.q4 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a3" style={labelStyles}>undefined</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>5. What is the purpose of the `readonly` modifier in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q5a1"
              name="q5"
              value="1"
              checked={answers.q5 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a1" style={labelStyles}>It makes a property immutable after initialization</label>
            <input
              type="radio"
              id="q5a2"
              name="q5"
              value="2"
              checked={answers.q5 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a2" style={labelStyles}>It allows a property to be initialized only once</label>
            <input
              type="radio"
              id="q5a3"
              name="q5"
              value="3"
              checked={answers.q5 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a3" style={labelStyles}>It makes the variable static</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>6. How do you define a tuple in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q6a1"
              name="q6"
              value="1"
              checked={answers.q6 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a1" style={labelStyles}>[number, string]</label>
            <input
              type="radio"
              id="q6a2"
              name="q6"
              value="2"
              checked={answers.q6 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a2" style={labelStyles}>Tuple&lt;number, string&gt;</label>
            <input
              type="radio"
              id="q6a3"
              name="q6"
              value="3"
              checked={answers.q6 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a3" style={labelStyles}>tuple&lt;number, string&gt;</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>7. What is a type alias in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q7a1"
              name="q7"
              value="1"
              checked={answers.q7 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a1" style={labelStyles}>A shorthand for a complex type</label>
            <input
              type="radio"
              id="q7a2"
              name="q7"
              value="2"
              checked={answers.q7 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a2" style={labelStyles}>A type of class</label>
            <input
              type="radio"
              id="q7a3"
              name="q7"
              value="3"
              checked={answers.q7 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a3" style={labelStyles}>A function signature</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>8. Which keyword is used to define a class in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q8a1"
              name="q8"
              value="1"
              checked={answers.q8 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a1" style={labelStyles}>class</label>
            <input
              type="radio"
              id="q8a2"
              name="q8"
              value="2"
              checked={answers.q8 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a2" style={labelStyles}>type</label>
            <input
              type="radio"
              id="q8a3"
              name="q8"
              value="3"
              checked={answers.q8 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a3" style={labelStyles}>interface</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>9. What is an intersection type in TypeScript?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q9a1"
              name="q9"
              value="1"
              checked={answers.q9 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a1" style={labelStyles}>Combines multiple types into one</label>
            <input
              type="radio"
              id="q9a2"
              name="q9"
              value="2"
              checked={answers.q9 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a2" style={labelStyles}>Defines a new class type</label>
            <input
              type="radio"
              id="q9a3"
              name="q9"
              value="3"
              checked={answers.q9 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a3" style={labelStyles}>Combines multiple classes</label>
          </div>
        </div>

        <div style={questionStyles}>
  <p style={questionTextStyles}>10. How do you declare an enum in TypeScript?</p>
  <div style={optionsStyles}>
    <input
      type="radio"
      id="q10a1"
      name="q10"
      value="1"
      checked={answers.q10 === '1'}
      onChange={handleAnswerChange}
    />
    <label htmlFor="q10a1" style={labelStyles}>enum Direction {'{'} Up, Down, Left, Right {'}'}</label>
    <input
      type="radio"
      id="q10a2"
      name="q10"
      value="2"
      checked={answers.q10 === '2'}
      onChange={handleAnswerChange}
    />
    <label htmlFor="q10a2" style={labelStyles}>enum Direction { 1, 2, 3, 4 }</label>
    <input
      type="radio"
      id="q10a3"
      name="q10"
      value="3"
      checked={answers.q10 === '3'}
      onChange={handleAnswerChange}
    />
    <label htmlFor="q10a3" style={labelStyles}>enum Direction = [Up, Down, Left, Right]</label>
  </div>
</div>


        <button style={buttonStyles} onClick={checkAnswers}>
          Submit Quiz
        </button>

        {score !== null && (
          <div style={resultStyles}>
            <p>Your score: {score} out of 10</p>
          </div>
        )}
      </div>
      <br /><br /><br />
    </div>
  );
};

export default TypeScriptQuiz;
