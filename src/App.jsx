import { useState } from 'react'
import Home from './Components/Home'
import Gallery from './Components/gallery'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import './App.css'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <div className='container'>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Testimonial />
    </div>
    </>
  )
}

export default App