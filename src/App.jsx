import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Apps from './Pages/Apps'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Apps />
      <Contact />
      <Footer />
    </div>
  )
}

export default App