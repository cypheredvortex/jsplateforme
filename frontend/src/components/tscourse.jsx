import React from 'react';

function TypeScriptCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>TypeScript Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to TypeScript</h2>
          <h3>1.1 What is TypeScript?</h3>
          <p>TypeScript is a superset of JavaScript that adds static types and modern features to JavaScript. It provides type safety, better tooling support, and helps catch errors early during development.</p>

          <h3>1.2 Setting Up TypeScript</h3>
          <p>To get started with TypeScript, you need to install it using npm:</p>
          <pre style={codeStyle}>{`npm install -g typescript`}</pre>
          <p>Then, create a TypeScript file with the extension <code>.ts</code>.</p>

          <h3>1.3 Writing Your First TypeScript Program</h3>
          <p>Here’s a simple "Hello, World!" program in TypeScript:</p>
          <pre style={codeStyle}>{`let message: string = "Hello, World!";
console.log(message);`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Basic Types in TypeScript</h2>
          <h3>2.1 Variables and Types</h3>
          <p>TypeScript supports all the basic types that JavaScript does, with additional type annotations:</p>
          <pre style={codeStyle}>{`let name: string = "John";`}</pre>
          <p>Here are some common types in TypeScript:</p>
          <ul>
            <li><strong>string:</strong> Represents a string value</li>
            <li><strong>number:</strong> Represents numeric values (integers or floating-point numbers)</li>
            <li><strong>boolean:</strong> Represents true or false values</li>
            <li><strong>any:</strong> Represents any type (use cautiously)</li>
          </ul>

          <h3>2.2 Arrays</h3>
          <p>Arrays in TypeScript can be typed:</p>
          <pre style={codeStyle}>{`let numbers: number[] = [1, 2, 3];`}</pre>

          <h3>2.3 Tuples</h3>
          <p>Tuples are arrays with fixed sizes and types for each element:</p>
          <pre style={codeStyle}>{`let person: [string, number] = ["John", 30];`}</pre>

          <h3>2.4 Enum</h3>
          <p>Enums are a way to define named constants:</p>
          <pre style={codeStyle}>{`enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Green;`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Functions in TypeScript</h2>
          <h3>3.1 Function Syntax</h3>
          <p>In TypeScript, functions can be typed with return types and parameter types:</p>
          <pre style={codeStyle}>{`function greet(name: string): string {
    return "Hello, " + name;
}
let message: string = greet("Alice");`}</pre>

          <h3>3.2 Optional Parameters</h3>
          <p>Parameters in TypeScript can be optional using the <code>?</code> syntax:</p>
          <pre style={codeStyle}>{`function greet(name: string, age?: number): string {
    if (age) {
        return "Hello, " + name + ". You are " + age + " years old.";
    }
    return "Hello, " + name;
}`}</pre>

          <h3>3.3 Default Parameters</h3>
          <p>Function parameters can also have default values:</p>
          <pre style={codeStyle}>{`function greet(name: string, age: number = 25): string {
    return "Hello, " + name + ". You are " + age + " years old.";
}`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Interfaces and Types</h2>
          <h3>4.1 Interfaces</h3>
          <p>Interfaces define a contract for objects or classes. They are used to ensure an object adheres to a specific structure:</p>
          <pre style={codeStyle}>{`interface Person {
    name: string;
    age: number;
}
let person: Person = { name: "John", age: 30 };`}</pre>

          <h3>4.2 Type Aliases</h3>
          <p>Type aliases allow you to create new types using existing ones:</p>
          <pre style={codeStyle}>{`type Point = { x: number; y: number; };
let point: Point = { x: 10, y: 20 };`}</pre>

          <h3>4.3 Function Types</h3>
          <p>You can also define the types for functions using interfaces or type aliases:</p>
          <pre style={codeStyle}>{`type GreetFunction = (name: string) => string;
let greet: GreetFunction = (name) => {
    return "Hello, " + name;
};`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Classes and Object-Oriented Programming</h2>
          <h3>5.1 Defining Classes</h3>
          <p>In TypeScript, classes are very similar to those in JavaScript, but with optional type annotations:</p>
          <pre style={codeStyle}>{`class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

let person = new Person("John", 30);
person.greet();`}</pre>

          <h3>5.2 Inheritance</h3>
          <p>TypeScript supports inheritance and the <code>extends</code> keyword:</p>
          <pre style={codeStyle}>{`class Employee extends Person {
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    showJob() {
        console.log(this.name + " is a " + this.jobTitle);
    }
}

let employee = new Employee("Alice", 25, "Software Developer");
employee.showJob();`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Generics</h2>
          <h3>6.1 Introduction to Generics</h3>
          <p>Generics allow you to create reusable components that work with any data type:</p>
          <pre style={codeStyle}>{`function identity<T>(arg: T): T {
    return arg;
}
let result = identity<string>("Hello");`}</pre>

          <h3>6.2 Generic Interfaces</h3>
          <p>Interfaces can also be made generic:</p>
          <pre style={codeStyle}>{`interface Box<T> {
    value: T;
}
let box: Box<number> = { value: 123 };`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Modules and Namespaces</h2>
          <h3>7.1 Importing and Exporting Modules</h3>
          <p>TypeScript uses the same module system as JavaScript:</p>
          <pre style={codeStyle}>{`// person.ts
export class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// app.ts
import { Person } from './person';
let person = new Person("John", 30);
console.log(person.name);`}</pre>

          <h3>7.2 Namespaces</h3>
          <p>Namespaces are used to organize code into logical units:</p>
          <pre style={codeStyle}>{`namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }
}
let sum = MathUtils.add(5, 10);`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Advanced TypeScript Features</h2>
          <h3>8.1 Type Assertions</h3>
          <p>Type assertions are used to tell the compiler to treat a value as a specific type:</p>
          <pre style={codeStyle}>{`let message: any = "Hello, World!";
let messageLength: number = (<string>message).length;`}</pre>

          <h3>8.2 Union and Intersection Types</h3>
          <p>Union types allow a value to be one of multiple types, and intersection types combine multiple types into one:</p>
          <pre style={codeStyle}>{`let value: string | number = "Hello";
value = 100;

type Person = { name: string; };
type Employee = { jobTitle: string; };
type EmployeeDetails = Person & Employee;`}</pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 9: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SpwzRDUQ1GI"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: Conclusion</h2>
          <p>Congratulations! You have learned the basics of TypeScript, including types, functions, classes, generics, and advanced features. Keep exploring more TypeScript features and best practices to build robust applications!</p>
        </div>



        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2025 TypeScript Course</p>
        </footer>
      </div>
    </div>
  );
}

export default TypeScriptCourse;
