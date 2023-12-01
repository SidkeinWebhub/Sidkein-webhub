import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './css/navBar.css'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark '>
    <div className="container">
        <NavLink to={`/`} className="navbar-brand">
            <span className="logo"><img src="/assets/logo/logo.svg" alt="" className='bg-transparent' height={150} width={300} />
            </span>
        </NavLink>

        <button className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between " id="menu">
            <ul className="navbar-nav ">
                <li className="nav-item ">
                </li>
            </ul>
            <ul className="navbar-nav align-items-center ">
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/service`} className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar
