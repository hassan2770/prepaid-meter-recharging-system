import React from "react";
import Tasks from "../../Dashboard Components/Tasks"
import "swiper/css";
import "./Transactions.css";
import TransactionHeader from "../TransactionHeader/TransactionHeader"
import {  TaskProvider} from "../../contexts/Dashboardcontext";



const Transactions = () => {
  
  return (
    
    <TaskProvider>
        <TransactionHeader/>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Your</span>
            <span className="primaryText">Transactions</span>
          </div>
          <Tasks />
        </div>
      </section>
      </TaskProvider>
   
  );
};

export default Transactions;


