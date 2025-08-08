import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MasteringTools from './components/MasteringTools';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import DivisionSection from './components/DivisionSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogSection from './components/BlogSection';
import PostDetailPage from './pages/BlogDetailPage'; 
import Gallery from './components/galerry';
import FAQSection from './components/FaqSection';
import Footer from './components/Footer';
import StrukturOrganisasiPage from './pages/StrukturOrganisasiPage'; // <-- Pastikan ini diimpor
import ScrollToHashElement from './utils/ScrollToHashElement'; // ← import dulu
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    offset:100,
  });
}, []);

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Navbar />
      <main className='px-4 md:px-16 lg:px-24 overflow-x-hidden'>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BenefitsSection />
                <AboutSection />
                <MasteringTools />
                <DivisionSection />
                <ProjectsSection />
                <BlogSection />
                <Gallery />
                <FAQSection />
                <ScrollToTopButton/>
              </>
            } />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/posts/:slug" element={<PostDetailPage />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;