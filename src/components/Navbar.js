import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} >
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/" >{props.title}</Link> */}
      <a className="navbar-brand" href="/" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
            {/* <a className="nav-link" href="/about">{props.about}</a> */}
          </li>
        </ul>


<div className="form-check form-switch mx-3" style={{cursor:"pointer"}}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleBgBlue} style={{cursor:"pointer"}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Blue</label>
</div>


   <div className="form-check form-switch mx-3" style={{cursor:"pointer"}}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} style={{cursor:"pointer"}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Dark</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};

Navbar.defaultProps={
  title:"textUtils",
  about:"About Us"
}
