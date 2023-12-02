import React from 'react'
import './css/banner1.css'
import { NavLink } from 'react-router-dom'

function Banner1() {
  return (
    <div className='banner'>
      <img src="/assets/images/about4.png"  width={"60%"} alt="" />
       <div className='banner-heading justify-content'>
        <h3 className=' display-6'>Welcome to Sidkein WebHub</h3>
        <i className='justify-content'>At Sidkein WebHub, we're not just another web development company; we're your trusted partners in turning your digital dreams into reality. With our expert team, cutting-edge technology, and creative prowess, we design, develop, and optimize websites that stand out in the digital landscape. </i>
        <br />
        <NavLink to={`/contact`} className='nav-link'><a href="/contact">
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Get Started&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;Get Started&nbsp;</span>
          </button>
        </a> </NavLink>
        
       </div>
       
    </div>
  )
}

export default Banner1
