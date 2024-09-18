import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import AboutUs from './Components/Pages/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './Components/Pages/ContactUs'

function App() {
  

  return (
    <Router>
      <NavBar />
    
      <Routes>
        <Route path="/about-us" element={<AboutUs/>} /> {/* Create a route for About Us */}
        <Route path="/home" element={<NavBar />} /> {/* Create a route for Home */}
        <Route path="/contactus" element={<ContactUs />} /> {/* Create a route for ContactUs */}
      </Routes>
    </Router>
  )
}

export default App
