import React from 'react';

function JsCourse() {
  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    overflow: "hidden",
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "1200px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    lineHeight: "1.6",
    marginBottom: "100px",
  };

  const headingStyle = {
    color: "#333",
    borderBottom: "3px solid #007bff",
    paddingBottom: "8px",
    marginBottom: "15px",
  };

  const moduleStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const codeStyle = {
    display: "block",
    backgroundColor: "#222",
    color: "#fff",
    padding: "12px",
    borderRadius: "6px",
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
    marginTop: "10px",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={{ ...headingStyle, textAlign: "center" }}>JavaScript Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to JavaScript</h2>
          <h3>1.1 What is JavaScript?</h3>
          <p>JavaScript is a high-level, interpreted programming language used to create dynamic content on web pages.</p>
          <p>It is mainly used for adding interactivity to web pages, like form validation, animations, and other dynamic content.</p>

          <h3>1.2 Including JavaScript in HTML</h3>
          <p>JavaScript can be added to HTML files in three ways:</p>
          <ul>
            <li><strong>Inline JavaScript:</strong> Inside the HTML element's <code>onclick</code> attribute.</li>
            <pre style={codeStyle}>
              {`<button onclick="alert('Hello!')">Click Me</button>`}
            </pre>
            <li><strong>Internal JavaScript:</strong> Inside a <code>&lt;script&gt;</code> tag in the HTML document.</li>
            <pre style={codeStyle}>
              {`<script>
alert('Hello!');
</script>`}
            </pre>
            <li><strong>External JavaScript:</strong> Using an external file with the <code>&lt;script&gt;</code> tag to link to it.</li>
            <pre style={codeStyle}>
              {`<script src="script.js"></script>`}
            </pre>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Declaring Variables</h3>
          <p>In JavaScript, variables can be declared using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
          <pre style={codeStyle}>
            {`let name = 'John'; // Let allows reassignment
const age = 30; // Const doesn't allow reassignment
var city = 'New York'; // Var is function-scoped (avoid using it)`}
          </pre>

          <h3>2.2 Data Types</h3>
          <p>JavaScript has different data types including:</p>
          <ul>
            <li><strong>String:</strong> Text enclosed in quotes.</li>
            <pre style={codeStyle}>{`let greeting = 'Hello World';`}</pre>
            <li><strong>Number:</strong> Numeric values, both integer and float.</li>
            <pre style={codeStyle}>{`let age = 25;`}</pre>
            <li><strong>Boolean:</strong> Represents true or false values.</li>
            <pre style={codeStyle}>{`let isActive = true;`}</pre>
            <li><strong>Array:</strong> A list-like object that can hold multiple values.</li>
            <pre style={codeStyle}>{`let colors = ['red', 'blue', 'green'];`}</pre>
            <li><strong>Object:</strong> A collection of properties (key-value pairs).</li>
            <pre style={codeStyle}>{`let person = { name: 'Alice', age: 28 };`}</pre>
            <li><strong>Null:</strong> Represents an empty or non-existent value.</li>
            <pre style={codeStyle}>{`let value = null;`}</pre>
            <li><strong>Undefined:</strong> Represents an uninitialized variable.</li>
            <pre style={codeStyle}>{`let x; // undefined`}</pre>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Operators</h2>
          <h3>3.1 Arithmetic Operators</h3>
          <p>JavaScript provides several arithmetic operators:</p>
          <ul>
            <li><strong>Addition (+):</strong> Adds two numbers.</li>
            <pre style={codeStyle}>{`let sum = 10 + 5;`}</pre>
            <li><strong>Subtraction (-):</strong> Subtracts one number from another.</li>
            <pre style={codeStyle}>{`let difference = 10 - 5;`}</pre>
            <li><strong>Multiplication (*):</strong> Multiplies two numbers.</li>
            <pre style={codeStyle}>{`let product = 10 * 5;`}</pre>
            <li><strong>Division (/):</strong> Divides one number by another.</li>
            <pre style={codeStyle}>{`let quotient = 10 / 5;`}</pre>
            <li><strong>Modulus (%):</strong> Returns the remainder of division.</li>
            <pre style={codeStyle}>{`let remainder = 10 % 3;`}</pre>
          </ul>

          <h3>3.2 Comparison Operators</h3>
          <p>Comparison operators compare two values and return true or false:</p>
          <ul>
            <li><strong>Equal to (==):</strong> Checks if two values are equal.</li>
            <pre style={codeStyle}>{`let isEqual = 5 == 5;`}</pre>
            <li><strong>Strict equal (===):</strong> Checks if two values are equal and of the same type.</li>
            <pre style={codeStyle}>{`let isStrictEqual = 5 === '5';`}</pre>
            <li><strong>Not equal to (!=):</strong> Checks if two values are not equal.</li>
            <pre style={codeStyle}>{`let isNotEqual = 5 != 10;`}</pre>
            <li><strong>Greater than (&gt;):</strong> Checks if a value is greater than another.</li>
            <pre style={codeStyle}>{`let isGreater = 10 > 5;`}</pre>
            <li><strong>Less than (&lt;):</strong> Checks if a value is less than another.</li>
            <pre style={codeStyle}>{`let isLess = 5 < 10;`}</pre>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Control Flow</h2>
          <h3>4.1 Conditional Statements</h3>
          <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to make decisions in code:</p>
          <pre style={codeStyle}>
            {`let age = 20;

if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}`}
          </pre>

          <h3>4.2 Switch Statement</h3>
          <p>Use <code>switch</code> for multiple conditions:</p>
          <pre style={codeStyle}>
            {`let day = 2;
switch(day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  default:
    console.log('Other day');
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Functions</h2>
          <h3>5.1 Function Declaration</h3>
          <p>Functions allow you to reuse code. Here's how to declare a function:</p>
          <pre style={codeStyle}>
            {`function greet() {
  console.log('Hello, World!');
}`}
          </pre>

          <h3>5.2 Function Parameters and Return</h3>
          <p>Functions can take parameters and return values:</p>
          <pre style={codeStyle}>
            {`function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result);`}
          </pre>

          <h3>5.3 Arrow Functions</h3>
          <p>Arrow functions provide a more concise syntax:</p>
          <pre style={codeStyle}>
            {`const multiply = (a, b) => a * b;
let result = multiply(2, 3);
console.log(result);`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Loops</h2>
          <h3>6.1 For Loop</h3>
          <p>The <code>for</code> loop repeats a block of code a set number of times:</p>
          <pre style={codeStyle}>
            {`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
          </pre>

          <h3>6.2 While Loop</h3>
          <p>The <code>while</code> loop repeats as long as a condition is true:</p>
          <pre style={codeStyle}>
            {`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
          </pre>

          <h3>6.3 Do-While Loop</h3>
          <p>The <code>do-while</code> loop executes the code block first and then checks the condition:</p>
          <pre style={codeStyle}>
            {`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Arrays</h2>
          <h3>7.1 Creating Arrays</h3>
          <p>Arrays are used to store multiple values in a single variable:</p>
          <pre style={codeStyle}>
            {`let fruits = ['apple', 'banana', 'orange'];`}
          </pre>

          <h3>7.2 Accessing Array Elements</h3>
          <p>Array elements can be accessed using indices:</p>
          <pre style={codeStyle}>
            {`let firstFruit = fruits[0]; // 'apple'`}
          </pre>

          <h3>7.3 Array Methods</h3>
          <p>Arrays have many built-in methods, such as <code>push()</code> and <code>pop()</code>:</p>
          <pre style={codeStyle}>
            {`fruits.push('grape'); // Adds 'grape' to the end
fruits.pop(); // Removes the last element`}
          </pre>
        </div>
        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 8: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PkZNo7MFNFg"
              title="CSS Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2025 JavaScript Course</p>
        </footer>
      </div>
    </div>
  );
}

export default JsCourse;
