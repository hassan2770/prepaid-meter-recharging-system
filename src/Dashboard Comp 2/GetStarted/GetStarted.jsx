import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Contact us</span>
          <span className="secondaryText">
            Facing an issue or having a problem using our <br/>web application? Contact us.
          </span>
          <button className="button">
            <a href="mailto:syed.hassanmustafa2070@gmail.com">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
