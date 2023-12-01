import React from 'react'
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import './css/contactbody.css'

function ContactBody() {
  return (  
    <div className="container">
        <div className="row">    
            <div className="card-outer1 col-lg-4 col-md-4 col-sm-12 glassCard">
                <div className="card1">
                    
                    <div className="card-inner1">
                        <h6 className='display-6 text-center'>Phone Number</h6>
                        <i className='text-center'>+91 9597602979</i>
                    </div>
                </div>
            </div>
            
            <div className="card-outer1 col-lg-4 col-md-4 col-sm-12 glassCard">
                <div className="card1">
                    
                    <div className="card-inner1">
                        <h6 className='display-6 text-center'>Email Address</h6>
                        <i className='text-center'>sidkeinwebhub@gmail.com</i>
                    </div>
                </div>
            </div>
            <div className="card-outer1 col-lg-4 col-md-4 col-sm-12 glassCard">
                <div className="card1">
                    
                    <div className="card-inner1">
                        <h6 className='display-6 text-center'>Location</h6>
                        <i className='text-center'>Vadasery, Nagercoil</i>
                    </div>
                </div>
            </div>

        </div>
    </div>

  )
}

export default ContactBody
