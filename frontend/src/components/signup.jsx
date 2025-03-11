import './App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        alert("Signup successful!");
        navigate("/coursespage");
      } else {
        throw new Error("Signup failed, please try again.");
      }
    }  catch (err) {
      console.error("Signup Error:", err);
      setError(err.response?.data?.message || "Error during signup. Please try again.");
    }
  };

  return (
    <div>
      <br /><br /><br />
      <form onSubmit={handleSubmit} method='post'>
        <fieldset className="fieldintel">
          <legend style={{ color: "aqua", fontSize: "xx-large" }}>Sign Up</legend>
          <br />

          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <br /><br />

          <label htmlFor="email">E-mail:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <br /><br />

          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <br /><br />

          <button type="submit" style={{ color: "black" }}>Sign Up</button>
          <br /><br />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <Link to="/loginpage" style={{ color: "aqua" }}>Already have an account? Log in</Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
