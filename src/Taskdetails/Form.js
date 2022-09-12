import React, { useState } from 'react'

const Form = ({onsubmit}) => {
  const [newtask,setNewtask]=useState('')
  return (
    <div>
      
      <input type="text" className="form-control add-task" placeholder="new Task" 
      value={newtask}
      onChange={(e)=>{setNewtask(e.target.value);}}
      onKeyDown={(e)=>{if(e.key==='Enter'&& newtask.length>0)
      {onsubmit(newtask);setNewtask('');}}}/>
    </div>
  )
}

export default Form