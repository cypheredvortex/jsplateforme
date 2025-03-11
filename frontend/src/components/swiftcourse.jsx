import React from 'react';

function SwiftCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>Swift Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to Swift</h2>
          <h3>1.1 What is Swift?</h3>
          <p>Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS app development. It was created by Apple and is designed to be easy to learn, modern, and efficient.</p>

          <h3>1.2 Setting Up Swift</h3>
          <p>To start coding in Swift, you need to install Xcode, Apple's integrated development environment (IDE). You can download Xcode from the Mac App Store.</p>

          <h3>1.3 Writing Your First Swift Program</h3>
          <p>Here’s a simple "Hello, World!" program in Swift:</p>
          <pre style={codeStyle}><code>{`print("Hello, World!")`}</code></pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Swift Basics</h2>
          <h3>2.1 Variables and Constants</h3>
          <p>In Swift, you can create variables using the <code>var</code> keyword and constants using the <code>let</code> keyword:</p>
          <pre style={codeStyle}><code>{`var name = "John"`}</code></pre>
          <p>Constants cannot be changed once they are assigned a value:</p>
          <pre style={codeStyle}><code>{`let pi = 3.14`}</code></pre>

          <h3>2.2 Data Types</h3>
          <p>Swift has a rich set of data types, including:</p>
          <ul>
            <li><strong>Int:</strong> Whole numbers.</li>
            <li><strong>Double:</strong> Floating-point numbers.</li>
            <li><strong>String:</strong> A sequence of characters.</li>
            <li><strong>Bool:</strong> Boolean values, true or false.</li>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 Conditional Statements</h3>
          <p>Swift has <code>if</code>, <code>else</code>, and <code>else if</code> for conditional logic:</p>
          <pre style={codeStyle}><code>{`if age >= 18 {
    print("You are an adult.")
} else {
    print("You are a minor.")
}`}</code></pre>

          <h3>3.2 Switch Statement</h3>
          <p>Swift provides a powerful <code>switch</code> statement for multi-way branching:</p>
          <pre style={codeStyle}><code>{`let day = "Monday"
switch day {
case "Monday":
    print("Start of the week!")
case "Friday":
    print("Almost weekend!")
default:
    print("Just another day.")
}`}</code></pre>

          <h3>3.3 Loops</h3>
          <p>Swift provides <code>for-in</code> loops and <code>while</code> loops for iterating over collections:</p>
          <pre style={codeStyle}><code>{`// For-in loop
for i in 1...5 {
    print(i)
}

// While loop
var i = 0
while i < 5 {
    print(i)
    i += 1
}`}</code></pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Functions</h2>
          <h3>4.1 Defining Functions</h3>
          <p>Functions in Swift are defined using the <code>func</code> keyword:</p>
          <pre style={codeStyle}><code>{`func greet(name: String) {
    print("Hello, \(name)!")
}

greet(name: "Alice")`}</code></pre>

          <h3>4.2 Function Parameters and Return Values</h3>
          <p>Functions can have parameters and return values:</p>
          <pre style={codeStyle}><code>{`func add(a: Int, b: Int) -> Int {
    return a + b
}

let sum = add(a: 5, b: 10)
print(sum)`}</code></pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Object-Oriented Programming (OOP)</h2>
          <h3>5.1 Classes and Objects</h3>
          <p>Swift is an object-oriented language. You can define a class with the <code>class</code> keyword:</p>
          <pre style={codeStyle}><code>{`class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func introduce() {
        print("Hi, my name is \(name) and I am \(age) years old.")
    }
}

let person = Person(name: "John", age: 30)
person.introduce()`}</code></pre>

          <h3>5.2 Inheritance</h3>
          <p>Classes can inherit properties and methods from other classes:</p>
          <pre style={codeStyle}><code>{`class Employee: Person {
    var jobTitle: String

    init(name: String, age: Int, jobTitle: String) {
        self.jobTitle = jobTitle
        super.init(name: name, age: age)
    }

    override func introduce() {
        super.introduce()
        print("I am a \(jobTitle).")
    }
}

let employee = Employee(name: "Alice", age: 25, jobTitle: "Developer")
employee.introduce()`}</code></pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Collections</h2>
          <h3>6.1 Arrays</h3>
          <p>Arrays in Swift are ordered collections of values:</p>
          <pre style={codeStyle}><code>{`var numbers = [1, 2, 3, 4, 5]
print(numbers[0])  // Output: 1`}</code></pre>

          <h3>6.2 Dictionaries</h3>
          <p>Dictionaries store key-value pairs in Swift:</p>
          <pre style={codeStyle}><code>{`var person = ["name": "John", "age": 30]
print(person["name"]!)  // Output: John`}</code></pre>

          <h3>6.3 Sets</h3>
          <p>Sets are unordered collections of unique values:</p>
          <pre style={codeStyle}><code>{`var numbersSet: Set = [1, 2, 3, 4, 5]
print(numbersSet.contains(3))  // Output: true`}</code></pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Optionals</h2>
          <h3>7.1 What are Optionals?</h3>
          <p>Optionals are used to represent a value that might be absent (null). You declare an optional with a <code>?</code>:</p>
          <pre style={codeStyle}><code>{`var name: String? = "John"`}</code></pre>

          <h3>7.2 Unwrapping Optionals</h3>
          <p>Optionals need to be unwrapped before use. You can do this with optional binding or forced unwrapping:</p>
          <pre style={codeStyle}><code>{`if let unwrappedName = name {
    print("Hello, \(unwrappedName)")
} else {
    print("No name provided")
}`}</code></pre>

          <h3>7.3 Optional Chaining</h3>
          <p>Optional chaining allows you to call methods or access properties of an optional:</p>
          <pre style={codeStyle}><code>{`let length = name?.count`}</code></pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Error Handling</h2>
          <h3>8.1 Try-Catch</h3>
          <p>Swift provides error handling with the <code>do-try-catch</code> block:</p>
          <pre style={codeStyle}><code>{`enum CustomError: Error {
    case invalidInput
}

func checkInput(input: String) throws {
    if input.isEmpty {
        throw CustomError.invalidInput
    }
}

do {
    try checkInput(input: "")
} catch {
    print("Error: \(error)")
}`}</code></pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 9: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Xg7E9shq0U?start=4s"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: Conclusion</h2>
          <p>Congratulations! You have completed the Swift beginner course. Now you can start building iOS apps and use Swift for various development tasks. Keep practicing and exploring more advanced topics like concurrency, design patterns, and SwiftUI.</p>
        </div>

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2024 Swift Course</p>
        </footer>
      </div>
    </div>
  );
}

export default SwiftCourse;