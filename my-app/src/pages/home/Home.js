import React from 'react'
import "./home.css"
import LearnButton from '../../components/learnButton/LearnButton'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useRef, useEffect} from 'react'
import {motion} from 'framer-motion';

import vein from '../../assets/vein-grey.png'
import purpose from '../../assets/purpose-grey.png'
import bitis from '../../assets/bitis-grey.png'
import monster from '../../assets/monsterbox-grey.png'
import runam from '../../assets/runam-grey.png'
import vivu from '../../assets/vivu-grey1.png'
import serviceMem from '../../assets/service-member.jpg'
import giong from '../../assets/giong2.webp'
import dragon from '../../assets/tease-dragon.jpg'
import trau from '../../assets/trau.webp'
import mouse from '../../assets/weddingmouse.webp'
import baemin from '../../assets/baemin.webp'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import StartButton from '../../components/serviceButton/StartButton'

function Home() {
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


const sliderRef = useRef(null);

//Next Arrow Slider

function SampleNextArrow(props) {
  return (
    <div className= 'nextArrow' onClick={() => sliderRef.current.slickNext()}>
      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    </div>
  );
}


//Previous Arrow Slider

function SamplePrevArrow() {
  return (
    <div className= 'prevArrow' onClick={() => sliderRef.current.slickPrev()}>
      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
    </div>
  );
}



//Slider settings

const settings = {
  infinite: false,
  speed: 800,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  lazyLoad: true,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

//Fade in elements animation

useEffect(() => {
  Aos.init({
    once: true,
    delay: 100,
  });
},[])

window.addEventListener('load', Aos.refresh);

const refBottomWrapper = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  const bottomWrap = document.querySelector(".bottom-wrapper");
  if(entry.isIntersecting){
     bottomWrap.classList.add('aos-animate');         
  }

}) 
observer.observe(refBottomWrapper.current);
},[])

const refButtonWrapper = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  const bottomWrap = document.querySelector(".button-wrapper");
  if(entry.isIntersecting){
     bottomWrap.classList.add('aos-animate');         
  }

}) 
observer.observe(refButtonWrapper.current);
},[])



  return (
    
    <Fullpage>    
    <Navbar></Navbar>
    
    
    <FullPageSections>
            <motion.div className='home' 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.5}}}
            exit={{opacity: 0}}>

            <FullpageSection>
            <div className='first' >
                <div data-aos='fade-in' data-aos-duration="1500" data-aos-delay = "800" className='image-wrapper'>
                    <div className='content'>
                        <h1 data-aos='fade-in' data-aos-duration="1500" data-aos-delay = "1500">Vietnam's creative <br></br> <span>3D Model</span> studio</h1>
                        <p ref={refButtonWrapper} data-aos='fade-in' data-aos-duration="1500" data-aos-delay = "2000">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className='button-wrapper' data-aos='fade-in' data-aos-duration="2500" data-aos-delay = "2500">
                          <LearnButton></LearnButton>
                          <a href='#' className='gallery-button'>See our galleries 🡥</a>
                        </div>                      
                    </div>
                </div>

                <div ref={myRef} className='first-dummy'></div>    
            </div>
            </FullpageSection>
            <FullpageSection>
              <div className='second' >
                <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay = "1000" className='image-wrapper'>
                  <img src={serviceMem} alt=''></img>
                </div>
                <div className='content-wrapper' data-aos='fade-in' data-aos-duration='1000' data-aos-delay = "1500">
                  <h1 data-aos='fade-down' data-aos-duration='1000' data-aos-delay = "1200">We are 8K Creative <br></br> Studio - the toy maker</h1>
                  <p data-aos='fade-left' data-aos-duration='1800' data-aos-delay = "1400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  <br></br> <br></br>
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <LearnButton></LearnButton>
                </div>
                <ul data-aos='fade-up' data-aos-duration='1400' data-aos-delay = "2200">
                  <li><img src={vein}></img></li>
                  <li><img src={purpose}></img></li>
                  <li><img src={bitis}></img></li>
                  <li><img src={runam}></img></li>
                  <li><img src={monster}></img></li>
                  <li><img src={vivu}></img></li>
                  <li><a href='#' className= 'view-button'>View All</a></li>
                </ul>
                <div ref={myRef2} className='second-dummy'></div>
              </div>
            </FullpageSection>

            <FullpageSection>
              <div className='third'>
              
                  <h1 data-aos='fade-down' data-aos-duration='1000' data-aos-delay = "500">We focus on the three</h1>
                  <div className='third-wrapper'>
                    <div className='item' data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "1000">
                      <div className='content'>
                        <h1>3D Modeling</h1>
                        <p>It is a long established fact that a reader will be distracted by...</p>
                        <StartButton></StartButton>
                      </div>
                    </div>
                    <div className='item' data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "1400">
                      <div className='content'>
                          <h1>Toy shop</h1>
                          <p>It is a long established fact that a reader will be distracted by...</p>
                          <StartButton></StartButton>
                      </div>
                    </div>
                    <div className='item' data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "1800">
                      <div ref={refBottomWrapper} className='content'>
                        <h1>Training</h1>
                        <p>It is a long established fact that a reader will be distracted by...</p>
                        <StartButton></StartButton>
                      </div>
                    </div>
                  </div>

                  <div className='bottom-wrapper' data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "2000">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by.</p>
                    <StartButton></StartButton>
                  </div>
                  
                  <div ref={myRef3} className='third-dummy'></div>
                  
              </div>
            </FullpageSection>
           
            <FullpageSection>
              <div className='fourth' >
                <h1 data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "500">Our recent artworks</h1>
                <Slider {...settings} ref={sliderRef}>
                  <div className='item' data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "500">
                    <div className='image-wrapper'>
                      <img src={dragon}></img>
                    </div>
                    <div className='item-content'>
                      <h1>Rồng Thần Đương Đại <br></br><span>Contemporary Dragon</span></h1>
                      <h2>Biti's Hunter</h2>
                    </div>
                  </div>    

                  <div className='item' data-aos='fade-up' data-aos-duration='1000' data-aos-delay = "1000">
                    <div className='image-wrapper'>
                      <img src={trau}></img>
                    </div>
                    <div className='item-content'>
                      <h1>Trâu Vàng Thịnh Vượng <br></br><span>The Golden Prosperous Buffalo</span></h1>
                      <h2>Runam Boutique</h2>
                    </div>
                  </div>    

                  <div className='item'>
                  <div className='image-wrapper'>
                    <img src={giong}></img>
                  </div>
                    <div className='item-content'>
                      <h1>Thánh Gióng <br></br><span>Saint Giong</span></h1>
                      <h2>8K Creative</h2>
                    </div>
                  </div>    

                  <div className='item'>
                  <div className='image-wrapper'>
                    <img src={mouse}></img>
                  </div>
                    <div className='item-content'>
                      <h1>Đám Cưới Chuột <br></br><span>The Mouse's Wedding</span></h1>
                      <h2>Runam Boutique</h2>
                    </div>
                  </div>    
                  <div className='item'>
                  <div className='image-wrapper'>
                    <img src={baemin}></img>
                  </div>
                    <div className='item-content'>
                      <h1>Quà Ở Trong Hộp <br></br><span>Gift In The Box</span></h1>
                      <h2>Baemin</h2>
                    </div>
                  </div>    
                </Slider>
                
                <div className='bottom-wrapper'>
                    <LearnButton></LearnButton>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                
                <div ref={myRef4} className='fourth-dummy'></div>
              </div>
            </FullpageSection> 

            <FullpageSection>
              <div className='fifth'>
                <Footer></Footer>
              </div>
            </FullpageSection>
        </motion.div>
    </FullPageSections>
    
    </Fullpage>
  )
}

export default Home