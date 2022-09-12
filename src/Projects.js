import React from 'react'

const Projects = () => {
  const project=[
    {
      id:1,
      title: 'Project 1',
      status: 50
    }
  ]
    return (
    <div className="card">
    
    <div className="progress m-5">
    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">10</div>
  </div>
  <div className="progress m-5">
    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow={project.status} aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress m-5">
    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress m-5">
    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <div className="progress m-5">
    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <button type="submit" className="btn btn-primary">Add Project</button>
  </div>
  )
}

export default Projects