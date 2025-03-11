function Html() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>HTML Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to HTML</h2>
          <h3>1.1 What is HTML?</h3>
          <p>HTML stands for Hypertext Markup Language.</p>
          <p>It is the standard language used to create webpages.</p>
          <p>It describes the structure of a webpage using elements and tags.</p>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Working with Text</h2>
          <h3>2.1 Headings and Paragraphs</h3>
          <pre style={codeStyle}>
            {`<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Creating Links and Navigation</h2>
          <h3>3.1 Hyperlinks</h3>
          <pre style={codeStyle}>
            {`<a href="https://www.example.com" target="_blank">Click here to visit Example</a>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Lists and Navigation</h2>
          <h3>4.1 Unordered Lists</h3>
          <pre style={codeStyle}>
            {`<ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ul>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Working with Images</h2>
          <h3>5.1 Embedding Images</h3>
          <pre style={codeStyle}>
            {`<img src="image.jpg" alt="Description of Image" width="300">`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Tables</h2>
          <h3>6.1 Creating Tables</h3>
          <pre style={codeStyle}>
            {`<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>30</td>
    </tr>
</table>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Forms and User Input</h2>
          <h3>7.1 Basic Form Elements</h3>
          <pre style={codeStyle}>
            {`<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">Submit</button>
</form>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: HTML5 Features</h2>
          <h3>8.1 Audio and Video</h3>
          <pre style={codeStyle}>
            {`<audio controls>
    <source src="audio.mp3" type="audio/mp3">
</audio>
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 9: Layout and Structure</h2>
          <pre style={codeStyle}>
            {`<header>
    <h1>Welcome to My Website</h1>
</header>

<main>
    <section>
        <h2>About Us</h2>
        <p>We are a tech company.</p>
    </section>
</main>`}
          </pre>
        </div>
        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 10: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qz0aGYrrlhU"
              title="HTML Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
       

        <footer style={{ textAlign: "center", padding: "15px 0", backgroundColor: "#ddd", borderRadius: "8px" }}>
          <p>© 2024 My Website</p>
        </footer>
      </div>
    </div>
  );
}

export default Html;
