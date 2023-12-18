import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Profile = () => {
const{currentUser}=useAuth()

  return (
    <>
     <section className="login-wrapper">
      <div className="paddings innerWidth flexCenter login-container">
    <form className='signup-container'>
    <h2 className='signup-header' style={{color:'orange'}}>Profile</h2>
    <strong>Email: </strong>{currentUser.email}<br></br>
    <Link to={'/update-profile'} className='dashboard-button' style={{display:'flex',justifyContent:'center'}}>Update Profile</Link>
    <div> 
    <Link to={'/'} style={{display:'flex' , justifyContent:'center', textDecoration:"underline"}}>Cancel</Link>
    </div>
    </form>
    </div>
    </section>
    
  </>
  )
}

export default Profile
