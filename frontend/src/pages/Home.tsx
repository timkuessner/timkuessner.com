import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Certificates from '../components/sections/Certificates';
import Contact from '../components/sections/Contact';

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Education />
            <Certificates />
            <Contact />
        </div>
    );
}