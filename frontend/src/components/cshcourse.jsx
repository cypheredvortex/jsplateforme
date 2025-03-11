import React from 'react';

function CSharpCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>C# Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to C#</h2>
          <h3>1.1 What is C#?</h3>
          <p>C# is a modern, object-oriented programming language developed by Microsoft. It is part of the .NET framework and is widely used for building Windows applications, web applications, and games (using Unity).</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Declaring Variables</h3>
          <pre style={codeStyle}>
            {`int age = 25;
float height = 5.9f;
char grade = 'A';`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 If-Else Statements</h3>
          <pre style={codeStyle}>
            {`int x = 10;
if (x > 5) {
    Console.WriteLine("x is greater than 5");
} else {
    Console.WriteLine("x is less than or equal to 5");
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Functions</h2>
          <h3>4.1 Defining Functions</h3>
          <pre style={codeStyle}>
            {`int Add(int a, int b) {
    return a + b;
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Arrays</h2>
          <h3>5.1 Declaring Arrays</h3>
          <pre style={codeStyle}>
            {`int[] numbers = { 1, 2, 3, 4, 5 };`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Classes and Objects</h2>
          <h3>6.1 Defining a Class</h3>
          <pre style={codeStyle}>
            {`class Person {
    public string Name;
    public int Age;

    public void Greet() {
        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
    }
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Inheritance</h2>
          <h3>7.1 Inheriting from a Base Class</h3>
          <pre style={codeStyle}>
            {`class Employee : Person {
    public string JobTitle;

    public void ShowJob() {
        Console.WriteLine($"I am a {JobTitle}.");
    }
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: LINQ (Language Integrated Query)</h2>
          <h3>8.1 Introduction to LINQ</h3>
          <pre style={codeStyle}>
            {`int[] numbers = { 1, 2, 3, 4, 5 };
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;

foreach (var num in evenNumbers) {
    Console.WriteLine(num);
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Exception Handling</h2>
          <h3>9.1 Try-Catch Blocks</h3>
          <pre style={codeStyle}>
            {`try {
    int result = 10 / 0;
} catch (DivideByZeroException ex) {
    Console.WriteLine(ex.Message);
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: File Handling</h2>
          <h3>10.1 Reading Files</h3>
          <pre style={codeStyle}>
            {`using (StreamReader reader = new StreamReader("file.txt")) {
    string content = reader.ReadToEnd();
    Console.WriteLine(content);
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 11: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wxznTygnRfQ"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2025 C# Beginner Course</p>
        </footer>
      </div>
    </div>
  );
}

export default CSharpCourse;
