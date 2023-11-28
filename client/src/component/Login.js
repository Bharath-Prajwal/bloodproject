import React, { useState } from 'react'
import {useAuth} from './auth'
import {useNavigate} from 'react-router-dom'
// import {Signup} from './Signup'
const Login = () => {
  const auth=useAuth()
  const navigate=useNavigate()
 const [email,setEmail]=useState('')
 const [pass,setPass]=useState('')
 const[lis,setLis]=useState(true)
 const change=(event)=>{
     setEmail(event.target.value)
 }
 const change1=(event)=>{
  setPass(event.target.value)
}
 const handlelogin=(event)=>{
  console.log(auth.userlist)
  auth.userlist.map(x=>{
    if(x.email===email && x.password===pass){
      auth.login(email)
      navigate('/loginsuccess')
      // navigate('/bmicalculator')
      
      setLis(true)
       

    }
    else{
      setLis(false)
    }
    event.preventDefault()     //It will not refresh the page   
    
  })
 
 }
  return (
    <div>
        <form onSubmit={handlelogin} className='login-form'>
        <h1>LOGIN</h1><br></br>
        <label>Email</label><br></br>
        <input type='email' value={email} onChange={change}  required/> <br></br>
        <label>Password</label><br></br>
        <input type='password' value={pass} onChange={change1}  required/><br></br><br></br>
        <button type='submit'>Login</button><br></br>
        {!lis?<p style={{color:'olive',fontSize:'27px'}}>Invalid user and password</p>:''}
        <h4>If you don't have account</h4>
        <a href='/signup'>Signup</a>
        </form>
        <br></br> 
        

    </div>
  )
}
export default Login