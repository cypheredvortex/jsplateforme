import React from 'react';

function PhpCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>PHP Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to PHP</h2>
          <h3>1.1 What is PHP?</h3>
          <p>PHP is a widely-used open-source server-side scripting language designed for web development, but it also works as a general-purpose programming language.</p>
          <p>PHP is mainly used to create dynamic web pages, manage databases, session management, and perform other server-side tasks.</p>

          <h3>1.2 Installing PHP</h3>
          <p>PHP can be installed on different platforms like Windows, macOS, and Linux. You can install it individually or use tools like XAMPP or WAMP to set up a complete PHP development environment.</p>
          <p>To check if PHP is installed, run <code>php -v</code> in the terminal or command prompt.</p>

          <h3>1.3 PHP Syntax</h3>
          <p>PHP code is embedded within HTML using the <code>&lt;?php ?&gt;</code> tags.</p>
          <pre style={codeStyle}>{`<html>
<body>
  <h1>Welcome to PHP!</h1>
  <?php
    echo 'Hello, World!';
  ?>
</body>
</html>`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Declaring Variables</h3>
          <p>In PHP, variables are declared using the <code>$</code> symbol followed by the variable name.</p>
          <pre style={codeStyle}>{`$name = 'John';`}</pre>

          <h3>2.2 Data Types</h3>
          <p>PHP supports various data types:</p>
          <ul>
            <li><strong>String:</strong> A sequence of characters.</li>
            <pre style={codeStyle}>{`$name = 'John';`}</pre>
            <li><strong>Integer:</strong> A whole number.</li>
            <pre style={codeStyle}>{`$age = 30;`}</pre>
            <li><strong>Float:</strong> A number with a decimal point.</li>
            <pre style={codeStyle}>{`$price = 19.99;`}</pre>
            <li><strong>Boolean:</strong> A value of either true or false.</li>
            <pre style={codeStyle}>{`$isActive = true;`}</pre>
            <li><strong>Array:</strong> A collection of values.</li>
            <pre style={codeStyle}>{`$fruits = array('apple', 'banana', 'cherry');`}</pre>
            <li><strong>Object:</strong> A complex data structure with properties and methods.</li>
            <pre style={codeStyle}>{`class Car { public $model; public $color; }`}</pre>
            <li><strong>Null:</strong> A variable with no value.</li>
            <pre style={codeStyle}>{`$value = null;`}</pre>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Operators</h2>
          <h3>3.1 Arithmetic Operators</h3>
          <p>PHP provides various arithmetic operators:</p>
          <ul>
            <li><strong>Addition (+):</strong> Adds two numbers.</li>
            <pre style={codeStyle}>{`$sum = 10 + 5;`}</pre>
            <li><strong>Subtraction (-):</strong> Subtracts one number from another.</li>
            <pre style={codeStyle}>{`$difference = 10 - 5;`}</pre>
            <li><strong>Multiplication (*):</strong> Multiplies two numbers.</li>
            <pre style={codeStyle}>{`$product = 10 * 5;`}</pre>
            <li><strong>Division (/):</strong> Divides one number by another.</li>
            <pre style={codeStyle}>{`$quotient = 10 / 5;`}</pre>
            <li><strong>Modulus (%):</strong> Returns the remainder of a division.</li>
            <pre style={codeStyle}>{`$remainder = 10 % 3;`}</pre>
          </ul>

          <h3>3.2 Comparison Operators</h3>
          <p>Comparison operators are used to compare two values:</p>
          <ul>
            <li><strong>Equal to (==):</strong> Checks if two values are equal.</li>
            <pre style={codeStyle}>{`$result = (5 == 5);`}</pre>
            <li><strong>Identical to (===):</strong> Checks if two values are equal and of the same type.</li>
            <pre style={codeStyle}>{`$result = (5 === '5');`}</pre>
            <li><strong>Not equal to (!=):</strong> Checks if two values are not equal.</li>
            <pre style={codeStyle}>{`$result = (5 != 10);`}</pre>
            <li><strong>Greater than (&gt;):</strong> Checks if one value is greater than another.</li>
            <pre style={codeStyle}>{`$result = (10 > 5);`}</pre>
            <li><strong>Less than (&lt;):</strong> Checks if one value is less than another.</li>
            <pre style={codeStyle}>{`$result = (5 < 10);`}</pre>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Control Flow</h2>
          <h3>4.1 Conditional Statements</h3>
          <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to make decisions in code:</p>
          <pre style={codeStyle}>{`$age = 20;

if ($age >= 18) {
  echo 'Adult';
} else {
  echo 'Minor';
}`}</pre>

          <h3>4.2 Switch Statement</h3>
          <p>The <code>switch</code> statement is used when you have many conditions:</p>
          <pre style={codeStyle}>{`$day = 2;
switch ($day) {
  case 1:
    echo 'Monday';
    break;
  case 2:
    echo 'Tuesday';
    break;
  default:
    echo 'Other day';
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Functions</h2>
          <h3>5.1 Function Declaration</h3>
          <p>Functions are used to group code that performs a specific task. Here's how to declare a function:</p>
          <pre style={codeStyle}>{`function greet() {
  echo 'Hello, World!';
}`}</pre>

          <h3>5.2 Function Parameters and Return</h3>
          <p>Functions can take parameters and return values:</p>
          <pre style={codeStyle}>{`function add($a, $b) {
  return $a + $b;
}

$result = add(2, 3);
echo $result;`}</pre>

          <h3>5.3 Variable Scope</h3>
          <p>Variables can have different scopes:</p>
          <ul>
            <li><strong>Global:</strong> Defined outside functions and accessible anywhere in the script.</li>
            <li><strong>Local:</strong> Defined inside a function and accessible only within that function.</li>
            <li><strong>Static:</strong> Retains its value between function calls.</li>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Arrays</h2>
          <h3>6.1 Creating Arrays</h3>
          <p>Arrays are used to store multiple values in a single variable:</p>
          <pre style={codeStyle}>{`$fruits = array('apple', 'banana', 'cherry');`}</pre>

          <h3>6.2 Accessing Array Elements</h3>
          <p>Array elements can be accessed using their index:</p>
          <pre style={codeStyle}>{`echo $fruits[0]; // apple`}</pre>

          <h3>6.3 Array Functions</h3>
          <p>PHP provides many array functions:</p>
          <ul>
            <li><strong>array_push:</strong> Adds elements to the end of an array.</li>
            <pre style={codeStyle}>{`array_push($fruits, 'orange');`}</pre>
            <li><strong>array_pop:</strong> Removes the last element from an array.</li>
            <pre style={codeStyle}>{`array_pop($fruits);`}</pre>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Forms and Form Handling</h2>
          <h3>7.1 HTML Forms</h3>
          <p>PHP is commonly used to process form data submitted by users through HTML forms.</p>
          <pre style={codeStyle}>{`<form action="process.php" method="POST">
  <input type="text" name="name" placeholder="Enter your name">
  <input type="submit" value="Submit">
</form>`}</pre>

          <h3>7.2 Processing Form Data</h3>
          <p>Form data can be processed in PHP using the <code>$_POST</code> or <code>$_GET</code> superglobal arrays:</p>
          <pre style={codeStyle}>{`$name = $_POST['name'];
echo 'Hello, ' . $name;`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Working with Databases</h2>
          <h3>8.1 Connecting to MySQL</h3>
          <p>PHP can connect to MySQL databases using <code>mysqli</code> or <code>PDO</code>.</p>
          <pre style={codeStyle}>{`$conn = new mysqli('localhost', 'username', 'password', 'database');

if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}`}</pre>

          <h3>8.2 Querying the Database</h3>
          <p>You can execute SQL queries in PHP:</p>
          <pre style={codeStyle}>{`$sql = "SELECT * FROM users";
$result = $conn->query($sql);`}</pre>
        </div>
        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 9: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zZ6vybT1HQs"
              title="CSS Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2025 PHP Course</p>
        </footer>
      </div>
    </div>
  );
}

export default PhpCourse;
