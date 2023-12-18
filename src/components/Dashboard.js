import Header from "../Dashboard Comp 2/Header/Header";
import "./App.css";
import { TaskProvider } from "../contexts/Dashboardcontext";
import Hero from "../Dashboard Comp 2/Hero/Hero";
import Value from "../Dashboard Comp 2/Value/Value";
import GetStarted from "../Dashboard Comp 2/GetStarted/GetStarted";
import Footer from "../Dashboard Comp 2/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <TaskProvider>
        <div className="App">
          <div>
            <div className="white-gradient" />
            <Header />
            <Hero />
          </div>
          <Value />
          <GetStarted />
          <Footer />
        </div>
      </TaskProvider>
    </>
  );
};

export default Dashboard;
