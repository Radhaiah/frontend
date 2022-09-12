import React from 'react'
import {useState} from 'react'
import Form from './Taskdetails/Form';
import Filter from './Taskdetails/Filter';
import Lists from './Taskdetails/Lists';
const Tasks = () => {
  const [filter,setFilter] = useState('');
  const [newid,setNewid] = useState('');
  const [task,setTask] = useState([
    {
        id:1,
        taskname: 'Task-1',
        done: true
  },
  {
    id:2,
    taskname: 'Task-2',
    done: true
},
{
  id:3,
  taskname: 'Task-3',
  done: false
},
{
  id:4,
  taskname: 'Task-4',
  done: false
}
]);
const formsubmit = (value) => {
  const newTask={
    id:newid,
  taskname: value,
  done: false
  }
  setTask([...task,newTask]);
  setNewid(newid+1);
  console.log(value,': newtask');
};
const onCheckHandler=((id,checked)=>{
  setTask(task.map((item)=>{return item.id===id?{...item,done:checked}:item;}))
});
const onFilterChange=(newvalue)=>{setFilter(newvalue);};
const filtertask=()=>{
  if(filter==="Active"){
    return task.filter(item=>item.done===false);
  }
  else if(filter==="Completed")
  {
    return task.filter(item=>item.done===true);
  }
  else
  return task;
}
const deleteHandler =(id)=>{setTask(task.filter(item=>item.id!==id));}
  return (
    <div className="container bg-warning p-5">
      <div className="col">
        <div className="col-md-12">
          <div className="card card-white bg-secondary">
            <div className="card-body">
              <Form onsubmit={formsubmit} task={task} setTask={setTask}/>
              <Filter onFilterChange={onFilterChange}/>
              <Lists filtertask={filtertask()} onCheckHandler={onCheckHandler} deleteHandler={deleteHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks