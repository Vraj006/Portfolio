import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : isDark 
            ? 'bg-gray-900/30 backdrop-blur-md border-b border-gray-700/20' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
                scrolled 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : isDark 
                    ? 'text-white drop-shadow-lg' 
                    : 'text-gray-900 drop-shadow-md'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                Vraj.dev
              </span>
            </button>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                      : isDark
                        ? 'text-white hover:bg-white/20 hover:text-blue-300 drop-shadow-lg'
                        : 'text-gray-900 hover:bg-gray-900/20 hover:text-blue-600 drop-shadow-md backdrop-blur-sm'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 group ${
                  scrolled
                    ? 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
                    : isDark
                      ? 'text-white hover:bg-white/20 drop-shadow-lg'
                      : 'text-gray-900 hover:bg-gray-900/20 drop-shadow-md backdrop-blur-sm'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? 
                  <FaSun size={18} className="group-hover:rotate-180 transition-transform duration-300" /> : 
                  <FaMoon size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                }
              </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 group ${
                scrolled
                  ? 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
                  : isDark
                    ? 'text-white hover:bg-white/20 drop-shadow-lg'
                    : 'text-gray-900 hover:bg-gray-900/20 drop-shadow-md backdrop-blur-sm'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? 
                <FaSun size={16} className="group-hover:rotate-180 transition-transform duration-300" /> : 
                <FaMoon size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              }
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 group ${
                scrolled
                  ? 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
                  : isDark
                    ? 'text-white hover:bg-white/20 drop-shadow-lg'
                    : 'text-gray-900 hover:bg-gray-900/20 drop-shadow-md backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? 
                <FaTimes size={18} className="group-hover:rotate-90 transition-transform duration-300" /> : 
                <FaBars size={18} className="group-hover:scale-110 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-gray-200/50 dark:border-gray-700/50">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
