import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import ContactPage from './Pages/ContactPage'
import ScrollToTop from './ScrollToTop'

function MainRoute() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<HomePage/>} />
        <Route path={`/about`} element={<AboutPage/>} />
        <Route path={`/service`} element={<ServicePage/>} />
        <Route path={`/contact`} element={<ContactPage/>} />
      </Routes>
      <ScrollToTop/>
    </Router>
    
  )
}

export default MainRoute
