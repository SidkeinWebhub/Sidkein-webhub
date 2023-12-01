import React from 'react'
import { ParallaxBanner,ParallaxBannerLayer,ParallaxProvider } from 'react-scroll-parallax';
import './css/aboutMain.css'
import { NavLink, useNavigate } from 'react-router-dom'

function AboutMain() {
  return (
    <ParallaxProvider className="parallax">
      <ParallaxBanner  style={{ aspectRatio: '2 / 1'}} className="aspect-[2/1] parallax-banner" >
      <nav className='navbar navbar-expand-md navbar-dark '>
    <div className="container nav1">
        <NavLink to={`/`} className="navbar-brand1">
            {/* <span className="logo3"> */}
              <img src="/assets/logo/logo.svg" alt="" className='nav-img' height={150} width={300} />
            {/* </span> */}
        </NavLink>

        <button className="navbar-toggler nav2" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between nav3" id="menu">
            <ul className="navbar-nav navul">
                <li className="nav-item ">
                    {/* <NavLink to={`/`} className="nav-link">Home</NavLink> */} 
                </li>
            </ul>
            <ul className="navbar-nav align-items-start navul ms-5 ">
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

        <ParallaxBannerLayer  speed={-20} >
          <video src="assets/logo/aboutvideo.mp4" width="100%" height="80%"  autoPlay loop>
          </video>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className='parallax-layer' speed={-10}>
          <img src="assets/logo/logoabout.svg" alt="" /> 
        </ParallaxBannerLayer>
      </ParallaxBanner>
   </ParallaxProvider>
    
  )
}

export default AboutMain
