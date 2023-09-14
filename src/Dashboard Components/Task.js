import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useDash } from '../contexts/Dashboardcontext'
const Task = ({task}) => {
const {deleteTasks,toggleReminder}=useDash()  
const handleClick =(id)=>{
    deleteTasks(id)
}

const handleDoubleClick =(id,reminder)=>{
toggleReminder(id,reminder)
}
  return (
    <div className={`task ${task.reminder ? 'reminder':'' }`} onDoubleClick={()=>handleDoubleClick(task.id,task.reminder)}>
      <h3>{task.text} <FaTimes style={{color:'red'}} onClick={()=>handleClick(task.id)}/></h3>
      <h4>{task.day}</h4>
    </div>
  )
}

export default Task
