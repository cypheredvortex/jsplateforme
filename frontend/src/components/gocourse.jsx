import React from 'react';

function GoCourse() {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    overflow: 'hidden',
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '1200px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    lineHeight: '1.6',
    marginBottom: '100px',
  };

  const headingStyle = {
    color: '#333',
    borderBottom: '3px solid #007bff',
    paddingBottom: '8px',
    marginBottom: '15px',
  };

  const moduleStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '25px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const codeStyle = {
    display: 'block',
    backgroundColor: '#222',
    color: '#fff',
    padding: '12px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    marginTop: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={{ ...headingStyle, textAlign: 'center' }}>Go Programming Beginner Course</h1>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to Go</h2>
          <h3>1.1 What is Go?</h3>
          <p>Go is a statically typed, compiled programming language designed by Google. It is known for its simplicity, efficiency, and concurrency support.</p>
          <h3>1.2 Setting Up Go</h3>
          <p>To start coding in Go, download and install Go from the official website: <a href="https://golang.org/dl/" target="_blank" rel="noopener noreferrer">Go Downloads</a>. After installing, check the version with <code>go version</code> in your terminal.</p>
          <h3>1.3 Writing Your First Go Program</h3>
          <pre style={codeStyle}>{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Go Basics</h2>
          <h3>2.1 Variables and Constants</h3>
          <pre style={codeStyle}>{`var name = "John"
const pi = 3.14`}</pre>
          <h3>2.2 Data Types</h3>
          <ul>
            <li><strong>int</strong>: Integer numbers.</li>
            <li><strong>float64</strong>: Floating-point numbers.</li>
            <li><strong>string</strong>: A sequence of characters.</li>
            <li><strong>bool</strong>: Boolean values (true or false).</li>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 Conditional Statements</h3>
          <pre style={codeStyle}>{`if age >= 18 {
    fmt.Println("You are an adult.")
} else {
    fmt.Println("You are a minor.")
}`}</pre>
          <h3>3.2 Switch Statement</h3>
          <pre style={codeStyle}>{`switch day {
case "Monday":
    fmt.Println("Start of the week!")
case "Friday":
    fmt.Println("Almost weekend!")
default:
    fmt.Println("Just another day.")
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Functions</h2>
          <h3>4.1 Defining Functions</h3>
          <pre style={codeStyle}>{`func greet(name string) {
    fmt.Println("Hello, ", name)
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Structs and Methods</h2>
          <h3>5.1 Defining Structs</h3>
          <pre style={codeStyle}>{`type Person struct {
    Name string
    Age  int
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Concurrency</h2>
          <h3>6.1 Goroutines</h3>
          <pre style={codeStyle}>{`go func() {
    fmt.Println("Hello from a Goroutine")
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Error Handling</h2>
          <h3>7.1 Errors in Go</h3>
          <pre style={codeStyle}>{`func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}`}</pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 8: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/un6ZyFkqFKo"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Conclusion</h2>
          <p>Congratulations! You've completed the Go beginner course.</p>
        </div>
      </div>
    </div>
  );
}

export default GoCourse;
