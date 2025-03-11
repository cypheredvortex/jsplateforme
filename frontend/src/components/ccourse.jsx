import React from 'react';
import './App.css';

function CCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>C Language Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to C</h2>
          <h3>1.1 What is C?</h3>
          <p>C is a general-purpose, procedural programming language that is widely used for system programming and embedded systems.</p>
          <p>C is known for its efficiency and low-level access to memory.</p>

          <h3>1.2 Setting Up the C Environment</h3>
          <p>To start coding in C, install a C compiler like GCC. You can use IDEs like Code::Blocks or Visual Studio Code for a better experience.</p>

          <h3>1.3 Writing Your First Program</h3>
          <p>Here's a simple "Hello, World!" program in C:</p>
          <pre style={codeStyle}>{`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}</pre>
          <p>Compile the code using <code>gcc hello.c -o hello</code> and run it with <code>./hello</code>.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Declaring Variables</h3>
          <p>In C, variables are declared with a specific type:</p>
          <pre style={codeStyle}>{`int age = 25;
float height = 5.9;
char grade = 'A';`}</pre>

          <h3>2.2 Data Types in C</h3>
          <ul>
            <li><strong>int:</strong> Integer values</li>
            <li><strong>float:</strong> Floating point values</li>
            <li><strong>double:</strong> Double precision floating point values</li>
            <li><strong>char:</strong> Single characters</li>
            <li><strong>void:</strong> Function return type with no value</li>
          </ul>

          <h3>2.3 Type Conversion</h3>
          <p>You can convert between data types using type casting:</p>
          <pre style={codeStyle}>{`int x = 10;
float y = (float)x / 3;`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 If-Else Statements</h3>
          <p>If-else statements are used for conditional execution of code:</p>
          <pre style={codeStyle}>{`int x = 10;
if (x > 5) {
    printf("x is greater than 5");
} else {
    printf("x is less than or equal to 5");
}`}</pre>

          <h3>3.2 Loops</h3>
          <p>There are two main types of loops in C: for and while loops.</p>

          <h3>3.3 For Loop Example</h3>
          <pre style={codeStyle}>{`for (int i = 0; i < 5; i++) {
    printf("%d", i);
}`}</pre>

          <h3>3.4 While Loop Example</h3>
          <pre style={codeStyle}>{`int i = 0;
while (i < 5) {
    printf("%d", i);
    i++;
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Functions</h2>
          <h3>4.1 Defining Functions</h3>
          <p>In C, functions are used to modularize code:</p>
          <pre style={codeStyle}>{`int add(int a, int b) {
    return a + b;
}`}</pre>

          <h3>4.2 Calling Functions</h3>
          <p>To call a function:</p>
          <pre style={codeStyle}>{`int sum = add(10, 20);
printf("%d", sum);`}</pre>

          <h3>4.3 Function Return Types</h3>
          <p>Functions can return values of any data type:</p>
          <pre style={codeStyle}>{`double multiply(double a, double b) {
    return a * b;
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Arrays</h2>
          <h3>5.1 Declaring Arrays</h3>
          <p>Arrays are collections of elements of the same type:</p>
          <pre style={codeStyle}>{`int numbers[5] = {1, 2, 3, 4, 5};`}</pre>

          <h3>5.2 Accessing Array Elements</h3>
          <p>Array elements are accessed using their index:</p>
          <pre style={codeStyle}>{`printf("%d", numbers[0]);`}</pre>

          <h3>5.3 Multidimensional Arrays</h3>
          <p>For multidimensional arrays:</p>
          <pre style={codeStyle}>{`int matrix[2][2] = {{1, 2}, {3, 4}};`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Pointers</h2>
          <h3>6.1 Introduction to Pointers</h3>
          <p>A pointer stores the memory address of another variable:</p>
          <pre style={codeStyle}>{`int x = 10;
int *p = &x;
printf("%d", *p);`}</pre>

          <h3>6.2 Pointer Arithmetic</h3>
          <p>You can perform arithmetic on pointers to access different memory locations:</p>
          <pre style={codeStyle}>{`int arr[3] = {10, 20, 30};
int *ptr = arr;
printf("%d", *(ptr + 1));`}</pre>

          <h3>6.3 Dynamic Memory Allocation</h3>
          <p>Use <code>malloc()</code> or <code>calloc()</code> for dynamic memory allocation:</p>
          <pre style={codeStyle}>{`int *arr = (int *)malloc(5 * sizeof(int));`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Structs</h2>
          <h3>7.1 Defining Structs</h3>
          <p>Structs are used to group different data types together:</p>
          <pre style={codeStyle}>{`struct Person {
    char name[50];
    int age;
};`}</pre>

          <h3>7.2 Accessing Struct Members</h3>
          <p>Access struct members using the dot operator:</p>
          <pre style={codeStyle}>{`struct Person person1 = {"John", 30};
printf("%s", person1.name);`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: File Handling</h2>
          <h3>8.1 Opening Files</h3>
          <p>You can open files using <code>fopen()</code>:</p>
          <pre style={codeStyle}>{`FILE *file = fopen("file.txt", "w");`}</pre>

          <h3>8.2 Reading from Files</h3>
          <p>To read from a file, use <code>fscanf()</code> or <code>fgets()</code>:</p>
          <pre style={codeStyle}>{`char buffer[100];
fgets(buffer, 100, file);`}</pre>

          <h3>8.3 Writing to Files</h3>
          <p>Use <code>fprintf()</code> or <code>fputs()</code> to write to a file:</p>
          <pre style={codeStyle}>{`fprintf(file, "Hello, file!");`}</pre>

          <h3>8.4 Closing Files</h3>
          <p>Don't forget to close the file after use:</p>
          <pre style={codeStyle}>{`fclose(file);`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Advanced Topics</h2>
          <h3>9.1 Recursion</h3>
          <p>Recursion is when a function calls itself:</p>
          <pre style={codeStyle}>{`int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`}</pre>

          <h3>9.2 Macros</h3>
          <p>Macros are used for code substitution:</p>
          <pre style={codeStyle}>{`#define SQUARE(x) ((x) * (x))`}</pre>

          <h3>9.3 Command-Line Arguments</h3>
          <p>Access command-line arguments through <code>argc</code> and <code>argv</code>:</p>
          <pre style={codeStyle}>{`int main(int argc, char *argv[]) {
    printf("%s", argv[1]);
}`}</pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 10: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/87SH2Cn0s9A"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 11: Conclusion</h2>
          <p>Congratulations! You have now learned the basics and some advanced concepts of C programming. Continue exploring advanced topics like multithreading, networking, and building system-level applications!</p>
        </div>
      </div>
    </div>
  );
}

export default CCourse;
