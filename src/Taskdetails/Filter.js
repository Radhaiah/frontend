import React from 'react'

const Filter = ({onFilterChange}) => {
  const filter=["All",'Active','Completed'];
  const clickHandler=(currentvalue) => {onFilterChange(currentvalue)}
  return (
    <div>
      <ul className="nav nav-pills todo-nav">
        {filter.map((item,index) =>{return (
          <li key={index} value={item} role='presentation' className="nav-item all-tasl active"
          onClick={()=>clickHandler(item)}
          
          >
            <a href="#" className="nav-link" style={{cursor: 'pointer'}}>{item}</a>
          </li>
        )})}
      </ul>
    </div>
  )
}

export default Filter