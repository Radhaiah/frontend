import axios from 'axios';
import React, { useState } from 'react';
const Dayplan=()=> {
  // creating a state varieble for count and plan
  
  const [plan,setPlan]=useState({
    name:"",
    work:"",
    completion:""
    
  });
  // creating a event to getting out put when there is change
  const handleplanChange=(e)=> {
   
    const name=e.target.name;
    const value=e.target.value;
    setPlan((prevState)=>({...prevState,[name]:value}))
  }
  const handleCreateplan=async()=> {
    const plancreated=await axios.post('http://localhost:5000/Dayplan',plan).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    if(plancreated){
    console.log('plan added successfully');
    
    }
   console.log(plan);
  }
  return (
    <>
     <h1>Create a new Day plan<hr></hr></h1>
    <div className="container col-md-4 mx-auto m-0 border p-2 info bg-secondary">
  <div className="form-group">
    <input type="text" className="form-control" id="name" name="name" value={plan.name} onChange={handleplanChange} placeholder='Enter name'/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="work" name="work" value={plan.work} onChange={handleplanChange} placeholder='Enter Work'/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="completion" name="completion" value={plan.completion} onChange={handleplanChange} placeholder='Enter date to complete'/>
  </div>
  <button type="submit" className="btn btn-info" onClick={()=>handleCreateplan()}>Create My Day Plan</button></div><br></br>
<div className="container col-md-4 mx-auto m-0 border p-2 info">
  <div className="card bg-success">
    <h1>{plan.name}</h1>
    <h5>{plan.work}</h5>
    <h6>{plan.completion}</h6>
  </div></div>
 </>
  )
}

export default Dayplan