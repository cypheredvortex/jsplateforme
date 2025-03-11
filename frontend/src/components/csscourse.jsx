function CssCourse() {
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
        <h1 style={{ ...headingStyle, textAlign: "center" }}>CSS Beginner Course</h1>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 1: Introduction to CSS</h2>
          <h3>1.1 What is CSS?</h3>
          <p>CSS stands for <strong>Cascading Style Sheets</strong>.</p>
          <p>It describes how HTML elements should be displayed on screen, paper, or in other media.</p>
          <p>CSS allows you to control the layout, color, font, and positioning of elements on a webpage.</p>

          <h3>1.2 Basic Syntax</h3>
          <pre style={codeStyle}>
            {`selector {
  property: value;
}`}
          </pre>

          <h3>1.3 Inline, Internal, and External CSS</h3>
          <p><strong>Inline CSS:</strong> Written directly in the style attribute of HTML elements.</p>
          <pre style={codeStyle}>
            {`<h1 style="color: blue;">Hello World</h1>`}
          </pre>
          <p><strong>Internal CSS:</strong> Written inside the <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> of the HTML document.</p>
          <pre style={codeStyle}>
            {`<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>`}
          </pre>
          <p><strong>External CSS:</strong> Written in a separate <code>.css</code> file and linked to the HTML document.</p>
          <pre style={codeStyle}>
            {`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 2: Selectors and Properties</h2>
          <h3>2.1 Basic Selectors</h3>
          <p><strong>Universal Selector:</strong> Selects all elements.</p>
          <pre style={codeStyle}>
            {`* {
  color: black;
}`}
          </pre>

          <p><strong>Element Selector:</strong> Selects all elements of a specific type.</p>
          <pre style={codeStyle}>
            {`h1 {
  font-size: 24px;
}`}
          </pre>

          <p><strong>Class Selector:</strong> Selects all elements with a specific class.</p>
          <pre style={codeStyle}>
            {`.button {
  background-color: red;
}`}
          </pre>

          <p><strong>ID Selector:</strong> Selects a single element with a specific ID.</p>
          <pre style={codeStyle}>
            {`#header {
  background-color: blue;
}`}
          </pre>

          <h3>2.2 Grouping Selectors</h3>
          <p>Apply the same styles to multiple elements.</p>
          <pre style={codeStyle}>
            {`h1, h2, h3 {
  color: green;
}`}
          </pre>

          <h3>2.3 Descendant Selectors</h3>
          <p>Apply styles to elements inside a specific element.</p>
          <pre style={codeStyle}>
            {`div p {
  color: gray;
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 3: Box Model</h2>
          <h3>3.1 What is the Box Model?</h3>
          <p>Every element on a webpage is a box, which includes:</p>
          <ul>
            <li><strong>Content:</strong> The actual content of the box.</li>
            <li><strong>Padding:</strong> Space between the content and the border.</li>
            <li><strong>Border:</strong> A border surrounding the padding (optional).</li>
            <li><strong>Margin:</strong> Space outside the border, separating the element from others.</li>
          </ul>

          <pre style={codeStyle}>
            {`.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}`}
          </pre>

          <h3>3.2 Width and Height</h3>
          <p>Control the size of the box.</p>
          <pre style={codeStyle}>
            {`.box {
  width: 200px;
  height: 150px;
}`}
          </pre>

          <h3>3.3 Box Sizing</h3>
          <p>The <code>box-sizing</code> property controls how the width and height are calculated, including padding and border.</p>
          <pre style={codeStyle}>
            {`.box {
  box-sizing: border-box;
  width: 200px; /* includes padding and border */
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 4: Layout Techniques</h2>
          <h3>4.1 Display Property</h3>
          <p><strong>Block:</strong> Elements take up the full width available.</p>
          <pre style={codeStyle}>
            {`div {
  display: block;
}`}
          </pre>

          <p><strong>Inline:</strong> Elements take up only the space required by their content.</p>
          <pre style={codeStyle}>
            {`span {
  display: inline;
}`}
          </pre>

          <p><strong>Inline-block:</strong> Elements behave like inline elements but can have width and height.</p>
          <pre style={codeStyle}>
            {`button {
  display: inline-block;
  width: 150px;
}`}
          </pre>

          <h3>4.2 Flexbox Layout</h3>
          <p>Flexbox is a layout model that allows you to create complex layouts with fewer lines of code.</p>
          <pre style={codeStyle}>
            {`.container {
  display: flex;
  justify-content: space-between; /* Align items horizontally */
  align-items: center; /* Align items vertically */
}`}
          </pre>

          <h3>4.3 Grid Layout</h3>
          <p>CSS Grid is a two-dimensional layout system for the web.</p>
          <pre style={codeStyle}>
            {`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  grid-column: span 2; /* Span 2 columns */
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 5: Colors and Backgrounds</h2>
          <h3>5.1 Color Properties</h3>
          <p>You can set the color of text, borders, and backgrounds using color properties.</p>
          <pre style={codeStyle}>
            {`h1 {
  color: red;
}`}
          </pre>

          <h3>5.2 Background Images</h3>
          <p>Set an image as the background for an element.</p>
          <pre style={codeStyle}>
            {`body {
  background-image: url('background.jpg');
}`}
          </pre>

          <h3>5.3 Background Colors</h3>
          <p>Set a solid color as the background for an element.</p>
          <pre style={codeStyle}>
            {`body {
  background-color: lightblue;
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 6: Typography</h2>
          <h3>6.1 Font Families</h3>
          <p>You can set the font of an element using the <code>font-family</code> property.</p>
          <pre style={codeStyle}>
            {`body {
  font-family: Arial, sans-serif;
}`}
          </pre>

          <h3>6.2 Font Size and Weight</h3>
          <p>Set the size and weight of the font.</p>
          <pre style={codeStyle}>
            {`h1 {
  font-size: 32px;
  font-weight: bold;
}`}
          </pre>

          <h3>6.3 Line Height</h3>
          <p>Control the amount of space between lines of text.</p>
          <pre style={codeStyle}>
            {`p {
  line-height: 1.5;
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 7: Responsive Design</h2>
          <h3>7.1 Media Queries</h3>
          <p>Media queries allow you to apply styles depending on the device's screen size.</p>
          <pre style={codeStyle}>
            {`@media (max-width: 768px) {
  body {
    background-color: lightgreen;
  }
}`}
          </pre>

          <h3>7.2 Mobile First Approach</h3>
          <p>Design for mobile devices first, then scale up for larger screens using media queries.</p>
          <pre style={codeStyle}>
            {`/* Base styles for mobile devices */
body {
  font-size: 16px;
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
}`}
          </pre>
        </div>

        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 8: CSS Transitions and Animations</h2>
          <h3>8.1 CSS Transitions</h3>
          <p>Transitions allow you to change property values smoothly over a duration.</p>
          <pre style={codeStyle}>
            {`button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: blue;
}`}
          </pre>

          <h3>8.2 CSS Animations</h3>
          <p>Animations allow you to create keyframe-based animations.</p>
          <pre style={codeStyle}>
            {`@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

div {
  animation: slide 2s infinite;
}`}
          </pre>
        </div>
        <div style={moduleStyle}>
        <h2 style={headingStyle}>Module 9: Summary Video</h2>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wRNinF7YQqQ"
              title="CSS Crash Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div style={moduleStyle}>
          <h2 style={headingStyle}>Module 10: Best Practices and Conclusion</h2>
          <h3>10.1 Writing Clean and Efficient CSS</h3>
          <p>Use descriptive class names and avoid inline styles.</p>
          <p>Minimize redundancy by using reusable classes.</p>

          <h3>10.2 Conclusion</h3>
          <p>Now you have the basic understanding of CSS! Keep practicing and experimenting with styles to master CSS.</p>
        </div>
      </div>
    </div>
  );
}

export default CssCourse;
