import AddForm from "../../Dashboard Components/AddForm";
import { motion } from "framer-motion";
import { TaskProvider } from "../../contexts/Dashboardcontext";
import "./Recharge.css";
import RechargeHeader from "../RechargeHeader/RechargeHeader";

function Recharge() {
  return (
    <>
      <RechargeHeader/>
      <TaskProvider>
        <section className="recharge-wrapper">
          <div className="paddings innerWidth flexCenter recharge-container">
            {/* left side */}
            <div className="flexCenter">
              <motion.div initial={{y:'7rem',opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:2,type:"spring"}} className="image-containerr">
                <img src="./recharge.png" alt="" />
              </motion.div>
            </div>
            {/* right side */}
            <div className="paddings innerWidth container">
              <AddForm />
              
            </div>
          </div>
        </section>
      </TaskProvider>
    </>
  );
}

export default Recharge;
