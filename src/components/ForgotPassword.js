import React, { useState } from 'react'
import { useRef } from 'react'
import {useAuth} from '../contexts/AuthContext'
import { Link} from 'react-router-dom'


const ForgotPassword = () => {
const emailRef =useRef()
const {resetPassword} = useAuth()
const [error,setError]=useState('')
const [message,setMessage]=useState('')
const [loading,setLoading]=useState(false)

async function handleSubmit(e){
    e.preventDefault()
    try{
      setMessage('')
      setError('')
      setLoading(true)
   await resetPassword(emailRef.current.value)
    setMessage('Please check your email for further instructions')
    }catch{
      setError('Failed to reset password')
    }
    setLoading(false)
  }
  return (
    <>
     <section className="login-wrapper">
      <div className="paddings innerWidth flexCenter login-container">
      <form className='signup-container' onSubmit={handleSubmit}>
      <h2 className='signup-header' style={{color:'orange'}}>Password Reset</h2>
      {error && <div className='error-msg'>{error}</div>}
      {message && <div className='success-msg'>{message}</div>}
      <div>
      <label>Email</label>
      </div>
      <input type='text' className='signup-input' required ref={emailRef}></input>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button disabled={loading} className='signup-button' type='submit'>Reset Password</button>
      </div>
      <div style={{textAlign:'center',marginTop:'20px'}}> 
            <Link to={'/login'} style={{textDecoration:"underline"}}>Log In</Link>
            </div>
      </form>
      </div>
      </section>
    </>
  )
}

export default ForgotPassword
