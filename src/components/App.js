import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import ForgotPassword from "./ForgotPassword";
import Recharge from "../Dashboard Comp 2/Recharge/Recharge";
import Transactions from "../Dashboard Comp 2/Transactions/Transactions";
import About from "../Dashboard Comp 2/About/About";

function App() {
  return (
    <>
    <Router>
    <AuthProvider>
      <Routes>
      <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/update-profile" element={<UpdateProfile/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/recharge" element={<Recharge/>}/>
      <Route path="/transactions" element={<Transactions/>}/>
      <Route path="/about" element={<About/>}/>
      
      </Routes>
    </AuthProvider>
    </Router> 
    </>
  );
}

export default App;
