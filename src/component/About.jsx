import React from 'react'
import './css/about.css'

function About() {
  return (
    <div className="container about">
        <div className="row">
            <center className='aboutH1'>
                <h1 > About Us</h1>
            </center>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="loader">
                    <p className="text">
                        {/* Sidkein WebHub... */}
                        <img src="/assets/images/blob (2).svg" alt="about image" height={'300px'}  width={'90%'}/>
                    </p>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 about-content'>
                
                <p className='aboutp'>Welcome to Sidkein WebHub, where we turn your digital dreams into reality. We're not just a web development company; we're your partners in crafting innovative web solutions. Founded with a passion for web excellence, Sidkein WebHub has evolved into a leading player in the digital industry.

                </p>
                <h3>Our Mission:</h3>
                <p className='aboutp'>Our mission is simple: to empower businesses and individuals with cutting-edge web solutions that inspire and deliver results. We believe that your online presence is your digital storefront, and it should be nothing less than extraordinary.</p>
            </div>
        </div>
    </div>
    
  
  )
}

export default About
