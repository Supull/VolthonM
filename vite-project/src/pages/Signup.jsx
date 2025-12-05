import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts.jsx";
import "../css/Signup.css";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [username, setUsername] = useState("");
  

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup-title">Sign Up</h1>

        <p className="signup-subtext">
          Already have an account?{" "}
          <Link to="/signin" className="signup-link">
            Sign In
          </Link>
        </p>

         <input
          type="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input signup-input-email"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input signup-input-email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input signup-input-password"
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        {error && <p className="signup-error">{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
