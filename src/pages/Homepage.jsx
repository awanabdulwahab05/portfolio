import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Hero from '../components/Hero'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Work />
            <Services />
            <Contact />
        </div>
    )
}

export default Homepage
