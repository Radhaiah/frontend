import React from 'react'

const Forgetpassword = () => {
  return (
    <div className="container d-flex p-2 float-center" >
    <form>
  <div className="form-group ">
    <label for="exampleInputEmail1 ">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">Please enter your email</small>
  </div>
  <button type="submit" className="btn btn-primary" >Next</button>
  </form>
    </div>
  )
}

export default Forgetpassword