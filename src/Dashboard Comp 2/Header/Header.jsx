import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Log out");
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to={'/'}>
          <img
            src="./logo.png"
            alt="logo"
            width={70}
            style={{ borderRadius: "3rem", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
          />
        </Link>
        <div className="flexCenter h-menu">
          <Link to={"/recharge"}>Recharge Your Meter</Link>
          <Link to={"/transactions"}>Transaction Details</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/profile"}>
            <button className="button">Profile</button>
          </Link>

          <button className="button" onClick={handleLogOut}>
            Log out
          </button>
          {error && <div className="error-msg">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default Header;
