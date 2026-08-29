import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="relative overflow-hidden font-sans selection:bg-indigo-500/30">
                <HomeHero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
