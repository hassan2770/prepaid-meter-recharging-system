import React, { useState } from "react";
import { useDash } from "../contexts/Dashboardcontext";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const AddForm = () => {
  const [name, setName] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  var date = new Date().toLocaleString();

  const { Addtasks } = useDash();
  const userId = auth.currentUser.uid;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === 0) {
      setError("Please enter a valid amount");
      setTimeout(() => setError(""), 2000);
      return;
    }
    Addtasks({ name, meterNumber, amount, userId, date });
    setMessage("Transaction Succesful");
    setTimeout(() => setMessage(""), 3000);
    setName("");
    setMeterNumber("");
    setAmount("");
  };
  return (
    <>
      <motion.form initial={{x:'7rem',opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:2,type:"spring"}} className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <header className="header">
            <h2>Recharge Your Meter</h2>
          </header>
          {error && <div className="error-msg">{error}</div>}
          {message && <div className="success-msg">{message}</div>}
          <br />
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Meter Number</label>
          <input
            type="text"
            placeholder="Meter Number"
            required
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            required
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          ></input>
        </div>
        <input className="btn btn-block" type="submit" value="Balance"></input>
      </motion.form>
      <Link to={"/transactions"} style={{display:'flex',justifyContent:'center',textDecoration:'underline'}}>Go to Transactions</Link>
    </>
  );
};

export default AddForm;
