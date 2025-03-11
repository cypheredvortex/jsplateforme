import React from 'react';

function RCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>R Programming Beginner Course</h1>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to R</h2>
          <h3>1.1 What is R?</h3>
          <p>R is a free and open-source programming language primarily used for statistical computing and data analysis.</p>
          <h3>1.2 Setting Up R</h3>
          <p>Download R from <a href="https://cran.r-project.org/" target="_blank" rel="noopener noreferrer">CRAN</a> and use RStudio for an enhanced coding experience.</p>
          <h3>1.3 Writing Your First R Script</h3>
          <pre style={codeStyle}>{`print("Hello, World!")`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Basic Data Types</h2>
          <h3>2.1 Numbers</h3>
          <pre style={codeStyle}>{`x <- 10
y <- 3.14`}</pre>
          <h3>2.2 Characters and Strings</h3>
          <pre style={codeStyle}>{`name <- "John"
greeting <- 'Hello, World!'`}</pre>
          <h3>2.3 Logical Values</h3>
          <pre style={codeStyle}>{`is_rainy <- TRUE
is_sunny <- FALSE`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Vectors</h2>
          <h3>3.1 Creating Vectors</h3>
          <pre style={codeStyle}>{`numbers <- c(1, 2, 3, 4, 5)`}</pre>
          <h3>3.2 Vector Operations</h3>
          <pre style={codeStyle}>{`print(numbers[2])`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Data Frames</h2>
          <pre style={codeStyle}>{`df <- data.frame(Name = c("John", "Jane", "Mike"),
                 Age = c(25, 30, 35),
                 City = c("New York", "Los Angeles", "Chicago"))`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Control Structures</h2>
          <h3>5.1 If Statements</h3>
          <pre style={codeStyle}>{`if (age > 18) {
    print("You are an adult.")
} else {
    print("You are a minor.")
}`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Functions in R</h2>
          <pre style={codeStyle}>{`greet <- function(name) {
    print(paste("Hello,", name))
}
greet("John")`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Data Manipulation with dplyr</h2>
          <pre style={codeStyle}>{`library(dplyr)
filtered_df <- df %>% filter(Age > 25)
print(filtered_df)`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Data Visualization with ggplot2</h2>
          <pre style={codeStyle}>{`library(ggplot2)
ggplot(df, aes(x = Age, y = as.numeric(as.factor(City)))) +
  geom_point() +
  labs(title = "Age vs City")`}</pre>
        </div>
        
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Advanced Topics</h2>
          <h3>9.1 Working with Dates and Times</h3>
          <pre style={codeStyle}>{`date <- as.Date("2022-01-01")
print(format(date, "%A, %B %d, %Y"))`}</pre>
          <h3>9.2 Shiny Framework for Web Applications</h3>
          <p>Shiny allows you to create interactive web applications easily.</p>
        </div>
        
        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 10: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_V8eKsto3Ug"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 11: Conclusion</h2>
          <p>You've completed the R beginner course. Keep practicing and exploring!</p>
        </div>
      </div>
    </div>
  );
}

export default RCourse;
