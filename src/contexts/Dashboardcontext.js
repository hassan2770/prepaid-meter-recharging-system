import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {auth} from '../firebase'
import 'firebase/firestore';
const DashboardContext=React.createContext();
export function useDash(){
    return useContext(DashboardContext)
}


export const TaskProvider = ({children}) => {
//Geting the collection from firestore and storing it in userCollectionRef 
const usersCollectionRef = collection(db,"Users")
const user = auth.currentUser;
const [tasks,setTasks]= useState([]

// For Local Storage (To Retrieve Data)  
//   ()=>{
//   const localValue = localStorage.getItem('ITEMS')
//   if(localValue==null) return []
//   return JSON.parse(localValue)
// }
)


//For Local Storage
// useEffect(()=>{
//   localStorage.setItem('ITEMS',JSON.stringify(tasks))
//   },[tasks])

//For JSON Server
useEffect(()=>{
  //Getting tasks from JSON file
  // const getTasks = async ()=>{
  //     const tasksFromServer = await fetchtasks()
  //     setTasks(tasksFromServer)
  //   }
  //   getTasks()

//Getting tasks from Firebase firestore
const getUsers = async ()=>{
//Getting the user specific task
     const q =query(collection(db,"Users"), where("userId", "==", user.uid))
     const data = await getDocs(q)
     
      setTasks(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }
   getUsers()

  
},[user,usersCollectionRef])

//Fetch Tasks from JSON file
// const fetchtasks =async ()=>{
//   const res = await fetch('http://localhost:5000/tasks')
//   const data = await res.json()
//   return data
// }

//Fetch a single Task from JSON file
// const fetchtask = async (id)=>{
//   const res = await fetch(`http://localhost:5000/tasks/${id}`)
//   const data = await res.json()
//   return data
// }

const Addtasks=async(task)=>{

await addDoc(usersCollectionRef, task)

//Add task to JSON file  
  // const res = await fetch('http://localhost:5000/tasks',{
  //   method: 'POST',
  //   headers:{'Content-type':'application/json'},
  //   body: JSON.stringify(task)  })
  //   const data = await res.json()
  //   setTasks([...tasks,data])

 
//To show tasks in UI
// const id = Math.floor(Math.random()*1000 + 1)
//   const newTask = {id,...task}
//   setTasks([...tasks,newTask])
}
const deleteTasks = async(id)=>{
  const userID= doc(db,"Users",id)
  await deleteDoc(userID)
  //Delete tasks from JSON file
  // await fetch(`http://localhost:5000/tasks/${id}`,{
  //   method:'Delete'
  // })

 //Delete tasks from UI 
    //setTasks(tasks.filter((currenTasks)=> currenTasks.id !== id))
}
const toggleReminder=async (id,reminder)=>{
  const userID= doc(db,"Users",id)
  const updateToggle = {reminder : !reminder}
  await updateDoc(userID,updateToggle)
//Update reminder in JSON file 
  // const tasktotoggle = await fetchtask(id)
  // const updTask = {...tasktotoggle,reminder:!tasktotoggle.reminder}
  // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  //   method: 'PUT',
  //   headers:{'Content-type':'application/json'},
  //   body: JSON.stringify(updTask)  })
  //   const data = await res.json()
  // setTasks(tasks.map((task)=> task.id===id?{...task,reminder:data.reminder}:task ))

//Update reminder in UI  
 // setTasks(tasks.map((task)=> task.id===id?{...task,reminder:task.reminder}:task ))
}

const value = {
    tasks,
    deleteTasks,
    toggleReminder,
    Addtasks,

}

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}

