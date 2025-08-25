import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutQuick from '../components/Home/AboutQuick'
import ServicesSection from '../components/Home/ServicesSection'
import BenefitsSection from '../components/Home/BenefitsSection'
import MoveForward from '../components/Home/MoveForward'
import { useEffect, useState } from "react";
import Loader from '../components/Loader'

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      const hasVisited = localStorage.getItem("hasVisited");
  
      if (!hasVisited) {
        // First time → show loader
        setShowLoader(true);
  
        // Set a flag so loader won't show again
        localStorage.setItem("hasVisited", "true");
      }
      const timer = setTimeout(() => setShowLoader(false), 5000); // match GSAP animation duration
      return () => clearTimeout(timer);
    }, []);
  
    if (showLoader) {
      return <Loader />; // only show loader (nothing else yet)
    }
  return (
    <div>
        <HeroSection />
        <AboutQuick />
        <ServicesSection />
        <BenefitsSection />
        <MoveForward />
    </div>
  )
}

export default Home