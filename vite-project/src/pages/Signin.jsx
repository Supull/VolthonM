import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts.jsx"; 
import "../css/Signup.css"; 

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup-title">Sign In</h1>

        <p className="signup-subtext">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>

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
          Sign In
        </button>

        {error && <p className="signup-error">{error}</p>}
      </form>
    </div>
  );
}

export default SignIn;
