/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logotrans.png';
import { motion, AnimatePresence } from 'framer-motion'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 md:px-16 lg:px-24 ">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 mix-blend-multiply">
          <img src={logo} alt="AndroidDev Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link to="/#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link to="/#division">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Division
              <svg
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 py-2 border border-gray-100 z-50">
              <Link to="/#division" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Front-End</Link>
              <Link to="/#division" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Back-End</Link>
              <Link to="/#division" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">UI/UX</Link>
            </div>
          </li>
          <li>
            <Link to="/#projects" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Project</Link>
          </li>
          <li>
            <Link to="/#gallery" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Gallery</Link>
          </li>
          <li>
            <a href="/struktur-organisasi" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Struktur Organisasi
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800 focus:outline-none p-2">
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

     <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-x-0 top-16 z-40 bg-white/80 backdrop-blur-md shadow-lg px-6 pb-4 pt-2 border-t"
          >
            <ul className="space-y-4 text-gray-700 font-medium">
              <li><Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li>
                <button
                  onClick={() => setDivisionOpen(!divisionOpen)}
                  className="flex justify-between w-full items-center"
                >
                  Division
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-200 ${divisionOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {divisionOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-2 text-sm overflow-hidden"
                    >
                      <li><Link to="/#division" onClick={() => setMenuOpen(false)}>Front-End</Link></li>
                      <li><Link to="/#division" onClick={() => setMenuOpen(false)}>Back-End</Link></li>
                      <li><Link to="/#division" onClick={() => setMenuOpen(false)}>UI/UX</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li><Link to="/#projects" onClick={() => setMenuOpen(false)}>Project</Link></li>
              <li><Link to="/#gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
              <li><a href="/struktur-organisasi" onClick={() => setMenuOpen(false)}>Struktur Organisasi</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
