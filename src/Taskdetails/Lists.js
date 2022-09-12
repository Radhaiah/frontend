import React from 'react'
import List from './List'
const Lists = ({filtertask,onCheckHandler,deleteHandler}) => {
  return (
    <div className="todo-list">
      {
        filtertask.length > 0 ? filtertask.map((item)=>{
          return (<List key={item.id}
          taskname={item.taskname}
          done={item.done}
          id={item.id}
          onCheckHandler={onCheckHandler}
          deleteHandler={deleteHandler}/> )
        }):
        <div>No Tasks Todo</div>
      }
    </div>
  )
}

export default Lists