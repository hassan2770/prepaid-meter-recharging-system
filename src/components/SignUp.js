import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"
const SignUp = () => {
  const emailRef = useRef();
  const passwordConfirmRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <section className="signup-wrapper">
      <div className="paddings innerWidth flexCenter signupp-container">
        {/* left side */}
        <div>
          <div className="imageS-container">
            <img src="./signup.png" alt="" />
          </div>
        </div>
    <form className="signup-container" onSubmit={handleSubmit}>
      <h2 className="signup-header" style={{color:'orange'}}>Sign Up</h2>
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
      <div>
        <label htmlFor="cpassword">Confirm Password</label>
      </div>
      <input
        type="password"
        className="signup-input"
        required
        ref={passwordConfirmRef}
        id="cpassword"
      ></input>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button disabled={loading} className="signup-button" type="submit">
          Sign up
        </button>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        Already Have an account?{" "}
        <Link to={"/login"} style={{ textDecoration: "underline", color:'orange'}}>
          Log In
        </Link>
      </div>
    </form>
    </div>
    </section>
  );
};

export default SignUp;
