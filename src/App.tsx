import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skill/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import "./index.css";
import {Toaster} from "react-hot-toast"
import { useRef } from "react";


const App = () => {
    const contactRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className="">
            <Toaster position="top-right" />
            <Navbar contactRef={contactRef} />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
};

export default App;
