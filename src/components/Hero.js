import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown, FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import { SiReact, SiJavascript, SiNodedotjs, SiPython, SiMongodb, SiDocker, SiTailwindcss } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const texts = [
      'Full Stack Developer',
      'MERN Stack Specialist',
      'AI/ML Explorer',
      'Innovation Creator',
      'Problem Solver'
    ];

    const currentText = texts[currentIndex];
    const speed = isDeleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const techIcons = [
    { Icon: SiReact, color: '#61DAFB', delay: '0s' },
    { Icon: SiJavascript, color: '#F7DF1E', delay: '0.2s' },
    { Icon: SiNodedotjs, color: '#339933', delay: '0.4s' },
    { Icon: SiPython, color: '#3776AB', delay: '0.6s' },
    { Icon: SiMongodb, color: '#47A248', delay: '0.8s' }
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-500 ${isDark
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
          : 'bg-gradient-to-br from-white via-blue-50 to-purple-100'
        }`}
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-blue-500 opacity-20' : 'bg-blue-400 opacity-30'
            }`}
          style={{
            left: `${20 + mousePosition.x * 0.01}%`,
            top: `${10 + mousePosition.y * 0.01}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div
          className={`absolute w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-purple-500 opacity-15' : 'bg-purple-400 opacity-25'
            }`}
          style={{
            right: `${15 + mousePosition.x * 0.008}%`,
            bottom: `${20 + mousePosition.y * 0.008}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s'
          }}
        />
        <div
          className={`absolute w-64 h-64 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-pink-500 opacity-10' : 'bg-pink-400 opacity-20'
            }`}
          style={{
            left: `${60 + mousePosition.x * 0.005}%`,
            top: `${70 + mousePosition.y * 0.005}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: '2s'
          }}
        />

        {/* Floating Tech Icons */}
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className={`absolute opacity-10 animate-float`}
            style={{
              left: `${10 + index * 20}%`,
              top: `${20 + index * 15}%`,
              animationDelay: tech.delay,
              animationDuration: `${3 + index}s`
            }}
          >
            <tech.Icon
              size={40}
              style={{ color: tech.color }}
              className="animate-spin-slow"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className="space-y-6 mt-8">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isDark ? 'text-white drop-shadow-2xl' : 'text-gray-900 drop-shadow-lg'
                }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient drop-shadow-none">
                  Vraj
                </span>
              </h1>

              <div className={`text-2xl md:text-3xl lg:text-4xl font-semibold h-20 flex items-center ${isDark ? 'text-blue-300 drop-shadow-lg' : 'text-blue-700 drop-shadow-md'
                }`}>
                <span className="border-r-3 border-current pr-3 animate-pulse">
                  {displayText}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className={`text-lg md:text-xl leading-relaxed max-w-2xl space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              <p>
                3rd year B.Tech student at{' '}
                <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'
                  }`}>VIT Chennai</span>{' '}
                specializing in AI/ML.
              </p>
              <p className={`font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'
                }`}>
                Crafting digital experiences that bridge innovation with real-world impact.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white/70 border border-gray-200/50 shadow-md'
                }`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'
                  }`}>3rd Year B.Tech</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white/70 border border-gray-200/50 shadow-md'
                }`}>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'
                  }`}>AI/ML Specialist</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${isDark
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-white/70 border border-gray-200/50 shadow-md'
                }`}>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'
                  }`}>Full Stack Dev</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <FaRocket className="group-hover:animate-bounce" />
                  <span>Explore My Work</span>
                </span>
              </button>
              <a
                href="/assets/Vraj_Prajapati_Resume.pdf"
                download="Vraj_Prajapati_Resume.pdf"
                className={`group relative px-8 py-4 border-2 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 text-center overflow-hidden ${isDark
                    ? 'border-white/50 text-white hover:border-white backdrop-blur-md'
                    : 'border-gray-800/50 text-gray-800 hover:border-gray-800 backdrop-blur-md shadow-lg'
                  }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-white' : 'bg-gray-800'
                  }`}></div>
                <span className="relative flex items-center justify-center space-x-2 group-hover:text-white">
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </span>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {[
                { Icon: FaGithub, href: 'https://github.com/Vraj006', label: 'GitHub', color: 'hover:bg-gray-800' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/prajapati-vraj-094614288/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { Icon: FaEnvelope, href: 'mailto:vrajprajapati28506@gmail.com', label: 'Email', color: 'hover:bg-red-500' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`group relative p-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                      : 'bg-white/60 hover:bg-white/80 text-gray-800 border border-gray-200/50 shadow-lg'
                    } ${social.color} hover:text-black`}
                  title={social.label}
                >
                  <social.Icon className="text-xl group-hover:animate-pulse" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-xs font-medium px-2 py-1 rounded-md ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'
                      }`}>
                      {social.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Tech Stack Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer Rotating Ring */}
                <div className={`absolute inset-0 rounded-full border-4 border-dashed animate-spin-slow ${isDark ? 'border-blue-400/30' : 'border-blue-600/40'
                  }`}></div>

                {/* Middle Ring */}
                <div className={`absolute inset-6 rounded-full border-2 border-dotted animate-reverse-spin ${isDark ? 'border-purple-400/20' : 'border-purple-600/30'
                  }`}></div>

                {/* Central Tech Hub */}
                <div className={`absolute inset-12 rounded-full backdrop-blur-md border-2 flex items-center justify-center ${isDark
                    ? 'bg-gradient-to-br from-gray-800/80 via-blue-900/60 to-purple-900/60 border-white/20'
                    : 'bg-gradient-to-br from-white/80 via-blue-100/60 to-purple-100/60 border-gray-300/50 shadow-2xl'
                  }`}>
                  <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                    VP
                  </div>
                </div>

                {/* Floating Tech Stack Icons */}
                {[
                  { Icon: SiReact, position: 'top-4 left-1/2 -translate-x-1/2', color: 'from-cyan-500 to-blue-500', label: 'React' },
                  { Icon: SiPython, position: 'top-1/2 right-4 -translate-y-1/2', color: 'from-yellow-500 to-green-500', label: 'Python' },
                  { Icon: SiJavascript, position: 'bottom-4 left-1/2 -translate-x-1/2', color: 'from-yellow-400 to-orange-500', label: 'JavaScript' },
                  { Icon: SiDocker, position: 'top-1/2 left-4 -translate-y-1/2', color: 'from-blue-500 to-cyan-500', label: 'Docker' },
                  { Icon: SiNodedotjs, position: 'top-8 right-8', color: 'from-green-500 to-emerald-500', label: 'Node.js' },
                  { Icon: SiMongodb, position: 'bottom-8 right-8', color: 'from-green-600 to-green-400', label: 'MongoDB' },
                  { Icon: SiTailwindcss, position: 'bottom-8 left-8', color: 'from-cyan-400 to-blue-500', label: 'Tailwind' },
                  { Icon: FaBrain, position: 'top-8 left-8', color: 'from-purple-500 to-pink-500', label: 'AI/ML' }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`absolute ${tech.position} group cursor-pointer`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-125 hover:rotate-12 animate-float`}>
                      <tech.Icon size={20} />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className={`text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'
                        }`}>
                        {tech.label}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Connecting Lines */}
                <div className={`absolute inset-16 rounded-full border opacity-20 animate-pulse ${isDark ? 'border-white' : 'border-gray-600'
                  }`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className={`p-2 rounded-full transition-colors duration-300 ${isDark
                ? 'text-white hover:text-blue-400'
                : 'text-gray-900 hover:text-blue-600'
              }`}
          >
            <FaChevronDown className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
