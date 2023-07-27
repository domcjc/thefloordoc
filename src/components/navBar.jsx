import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Services from '../pages/services'

const navBar = () => {
  return (
    <div >    
<nav >
      <ul class="font-semibold  flex text-xl justify-center p-8 mt-4  space-x-16 md:space-x-36 lg:space-x-56 2xl:space-x-80">
        <li>
          <Link to="/" class=" flex  text-gray-900 rounded hover:text-yellow-600">HOME</Link>
          </li>
        <li>
          <Link to="/services" class="flex text-gray-900 rounded hover:text-yellow-600">SERVICES</Link>
        </li>
        <li>
          <Link to="/about" class="flex text-gray-900 rounded hover:text-yellow-600">ABOUT</Link>
        </li>
          <li>
            <Link to="/contact" class="flex text-gray-900 rounded  hover:text-yellow-600">CONTACT</Link>
          
        </li>

      </ul>

</nav>



    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default navBar