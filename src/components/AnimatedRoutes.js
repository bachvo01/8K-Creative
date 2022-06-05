import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key ={location.pathname}>
                <Route path='/' element = {<Home></Home>}/>
                <Route path='/about' element = {<About></About>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes