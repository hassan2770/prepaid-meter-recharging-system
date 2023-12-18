import React, { useState } from "react";
import '../TransactionHeader/TransactionHeader.css'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const TransactionHeader = () => {
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
    <section className="hhh-wrapper">
      <div className="flexCenter paddings innerWidth hhh-container">
        <img
          src="./logo.png"
          alt="logo"
          width={70}
          style={{ borderRadius: "3rem", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
        />

        <div className="flexCenter hhh-menu">
        <Link to={"/"}>Home</Link>
          <Link to={"/recharge"}>Recharge Your Meter</Link>
          <Link to={"/about"}>About Us</Link>
          <button className="button" onClick={handleLogOut}>
            Log out
          </button>
          {error && <div className="error-msg">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default TransactionHeader;
