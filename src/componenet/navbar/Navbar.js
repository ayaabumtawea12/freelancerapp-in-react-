import React, { Component } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default class 
 extends Component {
  render() {
    return (
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-4">
  <div className="container">
  <Link class="navbar-brand fs-1 text-light " to="/">start bootstrap</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="menu text-uppercase text-white">menu</span>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  text-white"  to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
  }
}

