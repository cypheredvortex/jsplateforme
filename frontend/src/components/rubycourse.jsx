import React from 'react';

function RubyCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>Ruby Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to Ruby</h2>
          <h3>1.1 What is Ruby?</h3>
          <p>Ruby is an open-source, dynamic, object-oriented programming language. It is designed to be simple and intuitive, focusing on simplicity and productivity. Ruby is used for web development (especially with Ruby on Rails), automation, and scripting tasks.</p>

          <h3>1.2 Setting Up Ruby</h3>
          <p>To get started with Ruby, you need to install Ruby on your system. You can download it from the official site or use a version manager like <code>rvm</code> or <code>rbenv</code>.</p>
          <pre style={codeStyle}>{`sudo apt install ruby`}</pre>

          <h3>1.3 Writing Your First Ruby Program</h3>
          <p>Here’s a simple "Hello, World!" program in Ruby:</p>
          <pre style={codeStyle}>{`puts "Hello, World!"`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Ruby Basics</h2>
          <h3>2.1 Variables and Data Types</h3>
          <p>Ruby supports several built-in data types:</p>
          <ul>
            <li><strong>String:</strong> A sequence of characters.</li>
            <li><strong>Integer:</strong> Whole numbers.</li>
            <li><strong>Float:</strong> Decimal numbers.</li>
            <li><strong>Boolean:</strong> True or false values.</li>
          </ul>

          <h3>2.2 Variables</h3>
          <p>Variables in Ruby are dynamically typed, so you don't need to specify their types:</p>
          <pre style={codeStyle}>{`name = "John"`}</pre>

          <h3>2.3 Constants</h3>
          <p>Constants in Ruby are variables that shouldn’t be changed:</p>
          <pre style={codeStyle}>{`PI = 3.14`}</pre>

          <h3>2.4 User Input</h3>
          <p>Ruby allows you to collect user input using the <code>gets</code> method:</p>
          <pre style={codeStyle}>{`puts "Enter your name:"
name = gets.chomp
puts "Hello, #{name}!"`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Control Flow</h2>
          <h3>3.1 Conditional Statements</h3>
          <p>Ruby has <code>if</code>, <code>else</code>, and <code>elsif</code> statements for conditional logic:</p>
          <pre style={codeStyle}>{`if age >= 18
  puts "You are an adult."
else
  puts "You are a minor."
end`}</pre>

          <h3>3.2 Case Statements</h3>
          <p>Ruby also has a <code>case</code> statement for multi-conditional checks:</p>
          <pre style={codeStyle}>{`case day
when "Monday"
  puts "Start of the week!"
when "Friday"
  puts "Almost weekend!"
else
  puts "Just another day."
end`}</pre>

          <h3>3.3 Loops</h3>
          <p>Ruby supports loops like <code>while</code>, <code>for</code>, and <code>each</code>.</p>
          <pre style={codeStyle}>{`# While loop
i = 0
while i < 5
  puts i
  i += 1
end

# For loop
for i in 0..5
  puts i
end

# Each loop
[1, 2, 3].each do |num|
  puts num
end`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Arrays and Hashes</h2>
          <h3>4.1 Arrays</h3>
          <p>Arrays in Ruby are ordered collections of elements. You can create an array using <code>[]</code>:</p>
          <pre style={codeStyle}>{`arr = [1, 2, 3, 4, 5]
puts arr[0]  # Output: 1`}</pre>

          <h3>4.2 Hashes</h3>
          <p>Hashes are unordered collections of key-value pairs:</p>
          <pre style={codeStyle}>{`hash = { "name" => "John", "age" => 25 }
puts hash["name"]  # Output: John`}</pre>

          <h3>4.3 Methods on Arrays and Hashes</h3>
          <p>You can perform various operations on arrays and hashes:</p>
          <pre style={codeStyle}>{`arr = [1, 2, 3, 4]
arr.push(5)   # Adds 5 to the array
arr.pop()     # Removes the last element

hash = { "name" => "John", "age" => 25 }
hash["name"] = "Jane"   # Changes the value of "name"`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Methods</h2>
          <h3>5.1 Defining Methods</h3>
          <p>In Ruby, methods are defined using the <code>def</code> keyword:</p>
          <pre style={codeStyle}>{`def greet(name)
  puts "Hello, #{name}!"
end

greet("Alice")  # Output: Hello, Alice!`}</pre>

          <h3>5.2 Method Arguments</h3>
          <p>Methods can accept arguments, and you can specify default values:</p>
          <pre style={codeStyle}>{`def greet(name = "Guest")
  puts "Hello, #{name}!"
end

greet("Alice")  # Output: Hello, Alice!
greet()         # Output: Hello, Guest!`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Object-Oriented Programming (OOP)</h2>
          <h3>6.1 Classes and Objects</h3>
          <p>Ruby is an object-oriented language, and everything is an object. You can define a class with the <code>class</code> keyword:</p>
          <pre style={codeStyle}>{`class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    puts "Hi, my name is #{@name} and I am #{@age} years old."
  end
end

person = Person.new("John", 30)
person.introduce`}</pre>

          <h3>6.2 Inheritance</h3>
          <p>In Ruby, classes can inherit from other classes using the <code>super</code> keyword:</p>
          <pre style={codeStyle}>{`class Employee < Person
  def initialize(name, age, job_title)
    super(name, age)
    @job_title = job_title
  end

  def introduce
    super
    puts "I am a #{@job_title}."
  end
end

employee = Employee.new("Alice", 25, "Developer")
employee.introduce`}</pre>

          <h3>6.3 Modules</h3>
          <p>Modules are used to group related methods. They can be included in classes:</p>
          <pre style={codeStyle}>{`module Greetings
  def greet
    puts "Hello!"
  end
end

class Person
  include Greetings
end

person = Person.new
person.greet`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Exception Handling</h2>
          <h3>7.1 Begin, Rescue, and Ensure</h3>
          <p>Ruby provides a way to handle exceptions using <code>begin</code>, <code>rescue</code>, and <code>ensure</code>:</p>
          <pre style={codeStyle}>{`begin
  # Code that might raise an exception
  raise "An error occurred"
rescue => e
  puts "Error: #{e.message}"
ensure
  puts "This will always execute"
end`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: File Handling</h2>
          <h3>8.1 Reading and Writing Files</h3>
          <p>Ruby provides methods for reading from and writing to files:</p>
          <pre style={codeStyle}>{`# Reading from a file
file = File.open("example.txt", "r")
puts file.read
file.close

# Writing to a file
file = File.open("example.txt", "w")
file.puts("Hello, Ruby!")
file.close`}</pre>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 9: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/t_ispmWmdjY"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: Conclusion</h2>
          <p>Congratulations! You have learned the basics of Ruby, including data types, control flow, object-oriented programming, and file handling. Keep practicing to build more advanced Ruby applications!</p>
        </div>
      </div>
    </div>
  );
}

export default RubyCourse;
