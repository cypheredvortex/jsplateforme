import React from "react";

function JavaCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>Java Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to Java</h2>
          <h3>1.1 What is Java?</h3>
          <p>Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle).</p>
          <p>It is platform-independent, meaning Java code can run on any device with a Java Virtual Machine (JVM).</p>

          <h3>1.2 Setting Up Java</h3>
          <p>To start coding in Java, you need:</p>
          <ul>
            <li><strong>JDK (Java Development Kit):</strong> Includes tools for developing and running Java programs.</li>
            <li><strong>IDE (Integrated Development Environment):</strong> Such as IntelliJ IDEA, Eclipse, or VS Code.</li>
          </ul>

          <h3>1.3 Your First Java Program</h3>
          <pre style={codeStyle}>
            {`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Variables and Data Types</h2>
          <h3>2.1 Variables</h3>
          <p>Variables are used to store data in a program.</p>
          <pre style={codeStyle}>
            {`int age = 25;
double price = 19.99;
char grade = 'A';
boolean isJavaFun = true;`}
          </pre>

          <h3>2.2 Data Types</h3>
          <p>Java has two categories of data types:</p>
          <ul>
            <li><strong>Primitive:</strong> <code>int</code>, <code>double</code>, <code>char</code>, <code>boolean</code>, etc.</li>
            <li><strong>Non-Primitive:</strong> <code>String</code>, <code>Array</code>, <code>Class</code>, etc.</li>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 If-Else Statements</h3>
          <pre style={codeStyle}>
            {`int age = 18;
if (age >= 18) {
  System.out.println("You are an adult.");
} else {
  System.out.println("You are a minor.");
}`}
          </pre>

          <h3>3.2 Loops</h3>
          <p><strong>For Loop:</strong></p>
          <pre style={codeStyle}>
            {`for (int i = 0; i < 5; i++) {
  System.out.println("Iteration: " + i);
}`}
          </pre>

          <p><strong>While Loop:</strong></p>
          <pre style={codeStyle}>
            {`int i = 0;
while (i < 5) {
  System.out.println("Iteration: " + i);
  i++;
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Object-Oriented Programming (OOP)</h2>
          <h3>4.1 Classes and Objects</h3>
          <p>A class is a blueprint for creating objects.</p>
          <pre style={codeStyle}>
            {`class Car {
  String brand;
  int year;

  void start() {
    System.out.println("Car started!");
  }
}

Car myCar = new Car();
myCar.brand = "Toyota";
myCar.year = 2020;
myCar.start();`}
          </pre>

          <h3>4.2 Inheritance</h3>
          <p>Inheritance allows a class to inherit properties and methods from another class.</p>
          <pre style={codeStyle}>
            {`class Vehicle {
  void move() {
    System.out.println("Vehicle is moving.");
  }
}

class Car extends Vehicle {
  void honk() {
    System.out.println("Honk honk!");
  }
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Arrays and Collections</h2>
          <h3>5.1 Arrays</h3>
          <p>Arrays are used to store multiple values in a single variable.</p>
          <pre style={codeStyle}>
            {`int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers[0]); // Output: 1`}
          </pre>

          <h3>5.2 ArrayList</h3>
          <p><code>ArrayList</code> is a resizable array in the Java Collections Framework.</p>
          <pre style={codeStyle}>
            {`import java.util.ArrayList;

ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
System.out.println(fruits.get(0)); // Output: Apple`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Exception Handling</h2>
          <h3>6.1 Try-Catch Block</h3>
          <p>Used to handle exceptions and prevent program crashes.</p>
          <pre style={codeStyle}>
            {`try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero!");
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: File Handling</h2>
          <h3>7.1 Reading from a File</h3>
          <pre style={codeStyle}>
            {`import java.io.File;
import java.util.Scanner;

try {
  File file = new File("example.txt");
  Scanner scanner = new Scanner(file);
  while (scanner.hasNextLine()) {
    System.out.println(scanner.nextLine());
  }
  scanner.close();
} catch (Exception e) {
  System.out.println("An error occurred.");
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Advanced Java Concepts</h2>
          <h3>8.1 Interfaces and Abstract Classes</h3>
          <pre style={codeStyle}>
            {`// Interface
interface Animal {
  void makeSound();
}

class Dog implements Animal {
  public void makeSound() {
    System.out.println("Bark!");
  }
}

// Abstract Class
abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() {
    System.out.println("Drawing a circle.");
  }
}`}
          </pre>

          <h3>8.2 Generics</h3>
          <pre style={codeStyle}>
            {`class Box<T> {
  private T item;

  public void setItem(T item) {
    this.item = item;
  }

  public T getItem() {
    return item;
  }
}

Box<String> stringBox = new Box<>();
stringBox.setItem("Hello");
System.out.println(stringBox.getItem());`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Summary Video</h2>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eIrMbAQSU34"
              title="Java Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: Best Practices and Conclusion</h2>
          <h3>10.1 Writing Clean Code</h3>
          <p>Use meaningful variable names, follow naming conventions, and write modular code.</p>

          <h3>10.2 Conclusion</h3>
          <p>You now have a solid foundation in Java programming. Keep practicing and building projects to master Java!</p>
        </div>
      </div>
    </div>
  );
}

export default JavaCourse;