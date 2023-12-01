import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/footer.css'

function Footer1() {
  return (
    
    <div className='wave'>
        <img src="/assets/logo/wave.svg" alt="Wave gif" />
        <div className="container footer-heading">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 footer-div">
              {/* <h1 className='logo2'>hi</h1> */}
              <img src="/assets/logo/logo.svg" alt="Logo" className='footer-img bg-transparent' width={300} height={150} />
              <p className='footer-p'>Thank you for visiting Sidkein WebHub, your trusted partner in crafting exceptional web solutions. Your success is our mission, and we look forward to being a part of your online growth.</p>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 footer-div footer-link">
              <h5 className='link-h'>Quick Links</h5>
              <ul className='link-ul'>
                <li>
                  <NavLink to={`/`} className="nav-link">Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/service`} className="nav-link">Services</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                </li>
                <li>
                  <NavLink to={`/contact`} className="nav-link">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 footer-div footer-link support-sec">
                
                    <h5 className='link-h link-hs '>Support</h5>
                    <div className='link-support'>
                      <span className='link-span'><i className="bi bi-telephone-fill  link-i"></i> 9597602979</span>
                      <br /><br />
                      <span className='link-span'><i className="bi bi-envelope-fill  link-i"></i> sidkeinwebhub@gmail.com</span>
                      <br /><br />
                      <span className='link-span'><i className="bi bi-geo-alt-fill  link-i"></i> Vadasery, Nagercoil</span>
                    </div>
                
            </div>
            <center className='social-link'>
              <span className='social-span'><NavLink to={"whatsapp://send?text=Hi!&phone=9597602979"} className="bi bi-whatsapp" ></NavLink></span>
              <span className='social-span'><NavLink to={"mailto:sidkeinwebhub@gmail.com"} className="bi bi-envelope-fill" ></NavLink></span>
              <span className='social-span'><NavLink to={"www.linkedin.com/in/sidkein-webhub-5604112a2"} className='bi bi-linkedin'></NavLink></span>
              <span className='social-span'><NavLink to={"https://www.facebook.com/profile.php?id=61553984105623&mibextid=LQQJ4d"} className='bi bi-facebook'></NavLink></span>
              <span className='social-span'><NavLink to={"https://instagram.com/sidkein_webhub?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"} className='bi bi-instagram'></NavLink></span>
              <span className='social-span'><NavLink to={"https://twitter.com/SidkeinWebhub"} className='bi bi-twitter-x'></NavLink></span>
              <span className='social-span'><h6 className=' copyright'>Copyright © 2023 Sidkein Webhub. All Rights Reserved.</h6></span>
          </center>
        </div>
      </div>
        
    </div>   
   
  )
}

export default Footer1
