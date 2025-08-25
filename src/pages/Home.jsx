import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutQuick from '../components/Home/AboutQuick'
import ServicesSection from '../components/Home/ServicesSection'
import BenefitsSection from '../components/Home/BenefitsSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutQuick />
        <ServicesSection />
        <BenefitsSection />
    </div>
  )
}

export default Home