import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left Side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={80} style={{ borderRadius: "3rem", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} />
          <span className="secondaryText">
            Our vision is to make peoples
            <br /> life easy and comfortable
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Visit us</span>
          <span className="secondaryText">145 Lahore, FL 5467, Pakistan</span>
          <div className="flexCenter f-menu">
            <Link to={'/recharge'}>Recharge your Meter</Link>
            <Link to={'/transactions'}>Transaction Details</Link>
            <Link to={'/about'}>About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
