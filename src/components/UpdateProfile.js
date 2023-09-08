import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {
const emailRef=useRef()
const passwordConfirmRef=useRef()
const passwordRef=useRef()
const {currentUser,updateemail,updatepassword} = useAuth()
const [error,setError]=useState('')
const [loading,setLoading]=useState(false)
const navigate = useNavigate()
function handleSubmit(e){
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }
  const promises =[]
  setError('')
  setLoading(true)
  if(emailRef.current.value !== currentUser.email){
      promises.push(updateemail(emailRef.current.value))
  }
  if(passwordRef.current.value){
      promises.push(updatepassword(passwordRef.current.value))
  }
  
  Promise.all(promises).then(()=>{
      navigate('/profile')
  }).catch(()=>{
      setError('Failed to update account')
  }).finally(()=>{
      setLoading(false)
  })
  
  }
  return (
    <>
      <form className='signup-container' onSubmit={handleSubmit}>
      <h2 className='signup-header'>Update Profile</h2>
      {error && <div className='error-msg'>{error}</div>}
      <div>
      <label>Email</label>
      </div>
      <input type='text' className='signup-input' required ref={emailRef}></input>
      <div>
      <label>Password</label>
      </div>
      <input type='password' className='signup-input' ref={passwordRef} placeholder='Leave blank if you want the same password'></input>
      <div>
      <label>Confirm Password</label>
      </div>
      <input type='password' className='signup-input' ref={passwordConfirmRef} placeholder='Leave blank if you want the same password'></input>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button disabled={loading} className='signup-button' type='submit'>Update</button>
      </div>
      <div className=''> 
    <Link to={'/'} style={{display:'flex' , justifyContent:'center',marginTop:'20px'}}>Cancel</Link>
    </div>
      </form>
    </>
  )
}

export default UpdateProfile
