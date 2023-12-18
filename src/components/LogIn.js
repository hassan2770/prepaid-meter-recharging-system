import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <section className="login-wrapper">
      <div className="paddings innerWidth flexCenter login-container">
        {/* left side */}
        <div>
          <div className="imagel-container">
            <img src="./login.png" alt="" />
          </div>
        </div>
        <form className="signup-container" onSubmit={handleSubmit}>
          <h2 className="signup-header" style={{ color: "orange" }}>
            Log In
          </h2>
          {error && <div className="error-msg">{error}</div>}
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="text"
            className="signup-input"
            required
            ref={emailRef}
            id="email"
          ></input>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            className="signup-input"
            required
            ref={passwordRef}
            id="password"
          ></input>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button disabled={loading} className="signup-button" type="submit">
              Log In
            </button>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link
              to={"/forgot-password"}
              style={{ textDecoration: "underline" }}
            >
              Forgot Password?
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Need to create an account?{" "}
            <Link
              to={"/signup"}
              style={{ textDecoration: "underline", color: "orange" }}
            >
              Sign Up
            </Link>
          </div>
        </form>
        
      </div>
    </section>
  );
};

export default LogIn;
