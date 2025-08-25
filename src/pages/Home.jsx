import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutQuick from '../components/Home/AboutQuick'
import ServicesSection from '../components/Home/ServicesSection'
import BenefitsSection from '../components/Home/BenefitsSection'
import MoveForward from '../components/Home/MoveForward'

const Home = () => {
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