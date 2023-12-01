import React from 'react'
import './css/whyChooseUs.css'

function WhyChooseUs() {
  return (
    <div className="container choose">
        <div className='row '>
            <center className='chooseH1'>
            <h1 >Why Choose Us</h1>
            </center>
            
            <div className="card-outer col-lg-3 col-md-3 col-sm-12 glassCard">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <h6 className='display-6 text-center'>Experience</h6>
                        <i className='text-center'>With years of experience in the web development industry, we've honed our skills to perfection. We've successfully executed a wide range of projects, each teaching us something valuable about the ever-evolving digital landscape.</i>
                    </div>
                </div>
            </div>
            <div className="card-outer col-lg-3 col-md-3 col-sm-12 ">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <h6 className='display-6 text-center'>Innovation</h6>
                        <i className='text-center'>We're not just followers of trends; we're trendsetters. We stay ahead of the curve in terms of technology and design, ensuring that your website is always modern and engaging.</i>
                    </div>
                </div>
            </div>
            <div className="card-outer col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <h6 className='display-6 text-center'>Quality</h6>
                        <i className='text-center'>Quality is at the core of everything we do. We don't believe in shortcuts or compromises. Your website deserves the best, and we're committed to delivering just that.</i>
                    </div>
                </div>
            </div>
            <div className="card-outer col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <h6 className='display-6 text-center'>Client-Centric</h6>
                        <i className='text-center'>At Sidkein WebHub, your success is our success. We approach every project with a client-centric mindset, ensuring that we're with you every step of the way. Your goals become our goals, and your vision becomes our mission.</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
