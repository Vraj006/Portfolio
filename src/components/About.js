import React, { useState } from 'react';
import { FaGraduationCap, FaCode, FaLightbulb, FaUsers, FaBrain, FaRocket, FaHeart, FaAward, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  const [activeJourney, setActiveJourney] = useState(0);
  
  const journeySteps = [
    {
      year: '2023',
      title: 'Explore All Things',
      description: 'Started exploring various technologies, programming languages, and development frameworks to build a strong foundation.',
      icon: FaLightbulb,
      color: 'from-green-400 to-blue-500',
      achievements: ['Python basics', 'Web fundamentals', 'Problem solving'],
      milestone: 'Exploration'
    },
    {
      year: '2024',
      title: 'Web Development',
      description: 'Focused on mastering web development technologies, building full-stack applications with MERN stack.',
      icon: FaCode,
      color: 'from-blue-400 to-purple-500',
      achievements: ['React mastery', 'MERN projects', 'Frontend expertise'],
      milestone: 'Specialization'
    },
    {
      year: '2025',
      title: 'V-NEST Journey',
      description: 'Joined V-NEST startup incubator as core team member, leading projects and mentoring peers in innovative solutions.',
      icon: FaRocket,
      color: 'from-purple-400 to-pink-500',
      achievements: ['Team leadership', 'Startup projects', 'Real impact'],
      milestone: 'Leadership'
    }
  ];
  
  const stats = [
    { icon: FaCode, number: '4+', label: 'Projects Built' },
    { icon: FaGraduationCap, number: '3rd', label: 'Year Student' },
    { icon: FaBrain, number: '15+', label: 'Technologies' },
    { icon: FaUsers, number: '450+', label: 'Connections' },
  ];

  const highlights = [
    {
      title: 'Education',
      description: 'B.Tech in Computer Science with specialization in AI/ML at VIT Chennai',
      icon: '🎓'
    },
    {
      title: 'Passion',
      description: 'Full-stack development with MERN stack and exploring machine learning',
      icon: '💻'
    },
    {
      title: 'Experience',
      description: 'Core member at V-NEST startup incubator, leading frontend development',
      icon: '🚀'
    },
    {
      title: 'Goal',
      description: 'Building innovative solutions that bridge technology and real-world problems',
      icon: '🎯'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A passionate developer on a mission to create innovative solutions that bridge technology and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! I'm Vraj Prajapati
              </h3>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  I'm currently a 3rd year B.Tech student at VIT Chennai, specializing in Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning. My journey in technology began with curiosity and has evolved into a passion for creating innovative web applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  As a full-stack developer with expertise in the MERN stack, I enjoy both frontend and backend development. I'm particularly interested in the intersection of web development and AI/ML, always looking for ways to integrate intelligent features into user-friendly applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working on innovative solutions at V-NEST, VIT Chennai's startup incubator where I serve as a core technical team member.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-2xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">vrajprajapati28506@gmail.com</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-2xl border border-green-200 dark:border-green-700">
                <div className="flex items-center mb-2">
                  <FaPhone className="text-green-600 dark:text-green-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">+91 9106595440</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-2xl border border-purple-200 dark:border-purple-700">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Chennai, India</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-2xl border border-orange-200 dark:border-orange-700">
                <div className="flex items-center mb-2">
                  <FaGraduationCap className="text-orange-600 dark:text-orange-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">VIT Chennai</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Highlights */}
          <div className="space-y-6">
            {/* Interactive Journey Timeline */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
              </h3>
              
              {/* Timeline Navigation */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 rounded-2xl p-2">
                  {journeySteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveJourney(index)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        activeJourney === index
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600'
                      }`}
                    >
                      {step.year}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Active Journey Step */}
              <div className="relative">
                <div className={`bg-gradient-to-r ${journeySteps[activeJourney].color} rounded-2xl p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                      {React.createElement(journeySteps[activeJourney].icon, { className: "text-2xl" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{journeySteps[activeJourney].title}</h4>
                      <span className="text-sm opacity-90">{journeySteps[activeJourney].milestone}</span>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed">{journeySteps[activeJourney].description}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {journeySteps[activeJourney].achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                    <stat.icon className="text-2xl mb-2 mx-auto text-blue-600 dark:text-blue-400" />
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Highlights - Full Width */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <span className="text-3xl mb-3 block">{highlight.icon}</span>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
