import React from 'react'

const List = ({taskname,done,id,onCheckHandler,deleteHandler}) => {
  return (
    <div className="container">
    <div className={"todo-item"+(done ? "complete":'')}>
    <div className="checker ">
        <span className="container">
            <input type="checkbox" checked={done} onChange={e=>onCheckHandler(id,e.target.checked)} />
        </span>
    </div>
    <span>{taskname}</span>
    <button className="btn btn-primary" onClick={()=>deleteHandler(id)} style={{float: 'right'}}>Delete</button>
    </div></div>
  )
}

export default List