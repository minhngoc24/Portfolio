import React, { useEffect } from "react";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Home from "./PortfolioContainer/Home/Profile";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Projects from "./PortfolioContainer/Projects/Projects"; 
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <section id="home" data-aos="fade-up">
        <Home />
      </section>

      <section id="about" data-aos="fade-up">
        <AboutMe />
      </section>

      <section id="resume" data-aos="fade-up">
        <Resume />
      </section>

      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <section id="contact" data-aos="fade-up">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
}

export default App;
