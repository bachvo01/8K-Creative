import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (   
    <Router>      
      <ScrollToTop></ScrollToTop>
      <AnimatedRoutes></AnimatedRoutes>
    </Router>
  );
}

export default App;
