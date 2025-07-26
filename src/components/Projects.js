import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Finance Manager',
      description: 'Full-stack investment portfolio management application with real-time stock tracking and AI-driven recommendations.',
      longDescription: 'A comprehensive financial management platform built with the MERN stack. Features include real-time stock data integration, portfolio tracking, investment analysis, and AI-powered investment recommendations using the Llama API.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Alpha Vantage API', 'Llama API', 'Material-UI', 'JWT'],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://finance-manager-xl3h.onrender.com/',
      githubUrl: 'https://github.com/Vraj006',
      category: 'Full Stack',
      featured: true,
      highlights: [
        'Real-time stock data integration',
        'AI-powered investment recommendations',
        'Responsive Material-UI design',
        'Secure JWT authentication',
        'Portfolio performance analytics'
      ]
    },
    {
      id: 2,
      title: 'Wanderlust (Airbnb Clone)',
      description: 'Full-stack rental property platform with listing management, search functionality, and interactive maps.',
      longDescription: 'A complete property rental platform inspired by Airbnb. Built with Node.js and Express backend, featuring property listings, user authentication, review system, and location-based search with Mapbox integration.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Mapbox', 'Passport.js', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://major-project-fjfa.onrender.com/listings',
      githubUrl: 'https://github.com/Vraj006',
      category: 'Full Stack',
      featured: true,
      highlights: [
        'Interactive Mapbox integration',
        'Secure user authentication',
        'CRUD operations for properties',
        'Review and rating system',
        'Location-based search'
      ]
    },
    {
      id: 3,
      title: 'V-NEST Solveathon Portal',
      description: 'Event registration and management portal for VIT Chennai\'s startup incubator hackathon events.',
      longDescription: 'Built for V-NEST, VIT Chennai\'s official startup incubator, this portal handles event registrations, announcements, and participant management for hackathon events.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://solveathon.vnest.org/',
      githubUrl: 'https://github.com/Vraj006',
      category: 'Frontend',
      featured: false,
      highlights: [
        'Responsive event registration UI',
        'Real-time announcement system',
        'Participant management dashboard',
        'Modern Next.js architecture'
      ]
    },
    {
      id: 4,
      title: 'V-NEST Demo Portal',
      description: 'Comprehensive demo platform showcasing V-NEST\'s capabilities and startup ecosystem.',
      longDescription: 'A full-stack demonstration platform for V-NEST showcasing the incubator\'s services, startup portfolio, and application processes. Features a clean, professional design with comprehensive information architecture.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://demo.vnest.org/',
      githubUrl: 'https://github.com/Vraj006',
      category: 'Full Stack',
      featured: false,
      highlights: [
        'Professional startup showcase',
        'Docker containerization',
        'PostgreSQL database integration',
        'Responsive design principles'
      ]
    }
  ];

  // Filter to only show Full Stack projects
  const fullStackProjects = projects.filter(project => project.category === 'Full Stack');
  
  const [activeProject, setActiveProject] = useState('All');
  const categories = ['All'];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{project.longDescription}</p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Key Features</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              Featured Projects
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover my latest full-stack applications showcasing cutting-edge technologies,
            innovative solutions, and seamless user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {fullStackProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] ${
                project.featured ? 'ring-2 ring-blue-500/30 shadow-blue-500/20' : ''
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 animate-pulse">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <FaEye className="inline mr-2" />
                    Explore Project
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full font-medium border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-300 px-3 py-2 rounded-full font-medium border border-gray-200 dark:border-gray-600">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-sm group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-110"
                      title="View Code"
                    >
                      <FaGithub className="text-sm group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold hover:scale-105"
                  >
                    Explore
                    <span className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Explore more of my work on GitHub or let's discuss your next project idea!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Vraj006"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:shadow-xl hover:shadow-gray-900/25 transition-all duration-300 font-medium hover:scale-105"
              >
                <FaGithub className="mr-2 text-lg group-hover:rotate-12 transition-transform duration-300" />
                View All Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold hover:scale-105"
              >
                Let's Connect
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">💬</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
