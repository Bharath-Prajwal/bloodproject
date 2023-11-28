import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from './auth'
 const Display = () => {
  const[list,setList]=useState([])
  const[name,setname]=useState('')
  const [popupBool,setPopupBool]=useState(false)
  const [formData,setFormData]=useState({
    name:'',
    age:'',
    email:'',
    password:'',
    address:'',
    phonenumber:'',
    location:'',
    bloodgroup:'',
    id:''
  });
  const auth=useAuth()
  useEffect(()=>{
    axios.get('http://localhost:3001/details')
  .then(res=>{setList(res.data)
  console.log(res.data)})
  .catch(err=>{console.log(err)})}
  ,[])
  const filteredData=list.filter(x=>auth.user===x.email)

  
  const deleteData=(id)=>{
    axios.delete(`http://localhost:3001/details/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert('Deleted')
    // window.location.reload()            //Automatically reloads the page
  }

  const  showPopup=(id,name,age,email,password,address,phonenumber,location,bloodgroup)=>{
    
      setPopupBool(true);
      setFormData({
      name,
      age,
      email,
      password,
      address,
      phonenumber,
      location,
      bloodgroup,
      id
    });
  };

  const updateData=(e)=>{
    const{id,name,age,email,password,address,phonenumber,location,bloodgroup}=formData;
    axios.put(`http://localhost:3001/details/${id}`,{
      name:name,
      age:age,
      email:email,
      password:password,
      address:address,
      phonenumber:phonenumber,
      location:location,
      bloodgroup:bloodgroup,
    })
    
    .then(res=>{
      console.log(res)
      setPopupBool(false)
      console.log(formData)
      
    })
    .catch(err=>{
      console.log(err)})
      
      e.preventDefault()
  }

  const cancel=(e)=>{
    setPopupBool(false)
     e.preventDefault()
  }

  


  return (
      <div>
        <table className='emp-table'>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              
              <th>email</th>
              <th>password</th>
              <th>address</th>
              <th>phonenumber</th>
              <th>location</th>
              <th>bloodgroup</th>
              
            </tr>
          </thead>
          <tbody>
            
            {filteredData.map((x)=>(<>
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.age}</td>
              
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.address}</td>
              <td>{x.phonenumber}</td>
              <td>{x.location}</td>
              <td>{x.bloodgroup}</td>
              
              <td><button onClick={()=>showPopup(x._id,x.name,x.age,x.email,x.password,x.address,x.phonenumber,x.location,x.bloodgroup)}>Update</button>
                <button onClick={()=>deleteData(x._id)}>Delete</button></td>
                                       
            </tr>
            </>))}
            
          </tbody>
        </table>

        {popupBool?<>
        <div className='popup'>
          <form className='form-update'>
            <button className='popup-cancel' onClick={cancel}>X</button>
           
            <label>Name</label>
            <input value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/><br></br>
            <label>Age</label>
            <input value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}/><br></br>
           <label>Email</label>
           <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/><br></br>
           
           <label>Password</label>
            <input value={formData.password}onChange={(e)=>setFormData({...formData,password:e.target.value})} /><br></br>

            <label>Address</label>
           <textarea value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})}/><br></br>

            <label>Mobile</label>
            <input value={formData.phonenumber} onChange={(e)=>setFormData({...formData,phonenumber:e.target.value})} /><br></br>
         

          <label>Location</label>
            <select value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})}>
                <option>select location</option>
                <option>Kurnool</option>
                <option>Nandyal</option>
                <option>Vijayawada</option>
                <option>Hyderabad</option>
            </select>
            <label>Blood Group</label>
            <select value={formData.bloodgroup} onChange={(e)=>setFormData({...formData,bloodgroup:e.target.value})}>
              <option>select bloodgroup</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
            </select>
            <button onClick={updateData}>Update</button>
          </form>
        </div>
        </>:""}
       
        
       
        <br></br>
        <br></br>
       
        
      </div>
    )
  }
export default Display