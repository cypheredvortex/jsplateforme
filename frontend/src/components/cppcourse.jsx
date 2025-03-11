import React from 'react';

function CppCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>C++ Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to C++</h2>
          <h3>1.1 What is C++?</h3>
          <p>C++ is a high-level, compiled programming language that is widely used in software development for system/application software, game development, and more. It supports object-oriented, procedural, and generic programming.</p>

          <h3>1.2 Setting Up the C++ Environment</h3>
          <p>To start coding in C++, you can use an IDE like Visual Studio, Code::Blocks, or a text editor like Visual Studio Code with the C++ extension. Make sure you have a C++ compiler (like GCC) installed.</p>

          <h3>1.3 Writing Your First Program</h3>
          <p>Here's how to write a simple "Hello, World!" program in C++:</p>
          <pre style={codeStyle}>{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}</pre>
          <p>Run this code using your chosen IDE or through the terminal using a command like <code>g++ hello.cpp -o hello</code> and then <code>./hello</code>.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Declaring Variables</h3>
          <pre style={codeStyle}>{`int age = 25;
float height = 5.9;
char grade = 'A';`}</pre>

          <h3>2.2 Data Types in C++</h3>
          <ul>
            <li><strong>int:</strong> Integer values</li>
            <li><strong>float:</strong> Floating point values</li>
            <li><strong>double:</strong> Double precision floating point values</li>
            <li><strong>char:</strong> Single characters</li>
            <li><strong>string:</strong> Sequence of characters (C++ requires <code>#include &lt;string&gt;</code>)</li>
            <li><strong>bool:</strong> Boolean values (true or false)</li>
          </ul>

          <h3>2.3 Type Conversion</h3>
          <pre style={codeStyle}>{`int x = 10;
float y = 5.5;
y = x; // Implicit conversion
x = (int)y; // Explicit conversion`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 If-Else Statements</h3>
          <pre style={codeStyle}>{`int x = 10;
if (x > 5) {
    cout << "x is greater than 5" << endl;
} else {
    cout << "x is less than or equal to 5" << endl;
}`}</pre>

          <h3>3.2 Loops</h3>
          <h3>3.3 For Loop</h3>
          <pre style={codeStyle}>{`for (int i = 0; i < 5; i++) {
    cout << i << endl;
}`}</pre>

          <h3>3.4 While Loop</h3>
          <pre style={codeStyle}>{`int i = 0;
while (i < 5) {
    cout << i << endl;
    i++;
}`}</pre>

          <h3>3.5 Do-While Loop</h3>
          <pre style={codeStyle}>{`int i = 0;
do {
    cout << i << endl;
    i++;
} while (i < 5);`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Functions</h2>
          <h3>4.1 Defining Functions</h3>
          <pre style={codeStyle}>{`int Add(int a, int b) {
    return a + b;
}`}</pre>

          <h3>4.2 Calling Functions</h3>
          <pre style={codeStyle}>{`int sum = Add(10, 20);
cout << sum << endl;`}</pre>

          <h3>4.3 Functions with No Return Value</h3>
          <pre style={codeStyle}>{`void PrintMessage() {
    cout << "Hello, C++!" << endl;
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Arrays</h2>
          <h3>5.1 Declaring Arrays</h3>
          <pre style={codeStyle}>{`int numbers[] = {1, 2, 3, 4, 5};`}</pre>

          <h3>5.2 Accessing Array Elements</h3>
          <pre style={codeStyle}>{`cout << numbers[0] << endl; // Outputs: 1`}</pre>

          <h3>5.3 Multidimensional Arrays</h3>
          <pre style={codeStyle}>{`int matrix[2][2] = {{1, 2}, {3, 4}};`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Classes and Objects</h2>
          <h3>6.1 Defining a Class</h3>
          <pre style={codeStyle}>{`class Person {
public:
    string name;
    int age;

    void Greet() {
        cout << "Hello, my name is " << name << " and I am " << age << " years old." << endl;
    }
};`}</pre>

          <h3>6.2 Creating Objects</h3>
          <pre style={codeStyle}>{`Person person1;
person1.name = "John";
person1.age = 30;
person1.Greet();`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Inheritance</h2>
          <h3>7.1 Inheriting from a Base Class</h3>
          <pre style={codeStyle}>{`class Employee : public Person {
public:
    string jobTitle;

    void ShowJob() {
        cout << "I am a " << jobTitle << "." << endl;
    }
};`}</pre>

          <h3>7.2 Creating an Object of the Derived Class</h3>
          <pre style={codeStyle}>{`Employee employee1;
employee1.name = "Alice";
employee1.age = 25;
employee1.jobTitle = "Software Developer";
employee1.Greet();
employee1.ShowJob();`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Pointers</h2>
          <h3>8.1 Introduction to Pointers</h3>
          <pre style={codeStyle}>{`int num = 10;
int* ptr = &num; // Pointer to num`}</pre>

          <h3>8.2 Dereferencing Pointers</h3>
          <pre style={codeStyle}>{`cout << *ptr << endl; // Outputs: 10`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Exception Handling</h2>
          <h3>9.1 Try-Catch Blocks</h3>
          <pre style={codeStyle}>{`try {
    int result = 10 / 0;
} catch (exception& e) {
    cout << "Error: " << e.what() << endl;
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: File Handling</h2>
          <h3>10.1 Reading Files</h3>
          <pre style={codeStyle}>{`#include <fstream>
ifstream file("example.txt");
string line;
while (getline(file, line)) {
    cout << line << endl;
}`}</pre>

          <h3>10.2 Writing to Files</h3>
          <pre style={codeStyle}>{`ofstream file("example.txt");
file << "Hello, C++ file!" << endl;`}</pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 11: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-TkoO8Z07hI"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 12: Conclusion</h2>
          <p>Congratulations! You have now learned the fundamentals of C++ programming. Continue exploring advanced topics such as dynamic memory allocation, templates, and the Standard Template Library (STL).</p>
        </div>
      </div>
    </div>
  );
}

export default CppCourse;
