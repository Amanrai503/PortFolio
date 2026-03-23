import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Preloader from './components/ui/Preloader';
import ParticleBackground from './components/ui/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ParticleBackground />
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        <Layout>
          <div className="flex flex-col gap-32">
            <section id="home">
              <Home />
            </section>
            <section id="about" className="scroll-mt-32">
              <About />
            </section>
            <section id="skills" className="scroll-mt-32">
              <Skills />
            </section>
            <section id="projects" className="scroll-mt-32">
              <Projects />
            </section>
            <section id="contact" className="scroll-mt-32">
              <Contact />
            </section>
          </div>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
