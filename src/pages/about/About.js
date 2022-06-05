import React from 'react'
import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import {motion} from 'framer-motion';
import {useRef, useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../../components/navbar/Navbar'

import poster from '../../assets/dragonposter.png'
import memberPic from '../../assets/Team 10.jpg'
import video from '../../assets/thanhgiong.mp4'
import trex from '../../assets/client-trex.jpg'

import "./about.css"
function About() {
      const myRef = useRef(null);
      const myRef2 = useRef(null);
      const myRef3 = useRef(null);
      const myRef4 = useRef(null);
        //Intersection Observer for section 1

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        const navbar = document.querySelector(".nav");
        if(entry.isIntersecting){
          navbar.classList.remove('black');         
        }
      }) 
      observer.observe(myRef.current);
      

    },[])

    //Intersection Observer for section 2


    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const navbar = document.querySelector(".nav");
      if(entry.isIntersecting){
        navbar.classList.add('black');
      }
    }) 
    observer.observe(myRef2.current);


    }, [])

    //Intersection Observer for section 3

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const navbar = document.querySelector(".nav");
    if(entry.isIntersecting){
      navbar.classList.add('black');
    }
    }) 
    observer.observe(myRef3.current);

    }, [])

    //Intersection Observer for section 4

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const navbar = document.querySelector(".nav");
    if(entry.isIntersecting){
      navbar.classList.remove('black');         
    }

    }) 
    observer.observe(myRef4.current);
    },[])

    //AOS
    useEffect(() => {
      Aos.init({
        once: true,
        delay: 100,
      });
    },[])


  return (
    
    <Fullpage>
        <Navbar></Navbar>
        <FullPageSections>
          <motion.div className='about' 
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 0.5}}}
          exit={{opacity: 0}}>
          
              <FullpageSection>
                <div className='first' >
                    <div data-aos='fade-left' data-aos-duration='1000' data-aos-delay='500' className='image-wrapper one'></div>
                    <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1000' className='image-wrapper two'></div>
                    <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1500' className='content'>
                      <h1>We are the toy maker and seller</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    
                    <div ref={myRef} className='first-dummy'></div>
                </div>
              </FullpageSection>
              <FullpageSection>
                <div className='second'>
                    <div className='image-wrapper'>
                      <img src={poster}></img>
                    </div>
                    <div className='content-wrapper'>
                      <h1>8K Creative is <br></br>a group of expertises</h1>
                      <h2>Foundation</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br></br> <br></br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br></br> <br></br>Many desktop publishing packages and web page editors now use.</p>
                    </div>
                    <div ref={myRef2} className='second-dummy'></div>
                </div>
              </FullpageSection>
              <FullpageSection>
                <div className='third'>
                    <div className='image-wrapper'>
                      <img src={memberPic}></img>
                    </div>
                    <h1>Our mission is about to make your dream<br></br> comes true...</h1>
                    <div className='content-wrapper'>
                      <h2>Mission to clients</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br></br><br></br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                      <br></br>
                      <h2>Mission to society</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br></br><br></br>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                    </div>
                    <div ref={myRef3} className='third-dummy'></div>
                </div>
              </FullpageSection>
              <FullpageSection>
                <div className='fourth'>
                    <div className='video-wrapper'>
                      {/* <video autoPlay loop muted>
                        <source src={video} type="video/mp4"></source>
                      </video> */}
                      
                    </div>
                    <div ref={myRef4} className='fourth-dummy'></div>
                </div>
              </FullpageSection>
          </motion.div>
        </FullPageSections>
    </Fullpage>
    
  )
}

export default About