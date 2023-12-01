import React, { useState } from 'react'
import './css/contact.css'
import { toast, ToastContainer  } from 'react-toastify'
import axios from 'axios'

function Contact() {
    const [user,setUser] = useState({
        userName: "",
        email: "",
        phone: "",
        message: ""
    });
    const readValue = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://webhub-av0p.onrender.com/api/v1/create`, user)

            await axios
                .post(
                    `https://webhub-av0p.onrender.com/api/v1/sendmailUser`,
                    { email: user.email }
                )
            await axios
                .post(`https://webhub-av0p.onrender.com/api/v1/sendmail`, {
                  userName: user.userName,
                  email: user.email,
                  phone: user.phone,
                  message: user.message
                })
                .then(res => {
                    toast.success("Message send  successfully!")
                    // navigate(`/`)
                }).catch(err => toast.error(err.response.data.msg))
        } catch (err) {
            toast.error(err.message)
        }
    }
  return (
    <>
    <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    <div className="contact-form--1">
        <center><h1 className="title">Contact Us</h1></center>

        <div className="contact container">
            <div className="row row--35 align-items-start">
                <div className="col-lg-6 col-sm-12  p-5 pl-5 mt-5">
                    <div className="section-title text-center mb--50 ">
                        <p className="description text-justify text-center">Got a project in mind? </p>
                        <hr />
                        <p className="description text-justify text-center">Our experts are ready to make it happen!</p>
                    </div>
                    <img src="/assets/images/contact.svg" height={"70%"} width={"70%"} alt="" />
                </div>
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="form-wrapper">
                    <form onSubmit={submitHandler}>
                        <fieldset>
                            <div className="form-group m-5">
                                <label htmlFor="text">Name</label>
                                <input type="text" name="userName" id="userName"
                                value={user.userName} onChange={readValue} 
                                className="form-control" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group m-5">
                                <label htmlFor="text">Email</label>
                                <input type="text" name="email" id="email"
                                value={user.email} onChange={readValue}  className="form-control" placeholder="Your Email" required/>
                            </div>
                            <div className="form-group m-5">
                                <label htmlFor="text">Phone Number</label>
                                <input type="mobile" name="phone" id="phone"
                                value={user.phone} onChange={readValue}  className="form-control" placeholder="Phone Number" required/>
                            </div>
                            <div className="form-group m-5">
                                <label htmlFor="text">Message</label>
                                <input type="message" name="message" id="message"
                                value={user.message} onChange={readValue}  
                                placeholder="Your Message" className="form-control"  required/>
                            </div>
                            <div className="form-group m-5">
                                <input type="submit" value="Submit" className="btn text-white btn-secondary"/>
                            </div>
                        </fieldset>
                    </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
