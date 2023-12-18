import React from "react";
import "./About.css";
import CountUp from "react-countup";
import Header from "../Header/Header";
const About = () => {
  return (
    <section className="about-wrapper">
      <Header />
      <div className="paddings innerWidth flexCenter about-container">
        {/* left side */}
        <div className="flexColStart about-left">
          <div className="about-title">
            <div className="orange-circle" />
            <h2>About Us</h2>
          </div>
          <div className="flexColStart about-des">
            <span className="secondaryText">
              Our prepaid meter recharging system is designed<br/>  to offer you
              convenience, transparency, and  control<br/>  over your electricity
              consumption. We provide a user-friendly<br/>  platform that allows you
              to easily top up your prepaid meters<br/>  from the comfort of your home
              or office, 24/7. Say goodbye<br/>  to the long queues at utility offices
              and the inconvenience of<br/>  running out of electricity unexpectedly.
            </span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1850} end={2000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter about-right">
          <div className="image-container">
            <img src="./grid.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
