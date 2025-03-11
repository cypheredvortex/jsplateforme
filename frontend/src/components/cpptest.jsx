import React, { useState } from 'react';

const CppQuiz = () => {
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
      q5: '1',
      q6: '1',
      q7: '2',
      q8: '1',
      q9: '3',
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
      <h1 style={headingStyles}>C++ Quiz</h1>

      <div className="quiz">
        <div style={questionStyles}>
          <p style={questionTextStyles}>1. What is the default value of a local static variable in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q1a1"
              name="q1"
              value="1"
              checked={answers.q1 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a1" style={labelStyles}>Zero</label>
            <input
              type="radio"
              id="q1a2"
              name="q1"
              value="2"
              checked={answers.q1 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a2" style={labelStyles}>Random value</label>
            <input
              type="radio"
              id="q1a3"
              name="q1"
              value="3"
              checked={answers.q1 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q1a3" style={labelStyles}>Uninitialized</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>2. Which of the following is a correct way to declare a pointer in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q2a1"
              name="q2"
              value="1"
              checked={answers.q2 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a1" style={labelStyles}>int ptr*</label>
            <input
              type="radio"
              id="q2a2"
              name="q2"
              value="2"
              checked={answers.q2 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a2" style={labelStyles}>int* ptr</label>
            <input
              type="radio"
              id="q2a3"
              name="q2"
              value="3"
              checked={answers.q2 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q2a3" style={labelStyles}>ptr int*</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>3. What does the `new` keyword do in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q3a1"
              name="q3"
              value="1"
              checked={answers.q3 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a1" style={labelStyles}>Allocates memory dynamically</label>
            <input
              type="radio"
              id="q3a2"
              name="q3"
              value="2"
              checked={answers.q3 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a2" style={labelStyles}>Deletes an object</label>
            <input
              type="radio"
              id="q3a3"
              name="q3"
              value="3"
              checked={answers.q3 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q3a3" style={labelStyles}>Creates a new class</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>4. Which of the following is the correct way to create a constructor in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q4a1"
              name="q4"
              value="1"
              checked={answers.q4 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a1" style={labelStyles}>MyClass() { }</label>
            <input
              type="radio"
              id="q4a2"
              name="q4"
              value="2"
              checked={answers.q4 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a2" style={labelStyles}>MyClass() { constructor } </label>
            <input
              type="radio"
              id="q4a3"
              name="q4"
              value="3"
              checked={answers.q4 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q4a3" style={labelStyles}>void MyClass() { }</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>5. How do you allocate memory dynamically for an array of integers in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q5a1"
              name="q5"
              value="1"
              checked={answers.q5 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a1" style={labelStyles}>new int[10]</label>
            <input
              type="radio"
              id="q5a2"
              name="q5"
              value="2"
              checked={answers.q5 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a2" style={labelStyles}>int* arr = new int(10)</label>
            <input
              type="radio"
              id="q5a3"
              name="q5"
              value="3"
              checked={answers.q5 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q5a3" style={labelStyles}>int* arr = malloc(10 * sizeof(int))</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>6. Which C++ function is used to output data to the console?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q6a1"
              name="q6"
              value="1"
              checked={answers.q6 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a1" style={labelStyles}>cout</label>
            <input
              type="radio"
              id="q6a2"
              name="q6"
              value="2"
              checked={answers.q6 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a2" style={labelStyles}>printf</label>
            <input
              type="radio"
              id="q6a3"
              name="q6"
              value="3"
              checked={answers.q6 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q6a3" style={labelStyles}>output()</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>7. What is the main use of the `this` pointer in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q7a1"
              name="q7"
              value="1"
              checked={answers.q7 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a1" style={labelStyles}>To refer to the current object</label>
            <input
              type="radio"
              id="q7a2"
              name="q7"
              value="2"
              checked={answers.q7 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a2" style={labelStyles}>To allocate dynamic memory</label>
            <input
              type="radio"
              id="q7a3"
              name="q7"
              value="3"
              checked={answers.q7 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q7a3" style={labelStyles}>To destroy an object</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>8. Which of the following is true about destructors in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q8a1"
              name="q8"
              value="1"
              checked={answers.q8 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a1" style={labelStyles}>A destructor is called when an object goes out of scope</label>
            <input
              type="radio"
              id="q8a2"
              name="q8"
              value="2"
              checked={answers.q8 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a2" style={labelStyles}>Destructors are called explicitly</label>
            <input
              type="radio"
              id="q8a3"
              name="q8"
              value="3"
              checked={answers.q8 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q8a3" style={labelStyles}>Destructors are used only in inheritance</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>9. What is the purpose of the `friend` keyword in C++?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q9a1"
              name="q9"
              value="1"
              checked={answers.q9 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a1" style={labelStyles}>It allows a function to access private members of a class</label>
            <input
              type="radio"
              id="q9a2"
              name="q9"
              value="2"
              checked={answers.q9 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a2" style={labelStyles}>It is used to define private variables</label>
            <input
              type="radio"
              id="q9a3"
              name="q9"
              value="3"
              checked={answers.q9 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q9a3" style={labelStyles}>It is used to declare friend classes</label>
          </div>
        </div>

        <div style={questionStyles}>
          <p style={questionTextStyles}>10. Which of the following is correct about C++ functions?</p>
          <div style={optionsStyles}>
            <input
              type="radio"
              id="q10a1"
              name="q10"
              value="1"
              checked={answers.q10 === '1'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a1" style={labelStyles}>Functions can be overloaded in C++</label>
            <input
              type="radio"
              id="q10a2"
              name="q10"
              value="2"
              checked={answers.q10 === '2'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a2" style={labelStyles}>C++ does not support function overloading</label>
            <input
              type="radio"
              id="q10a3"
              name="q10"
              value="3"
              checked={answers.q10 === '3'}
              onChange={handleAnswerChange}
            />
            <label htmlFor="q10a3" style={labelStyles}>Functions cannot return values</label>
          </div>
        </div>

        <button
          style={buttonStyles}
          onClick={checkAnswers}
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

export default CppQuiz;
