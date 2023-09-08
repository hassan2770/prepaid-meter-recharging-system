import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from 'firebase/auth';
const AuthContext=React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {
    const [currentUser,setcurrentUser]=useState()
    const [loading,setLoading]= useState(true)

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
      return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
      return signOut(auth)
    }
    function updateemail(email){
      return updateEmail(auth.currentUser,email)
    }
    function updatepassword(password){
      return updatePassword(auth.currentUser,password)
    }
    function resetPassword(email){
      return sendPasswordResetEmail(auth,email)
    }


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
         setcurrentUser(user)
           setLoading(false)
          
       })
       return unsubscribe
       },[])
  
       const value ={
        currentUser,
        signup,
        login,
        logout,
        updateemail,
        updatepassword,
        resetPassword
       }


  return (
    <AuthContext.Provider value={value} >
    {!loading && children}
  </AuthContext.Provider>
  )
}


