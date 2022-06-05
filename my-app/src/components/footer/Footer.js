import React from 'react'
import StartButton from '../serviceButton/StartButton'
import './footer.css'
import logo from '../../assets/logo11.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
import {useRef, useEffect} from 'react'

function Footer() {
    useEffect(() => {
        Aos.init({
            once: true,
            delay: 100,
        });
    },[])

  return (
    <div className='footer'>'
        <div className='quote-wrapper' data-aos="zoom-in-up"  data-aos-duration="1500" data-aos-delay='600'>
            <h1>“We don’t just make toys but help you tell your story through every masterpiece”</h1>
            <StartButton></StartButton>
            <a href='#' className='getInTouch'>Get In Touch</a>
        </div>        

        <div className='info-wrapper'>
            <div className='col one' data-aos="fade-up"  data-aos-duration="1500" data-aos-delay='1400'>
                <h1>Newsletter</h1>
                <img src={logo}></img>
            </div>
            <div className='col two' data-aos="fade-up"  data-aos-duration="1500" data-aos-delay='1800'>
                <h1>Social Media</h1>
                <a href='#'>Facebook</a>
                <a href='#'>Youtube</a>
                <p>© 8K Creative 2022</p>
            </div>
            <div className='col three' data-aos="fade-up"  data-aos-duration="1500" data-aos-delay='2200'>
                <h1>Menu</h1>
                <a href='#'>Home page</a>
                <a href='#'>About</a>
                <a href='#'>Our service</a>
                <a href='#'>Our store</a>
                <a href='#'>Contact</a>
            </div>
            <div className='col four' data-aos="fade-up"  data-aos-duration="1500" data-aos-delay='2600'>
                <h1>Contact</h1>
                <p className='address'>E17 Rio Vista Road D1, Binh Long B,Thu Duc City, Viet Nam, 70000</p>
                <p className='tel'>+84 938 202 899</p>
                <p>direct@8kcreative.vn</p>
            </div>
        </div>
    </div>
  )
}

export default Footer