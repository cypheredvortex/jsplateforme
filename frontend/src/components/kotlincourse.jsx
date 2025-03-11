import React from "react";

function KotlinCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>
          Kotlin Programming Beginner Course
        </h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to Kotlin</h2>
          <h3>1.1 What is Kotlin?</h3>
          <p>Kotlin is a modern, statically typed programming language used for building Android apps, web applications, and more.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Basic Syntax</h2>
          <h3>2.1 Writing Your First Kotlin Program</h3>
          <pre style={codeStyle}>
            {`fun main() {
    println("Hello, World!")
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Variables and Data Types</h2>
          <pre style={codeStyle}>
            {`val name: String = "Kotlin"
var age: Int = 25`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Object-Oriented Programming</h2>
          <pre style={codeStyle}>
            {`class Person(val name: String, var age: Int)

fun main() {
    val person = Person("John", 25)
    println(person.name)
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Functions and Lambdas</h2>
          <pre style={codeStyle}>
            {`fun greet(name: String): String {
    return "Hello, $name!"
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Null Safety</h2>
          <pre style={codeStyle}>
            {`var name: String? = "Kotlin"
name = null`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Coroutines and Advanced Topics</h2>
          <pre style={codeStyle}>
            {`import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("Hello from Coroutine!")
    }
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 8: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EExSSotojVI?start=8s"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2025 Kotlin Course</p>
        </footer>
      </div>
    </div>
  );
}

export default KotlinCourse;