import React from 'react';

function SqlCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>SQL Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to SQL</h2>
          <h3>1.1 What is SQL?</h3>
          <p>SQL (Structured Query Language) is the standard programming language used to manage and manipulate relational databases.</p>
          <p>SQL allows you to perform tasks such as retrieving, inserting, updating, and deleting data from a database.</p>

          <h3>1.2 SQL Syntax</h3>
          <p>SQL queries are made up of statements that allow you to interact with databases.</p>
          <pre style={codeStyle}>{`SELECT * FROM table_name;`}</pre>
          <p>SQL is case-insensitive, but it is a good practice to use uppercase for SQL keywords for readability.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Database Design</h2>
          <h3>2.1 Creating a Database</h3>
          <p>You can create a new database using the following SQL statement:</p>
          <pre style={codeStyle}>{`CREATE DATABASE my_database;`}</pre>

          <h3>2.2 Creating Tables</h3>
          <p>Once a database is created, you can create tables to store data:</p>
          <pre style={codeStyle}>
            {`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INT
);`}
          </pre>

          <h3>2.3 Defining Data Types</h3>
          <p>SQL provides various data types such as:</p>
          <ul>
            <li><strong>INT:</strong> Integer values</li>
            <li><strong>VARCHAR:</strong> Variable-length strings</li>
            <li><strong>DATE:</strong> Date values</li>
            <li><strong>BOOLEAN:</strong> True or false values</li>
          </ul>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Data Manipulation</h2>
          <h3>3.1 Inserting Data</h3>
          <p>To add data to a table, use the <code>INSERT INTO</code> statement:</p>
          <pre style={codeStyle}>
            {`INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john.doe@example.com', 30);`}
          </pre>

          <h3>3.2 Selecting Data</h3>
          <p>To retrieve data from a table, use the <code>SELECT</code> statement:</p>
          <pre style={codeStyle}>{`SELECT * FROM users;`}</pre>

          <h3>3.3 Filtering Data</h3>
          <p>You can filter the data using the <code>WHERE</code> clause:</p>
          <pre style={codeStyle}>{`SELECT * FROM users WHERE age > 25;`}</pre>

          <h3>3.4 Updating Data</h3>
          <p>To modify existing data, use the <code>UPDATE</code> statement:</p>
          <pre style={codeStyle}>
            {`UPDATE users
SET age = 31
WHERE id = 1;`}
          </pre>

          <h3>3.5 Deleting Data</h3>
          <p>To remove data from a table, use the <code>DELETE</code> statement:</p>
          <pre style={codeStyle}>{`DELETE FROM users WHERE id = 1;`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Advanced Queries</h2>
          <h3>4.1 Using Aggregate Functions</h3>
          <p>SQL provides aggregate functions like <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, and <code>MAX()</code>:</p>
          <pre style={codeStyle}>{`SELECT COUNT(*) FROM users;`}</pre>
          <p>This query returns the number of users in the table.</p>

          <h3>4.2 GROUP BY</h3>
          <p>You can group rows that share a property using the <code>GROUP BY</code> clause:</p>
          <pre style={codeStyle}>{`SELECT age, COUNT(*) 
FROM users
GROUP BY age;`}</pre>

          <h3>4.3 Sorting Data</h3>
          <p>Use the <code>ORDER BY</code> clause to sort the results:</p>
          <pre style={codeStyle}>{`SELECT * FROM users ORDER BY age DESC;`}</pre>

          <h3>4.4 JOINing Tables</h3>
          <p>SQL allows you to combine data from multiple tables using <code>JOIN</code>:</p>
          <pre style={codeStyle}>
            {`SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id;`}
          </pre>
          <p>This query retrieves the names of users along with the order amounts.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: SQL Constraints</h2>
          <h3>5.1 PRIMARY KEY</h3>
          <p>A <code>PRIMARY KEY</code> uniquely identifies each record in a table:</p>
          <pre style={codeStyle}>
            {`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`}
          </pre>

          <h3>5.2 UNIQUE</h3>
          <p>The <code>UNIQUE</code> constraint ensures all values in a column are different:</p>
          <pre style={codeStyle}>
            {`CREATE TABLE users (
  email VARCHAR(100) UNIQUE
);`}
          </pre>

          <h3>5.3 NOT NULL</h3>
          <p>The <code>NOT NULL</code> constraint ensures that a column cannot have a NULL value:</p>
          <pre style={codeStyle}>
            {`CREATE TABLE users (
  name VARCHAR(100) NOT NULL
);`}
          </pre>

          <h3>5.4 FOREIGN KEY</h3>
          <p>A <code>FOREIGN KEY</code> links one table to another, ensuring data integrity:</p>
          <pre style={codeStyle}>
            {`CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Subqueries</h2>
          <h3>6.1 Using Subqueries</h3>
          <p>A subquery is a query within another query:</p>
          <pre style={codeStyle}>
            {`SELECT * FROM users 
WHERE id = (SELECT user_id FROM orders WHERE order_id = 1);`}
          </pre>
          <p>This query selects the user who placed the order with <code>order_id</code> 1.</p>

          <h3>6.2 Correlated Subqueries</h3>
          <p>A correlated subquery refers to columns in the outer query:</p>
          <pre style={codeStyle}>
            {`SELECT name FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.id
);`}
          </pre>
          <p>This query returns users who have placed at least one order.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Transactions</h2>
          <h3>7.1 Starting a Transaction</h3>
          <p>Transactions allow you to execute multiple queries as a single unit:</p>
          <pre style={codeStyle}>{`START TRANSACTION;`}</pre>

          <h3>7.2 Committing a Transaction</h3>
          <p>To save all changes made during the transaction, use the <code>COMMIT</code> statement:</p>
          <pre style={codeStyle}>{`COMMIT;`}</pre>

          <h3>7.3 Rolling Back a Transaction</h3>
          <p>If something goes wrong, you can roll back to the previous state:</p>
          <pre style={codeStyle}>{`ROLLBACK;`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: Views and Indexes</h2>
          <h3>8.1 Creating a View</h3>
          <p>A view is a virtual table based on the result of a query:</p>
          <pre style={codeStyle}>
            {`CREATE VIEW user_orders AS
SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id;`}
          </pre>

          <h3>8.2 Creating an Index</h3>
          <p>An index helps speed up data retrieval:</p>
          <pre style={codeStyle}>{`CREATE INDEX idx_name ON users (name);`}</pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Performance Optimization</h2>
          <h3>9.1 Using EXPLAIN</h3>
          <p>Use the <code>EXPLAIN</code> statement to analyze and optimize queries:</p>
          <pre style={codeStyle}>{`EXPLAIN SELECT * FROM users WHERE age > 25;`}</pre>

          <h3>9.2 Optimizing Joins</h3>
          <p>Optimize your queries by using the correct join type (INNER JOIN, LEFT JOIN, etc.) based on your data needs.</p>
        </div>

        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 10: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7S_tz1z_5bA"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2025 SQL Course</p>
        </footer>
      </div>
    </div>
  );
}

export default SqlCourse;
