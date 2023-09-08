import React, { useState } from 'react'
import { useDash } from '../contexts/Dashboardcontext'

const AddForm = () => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    const {Addtasks} = useDash()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text){
            alert('Please Add a task')
            return
        }
        Addtasks({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add task' value={text} onChange={(e)=> setText(e.target.value)}></input>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=> setDay(e.target.value)}></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} checked={reminder}></input>
      </div>
      <input className='btn btn-block' type='submit' value='Save Task'></input>
    </form>
  )
}

export default AddForm
