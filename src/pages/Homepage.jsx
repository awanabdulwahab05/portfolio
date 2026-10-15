import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Work from '../components/Work'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Work />
            <Services />
            <Contact />
        </div>
    )
}

export default Homepage
