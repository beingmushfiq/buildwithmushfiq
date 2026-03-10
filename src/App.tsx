import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import AllProjects from './pages/AllProjects';

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left shadow-[0_0_10px_rgba(14,165,233,0.5)]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SystemArchitecture />
        <Skills />
        <Projects />
        <Services />
        <AutomationLab />
        <AIProjectPlanner />
        <ROICalculator />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    // Hide default cursor on desktop
    if (window.innerWidth > 1024) {
      document.body.style.cursor = 'none';
    }
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="relative bg-background text-foreground selection:bg-primary selection:text-white min-h-screen">
        <CustomCursor />
        <ScrollToTop />
        <ChatBot />
        <CommandCenter />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}
