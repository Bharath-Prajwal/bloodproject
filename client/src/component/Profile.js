import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from './auth'
import axios from 'axios'
import Display from './display'


const Profile = () => {
  const auth=useAuth()
  const [post,setPost]=useState(null)
  const handlelogout=()=>{
    auth.logout()
  }


  useEffect(()=>{
    axios.get("http://localhost:3001/details")
    .then(res=>{
      setPost(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <h1>Welcome User!</h1><br></br>
      <Display/>
       <button onClick={handlelogout} className='profilelogout'>Logout</button>



    </div>
  )}
  export default Profile