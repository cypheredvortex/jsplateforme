import React from 'react';

function PythonCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>Python Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to Python</h2>
          <h3>1.1 What is Python?</h3>
          <p>Python is a high-level, interpreted programming language known for its readability and simplicity.</p>
          <p>It is used in web development, data science, machine learning, automation, and more.</p>

          <h3>1.2 Setting Up Python</h3>
          <p>To begin with Python, download and install Python from <a href="https://www.python.org/downloads/">python.org</a>.</p>
          <p>Python comes with an interactive shell, where you can execute Python code directly.</p>

          <h3>1.3 Running Python Code</h3>
          <pre style={codeStyle}>{`print("Hello, World!")`}</pre>
          <p>Run the code by saving it as <code>hello.py</code> and executing it from the terminal:</p>
          <pre style={codeStyle}>{`python hello.py`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Variables</h3>
          <p>In Python, variables store values:</p>
          <pre style={codeStyle}>{`name = "Alice"`}</pre>

          <h3>2.2 Data Types</h3>
          <p>Python has various data types, such as:</p>
          <ul>
            <li><strong>int:</strong> Integer numbers</li>
            <li><strong>float:</strong> Decimal numbers</li>
            <li><strong>str:</strong> Strings (text)</li>
            <li><strong>bool:</strong> Boolean values (True or False)</li>
          </ul>

          <h3>2.3 Type Conversion</h3>
          <p>You can convert data types using functions like <code>int()</code>, <code>float()</code>, and <code>str()</code>:</p>
          <pre style={codeStyle}>{`x = 5
y = float(x)`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 If-Else Statements</h3>
          <p>Conditional statements allow you to execute code based on conditions:</p>
          <pre style={codeStyle}>{`x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")`}</pre>

          <h3>3.2 Loops</h3>
          <p>Python has two main types of loops:</p>
          <ul>
            <li><strong>for:</strong> Used to iterate over sequences (lists, strings, etc.)</li>
            <li><strong>while:</strong> Repeats a block of code as long as the condition is true</li>
          </ul>

          <h3>3.3 For Loop Example</h3>
          <pre style={codeStyle}>{`for i in range(5):
    print(i)`}</pre>

          <h3>3.4 While Loop Example</h3>
          <pre style={codeStyle}>{`x = 0
while x < 5:
    print(x)
    x += 1`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Functions</h2>
          <h3>4.1 Defining Functions</h3>
          <p>Functions in Python allow you to group code into reusable blocks:</p>
          <pre style={codeStyle}>{`def greet(name):
    print(f"Hello, {name}!")`}</pre>

          <h3>4.2 Function Parameters</h3>
          <p>Functions can accept parameters to work with different values:</p>
          <pre style={codeStyle}>{`greet("Alice")`}</pre>

          <h3>4.3 Return Values</h3>
          <p>Functions can return values using the <code>return</code> keyword:</p>
          <pre style={codeStyle}>{`def add(a, b):
    return a + b

result = add(3, 4)
print(result)`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Data Structures</h2>
          <h3>5.1 Lists</h3>
          <p>Lists are ordered collections of items, defined by square brackets:</p>
          <pre style={codeStyle}>{`fruits = ["apple", "banana", "cherry"]`}</pre>

          <h3>5.2 Tuples</h3>
          <p>Tuples are immutable collections of items, defined by parentheses:</p>
          <pre style={codeStyle}>{`coordinates = (4, 5)`}</pre>

          <h3>5.3 Dictionaries</h3>
          <p>Dictionaries store key-value pairs, defined by curly braces:</p>
          <pre style={codeStyle}>{`person = {"name": "John", "age": 30}`}</pre>

          <h3>5.4 Sets</h3>
          <p>Sets are unordered collections of unique items:</p>
          <pre style={codeStyle}>{`colors = {"red", "green", "blue"}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Object-Oriented Programming (OOP)</h2>
          <h3>6.1 Classes and Objects</h3>
          <p>In Python, you can define classes and create objects:</p>
          <pre style={codeStyle}>{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person1 = Person("Alice", 25)
print(person1.name)`}</pre>

          <h3>6.2 Inheritance</h3>
          <p>Inheritance allows one class to inherit properties and methods from another:</p>
          <pre style={codeStyle}>{`class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Error Handling</h2>
          <h3>7.1 Try-Except Block</h3>
          <p>Python uses <code>try</code> and <code>except</code> to handle errors:</p>
          <pre style={codeStyle}>{`try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`}</pre>

          <h3>7.2 Raising Exceptions</h3>
          <p>You can raise your own exceptions using the <code>raise</code> keyword:</p>
          <pre style={codeStyle}>{`raise ValueError("This is an error message")`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Working with Files</h2>
          <h3>8.1 Reading Files</h3>
          <p>Python provides functions to read from files:</p>
          <pre style={codeStyle}>{`with open('file.txt', 'r') as file:
    content = file.read()
    print(content)`}</pre>

          <h3>8.2 Writing to Files</h3>
          <p>Use <code>write()</code> to write data to a file:</p>
          <pre style={codeStyle}>{`with open('file.txt', 'w') as file:
    file.write("Hello, file!")`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Python Libraries</h2>
          <h3>9.1 NumPy</h3>
          <p>NumPy is a library used for numerical computing in Python:</p>
          <pre style={codeStyle}>{`import numpy as np
arr = np.array([1, 2, 3])
print(arr)`}</pre>

          <h3>9.2 Pandas</h3>
          <p>Pandas is a powerful data analysis library:</p>
          <pre style={codeStyle}>{`import pandas as pd
data = pd.read_csv('data.csv')
print(data)`}</pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 10: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rfscVS0vtbw?start=7103"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 11: Conclusion</h2>
          <p>Congratulations! You've completed the Python beginner course. Continue practicing and explore more advanced topics like web development with Flask, Django, or machine learning with TensorFlow and scikit-learn.</p>
        </div>
      </div>
    </div>
  );
}

export default PythonCourse;
