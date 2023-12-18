import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h2
            initial={{y:'2rem',opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:2,type:"spring"}}>
              Prepaid Meter
              <br /> Recharging
              <br />
              System
            </motion.h2>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
            Recharging your power can be done digitally and instantly.
            </span>
            <span className="secondaryText">
            Saves cost on manual metering, billing and collection
            </span>
          </div>
          <div className="flexColStart">
            <Link to={"/recharge"}>
              <button className="button">Recharge Your Meter</button>
            </Link>
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
        <div className="flexCenter hero-right">
          <motion.div initial={{x:'7rem',opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:2,type:"spring"}}className="image-container">
            <img src="./robot.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
