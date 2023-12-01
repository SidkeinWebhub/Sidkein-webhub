import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import Banner1 from '../Banner1'
import Footer1 from '../Footer1'
import Loading from '../Loading'
import WhyChooseUs from '../WhyChooseUs'
import About from '../About'
import Services from '../Services'
import Contact from '../Contact'
import Particle from '../Particle'
import Skills from '../Skills'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Particle/>
        <Banner1/>
        <Loading/>
        <Services/>
        <About/>
        <WhyChooseUs/>
        <Contact/>
        <Skills/>
        <Footer1/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default HomePage
