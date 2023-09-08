import React, { useState } from 'react'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Dashboard Components/Header'
import Tasks from '../Dashboard Components/Tasks'
import {TaskProvider} from '../contexts/Dashboardcontext'
import AddForm from '../Dashboard Components/AddForm'

const Dashboard = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()
    const[error,setError]=useState('')
    async function handleLogOut(){

        setError('')
        try{
        await logout()
        navigate('/login')
        } catch{
          setError('Failed to Log out')
        }
        }
const [showAddButton,setShowAddButton]=useState(false)
  return (
    <>
    <div className='dashboard-container'>
    <header className='dashboard-header'>
        {error && <div className='error-msg'>{error}</div>}
        <Link to={'/profile'} className='dashboard-button'>Profile</Link>
        <button className='dashboard-button' onClick={handleLogOut}>Log out</button>
    </header>
    <div className='container'>
    <TaskProvider>
    <Header onAdd={()=> setShowAddButton(!showAddButton)} showAdd={showAddButton}/>
    {showAddButton && <AddForm />}
    <Tasks />
    </TaskProvider>
    </div>
    </div>
    </>
  )
}

export default Dashboard
