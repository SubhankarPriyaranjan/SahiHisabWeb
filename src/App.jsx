import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import AboutUs from './Components/Pages/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <Router>
      <NavBar />
    
      <Routes>
        <Route path="/about-us" element={<AboutUs />} /> {/* Create a route for About Us */}
        <Route path="/home" element={<NavBar />} /> {/* Create a route for Home */}
      </Routes>
    </Router>
  )
}

export default App
