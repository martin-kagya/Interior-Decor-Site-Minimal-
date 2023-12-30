import { useEffect, useState } from 'react'
import Home from './Components/Home'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Navbar from './Components/Navbar'
import { MdKeyboardArrowUp } from "react-icons/md";
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import './App.css'
import Contact from './Components/Contact'



function App() {

const [visible, setisVisible] = useState(false);

function handleScroll(){
  const amountScrolled = document.documentElement.scrollTop;
  setisVisible (amountScrolled > 100)
}

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

useEffect (() => {
  window.addEventListener("scroll", handleScroll)
  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])
  return (
    <>
    <div className='container'>
      <Navbar />
      <Home />
      <About />
      <Testimonial />
      <Gallery />
      <Services />
      <Contact />
      <div className={`scroll-to-top ${setisVisible ? 'visible' : ''}`} onClick={scroll}><MdKeyboardArrowUp size={25}/></div>
    </div>
    </>
  )
}

export default App
