import React from 'react'
import {Link} from 'react-router-dom'
 const Header = () => {
  return (
    <div className="header bg-info">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img src="https://www.scoro.com/wp-content/uploads/2019/09/logo_scoro@2x.png" alt="" width="50" height="20"/>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {/* forming all the header components in a list */}
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to={'/Home'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to={'/Calender'} className="nav-link" >Calender</Link>
      </li>
      <li className="nav-item">
        <Link to={'/Projects'} className="nav-link" >Projects</Link>
      </li>
      <li className="nav-item">
        <Link to={'/Tasks'} className="nav-link">Tasks</Link>
      </li>
      <li className="nav-item">
        <Link to={'/DayPlan'} className="nav-link">DayPlan</Link>
      </li>
    </ul>
    <div className="nav-item active" id="login">
        <Link to={'/Remainder'} className="nav-link ">
        <button type="button" class="btn btn-primary">
  Remainder <span class="badge badge-light">4</span>
</button>
        </Link>
      </div>
    <div className="nav-item active px-5" id="login">
        <Link to={'/Createuser'} className="nav-link btn btn-warning">Try Free<i class="far fa-user-circle"></i><span className="sr-only">(current)</span></Link>
      </div>
    <div className="nav-item active" id="login">
        <Link to={'/Login'} className="nav-link btn btn-primary">Login <i class="fas fa-sign-in-alt"></i><span className="sr-only">(current)</span></Link>
      </div>
  </div>
</nav>
    </div>
  )
}
export default Header;