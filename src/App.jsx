import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Programs from './pages/Programs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AboutPrograms from './components/AboutPrograms';
import Curriculum from './components/Curriculum';
import WhyChoose from './components/WhyChoose';
import CanvasLab from './pages/CanvasLab';
import FAQPage from './pages/FAQPage';

const App = () => {
  const { pathname } = useLocation();

  // Scroll to top smoothly on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPrograms />} />
        <Route path="/learning-process" element={<Curriculum />} />
        <Route path="/why" element={<WhyChoose />} />
        <Route path="/canvas-lab" element={<CanvasLab />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;