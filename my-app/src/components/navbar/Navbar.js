import React from 'react'
import StartButton from '../serviceButton/StartButton'
import { Link } from 'react-router-dom'
import {useEffect} from 'react'
import logo from '../../assets/logo11.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './navbar.css'
function Navbar() {
  return (
    <div className='nav'>
                <div className='logo'>
                  <Link to='/'>
                    <img src={logo} alt =''></img>
                  </Link>       
                </div>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><a href='#'>Gallery</a></li>
                  <li><a href='#'>Service</a></li>
                  <li><StartButton></StartButton></li>
                </ul>
            </div>  
  )
}

export default Navbar