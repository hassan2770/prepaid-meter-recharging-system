import React, { useContext, useEffect, useState } from "react";

const DashboardContext=React.createContext();
export function useDash(){
    return useContext(DashboardContext)
}


export const TaskProvider = ({children}) => {


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
  const getTasks = async ()=>{
      const tasksFromServer = await fetchtasks()
      setTasks(tasksFromServer)
    }
    getTasks()

},[])

//Fetch Tasks
const fetchtasks =async ()=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

//Fetch Task
const fetchtask = async (id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}

const Addtasks=async(task)=>{
  const res = await fetch('http://localhost:5000/tasks',{
    method: 'POST',
    headers:{'Content-type':'application/json'},
    body: JSON.stringify(task)  })
    const data = await res.json()
    setTasks([...tasks,data])

// const id = Math.floor(Math.random()*1000 + 1)
//   const newTask = {id,...task}
//   setTasks([...tasks,newTask])
}
const deleteTasks = async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'Delete'
  })
    setTasks(tasks.filter((currenTasks)=> currenTasks.id !== id))
}
const toggleReminder=async (id)=>{
  const tasktotoggle = await fetchtask(id)
  const updTask = {...tasktotoggle,reminder:!tasktotoggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PUT',
    headers:{'Content-type':'application/json'},
    body: JSON.stringify(updTask)  })
    const data = await res.json()
  setTasks(tasks.map((task)=> task.id===id?{...task,reminder:data.reminder}:task ))
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

