import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const AuthContext=React.createContext(null)
const AuthProvider=(props)=> {
  const [user,setUser]=useState(null)
  const [userlist,setUserlist]=useState([])
  const login=(user)=>{
    setUser(user)
  }
  useEffect(()=>{
     axios.get('http://localhost:3001/Details')
     .then(res=>{
      setUserlist(res.data)
     })
     .catch(err=>{
        console.log(err)
     })
  },[user])
  const logout=()=>{
    setUser(null)
  }
  
  
    return <AuthContext.Provider value={{user,login,logout,userlist}}> 
        {props.children}
    </AuthContext.Provider>
}
    const useAuth=()=>{
      return useContext(AuthContext)
    }
export{AuthProvider,useAuth}