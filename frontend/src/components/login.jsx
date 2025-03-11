import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/coursespage");
    } catch (err) {
      setError("Invalid credentials, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <br /><br />
      <fieldset className="fieldintel">
        <legend style={{ color: "aqua", fontSize: "xx-large" }}>Log in</legend>
        <form onSubmit={handleLogin}> 
          <label htmlFor="email">E-mail:</label><br /><br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          /><br /><br />

          <label htmlFor="password">Password:</label><br /><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          /><br /><br /><br />

          <button type="submit" style={{ color: "black" }} disabled={loading}>
            {loading ? 'Logging in...' : 'Log in'}
          </button><br /><br /><br />
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Link to="/signuppage" style={{ color: "aqua" }}>Sign up</Link><br /><br /><br />
      </fieldset>
    </div>
  );
}

export default Login;
