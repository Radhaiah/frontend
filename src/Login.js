import React from 'react'



const Login = () => {
  return (
    <div className="container " >
    <div className="card d-flex p-2 float-center border border">
    <form>
  <div className="form-group ">
    <label for="exampleInputEmail1 ">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"/>
  </div>
  <div className="form-group">
    <a href="ForgetPassword" >Forget Password</a>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>
   </div>
  )
}

export default Login