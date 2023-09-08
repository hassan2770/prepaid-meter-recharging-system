import React from 'react'
import {  Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const PrivateRoute = ({children}) => {
    const { currentUser } = useAuth();

 
  return (
    <div>
        {currentUser ? children : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRoute
