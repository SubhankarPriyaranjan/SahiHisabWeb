import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import NavBar from './Components/NavBar'
import AboutUs from './Components/Pages/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './Components/Pages/LogIn'

function App() {
  

  return (
    <Router>
      <NavBar />
      {/* <LogIn /> */}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} /> {/* Create a route for About Us */}
        <Route path="/home" element={<NavBar />} /> {/* Create a route for Home */}
        <Route path="/log-in" element={<LogIn />} /> {/*  Create a route for LogIn */}
      </Routes>
    </Router>
  )
}

export default App
