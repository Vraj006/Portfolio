import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-primary mb-4 hover:text-blue-400 transition-colors cursor-pointer"
            >
              Vraj.dev
            </button>
            {/* <p className="text-gray-400 mb-4 leading-relaxed">
              Full-stack developer and 3rd year B.Tech student at VIT Chennai, 
              specializing in AI/ML. Passionate about creating innovative web 
              applications and exploring new technologies.
            </p> */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Vraj006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/prajapati-vraj-094614288/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:vrajprajapati28506@gmail.com"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:vrajprajapati28506@gmail.com"
                  className="text-white hover:text-primary transition-colors"
                >
                  vrajprajapati28506@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a
                  href="tel:+919106595440"
                  className="text-white hover:text-primary transition-colors"
                >
                  +91 910 659 5440
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Chennai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <FaHeart className="text-red-500 mx-1" />
              <span>by Vraj Prajapati</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Vraj Prajapati. All rights reserved.</p>
            </div>
          </div>
          
          {/* Technologies Used */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Built with React, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
