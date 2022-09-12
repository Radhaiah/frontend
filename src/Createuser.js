import axios from 'axios';
import React, { useState } from 'react'
const CreateUser=()=> {
  const [users,setusers]=useState({
    firstname:"",
    lastname:"",
    email:"",
    mobile:"",
    password:"",
  });
  const handleusersChange=(e)=> {
   
    const name=e.target.name;
    const value=e.target.value;
    setusers((prevState)=>({...prevState,[name]:value}))
  }
  const handleCreateusers=async()=> {
    const userscreated=await axios.post('http://localhost:5000/createUser',users).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    if(userscreated){
    console.log('users created successfully');
    }
   console.log(users);

  }
  return (
    <>
     <h1>Create a new users<hr></hr></h1>
    <div className="container col-md-4 mx-auto m-0 border p-2 info">
  <div className="form-group">
    <input type="text" className="form-control" id="firstname" name="firstname" value={users.firstname} onChange={handleusersChange} placeholder='Enter Firstname'/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="lastname" name="lastname" value={users.lastname} onChange={handleusersChange} placeholder='Enter Lastname'/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="email" name="email" value={users.email} onChange={handleusersChange} placeholder='Enter email'/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="mobile" name="mobile" value={users.mobile} onChange={handleusersChange} placeholder='Enter Mobile number'/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="password" name="password" value={users.password} onChange={handleusersChange} placeholder='enter password'/>
  </div>
  <button type="submit" className="btn btn-info" onClick={()=>handleCreateusers()}>Create Account</button></div>
 </>
  )
}

export default CreateUser 