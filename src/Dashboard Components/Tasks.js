import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useDash } from "../contexts/Dashboardcontext";
import { sliderSettings } from "../utils/common";
import { FaTimes } from "react-icons/fa";
import { CSVLink } from "react-csv";

const Tasks = () => {
  const { tasks } = useDash();
  const { deleteTasks } = useDash();
  const headers = [
    {label:'Name',key:'name'},
    {label:'Meter Number',key:'meterNumber'},
    {label:'Amount',key:'amount'},
    {label:'Recharged At',key:'date'},
  ]
  const csv ={
    filename:'Transaction report',
    headers:headers,
    data:tasks
  }
  const handleClick = (id) => {
    deleteTasks(id);
  };

  return (
    <div>
      {tasks.length>0? <Swiper {...sliderSettings} >
        <SliderButtons />
        {tasks.map((task) => {
          return (
            <SwiperSlide key={task.id} >
              <div className="slider r-card">
                <FaTimes
                  style={{
                    color: "red",
                    marginLeft: "28rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(task.id)}
                ></FaTimes>
                <h2
                  style={{
                    textAlign: "center",
                    margin: "30px",
                    color: "green",
                  }}
                >
                  Transaction Receipt
                </h2>
                <p style={{ textAlign: "center" }}>
                  ---------------------------------------------------------------------------
                </p>
                <div className="receipt">
                  <h4>Full Name: </h4>
                  {task.name}
                </div>
                <div className="receipt">
                  <h4>Meter Number: </h4>
                  {task.meterNumber}
                </div>
                <div className="receipt">
                  <h4>Amount:</h4> {task.amount} Rs
                </div>
                <div className="receipt">
                  <h4>Recharged at: </h4>
                  {task.date}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>:'No Transactions Yet'}
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>
      <button className="button" style={{display:'flex'}}>
      <CSVLink {...csv} >Transaction Report</CSVLink><img
            src="./icon.png"
            alt="logo"
            width={20}
            style={{marginLeft:'1rem'}}
          /></button></div>
    </div>
  );
};

export default Tasks;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
