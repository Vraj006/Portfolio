import React, { useState } from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaRocket, FaLightbulb, FaUsers, FaCode, FaAward, FaGraduationCap, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('impact');

  const experienceData = {
    impact: {
      title: 'Real-World Impact',
      icon: FaRocket,
      color: 'from-blue-500 to-purple-600',
      items: [
        {
          metric: '4+',
          label: 'Live Platforms',
          description: 'Built and deployed production applications serving real users',
          icon: FaCode,
          details: ['Solveathon Portal', 'Demo Platform', 'Admin Dashboard', 'V-NEST Website']
        },
        {
          metric: '1000+',
          label: 'Users Reached',
          description: 'Applications serving students and startup ecosystem',
          icon: FaUsers,
          details: ['Event registrations', 'Platform interactions', 'Admin operations']
        },
        {
          metric: '100%',
          label: 'Uptime',
          description: 'Reliable, production-ready applications with zero downtime',
          icon: FaCheckCircle,
          details: ['Docker deployment', 'Error handling', 'Performance optimization']
        }
      ]
    },
    learnings: {
      title: 'Key Learnings',
      icon: FaLightbulb,
      color: 'from-green-500 to-teal-600',
      items: [
        {
          area: 'Full-Stack Mastery',
          description: 'From frontend design to backend architecture and database management',
          skills: ['React ecosystem', 'Node.js backend', 'PostgreSQL', 'Docker'],
          icon: FaCode,
          insight: 'Understanding the complete web development lifecycle'
        },
        {
          area: 'Team Leadership',
          description: 'Leading technical decisions and mentoring fellow developers',
          skills: ['Code reviews', 'Architecture planning', 'Team coordination'],
          icon: FaUsers,
          insight: 'Balancing technical excellence with team collaboration'
        },
        {
          area: 'Startup Mindset',
          description: 'Building scalable solutions in fast-paced startup environment',
          skills: ['Rapid prototyping', 'MVP development', 'User feedback integration'],
          icon: FaRocket,
          insight: 'Moving fast while maintaining code quality'
        }
      ]
    },
    growth: {
      title: 'Professional Growth',
      icon: FaChartLine,
      color: 'from-purple-500 to-pink-600',
      milestones: [
        {
          phase: 'Selection',
          period: 'April 2025',
          achievement: 'Chosen as Core Technical Team Member',
          description: 'Selected from competitive pool for technical leadership role',
          icon: FaAward
        },
        {
          phase: 'First Project',
          period: 'May 2025',
          achievement: 'Delivered Solveathon Portal',
          description: 'Successfully launched first production application',
          icon: FaRocket
        },
        {
          phase: 'Leadership',
          period: 'Ongoing',
          achievement: 'Leading Multiple Projects',
          description: 'Simultaneously managing 4+ applications and mentoring team',
          icon: FaUsers
        }
      ]
    }
  };

  const education = {
    degree: 'B.Tech in Computer Science Engineering',
    specialization: 'Artificial Intelligence and Machine Learning (AI/ML)',
    institution: 'VIT Chennai',
    duration: '2022 - 2026',
    currentYear: '3rd Year',
    location: 'Chennai, India',
    highlights: [
      'Specialization in AI/ML with focus on practical applications',
      'Strong foundation in computer science fundamentals',
      'Active participation in technical events and competitions',
      'Collaborative projects with industry-relevant technologies'
    ]
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Beyond the resume - exploring the real impact, learnings, and growth from my experience at V-NEST
          </p>
        </div>

        {/* Experience Context */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white mb-8 sm:mb-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Core Technical Team Member</h3>
            <p className="text-base sm:text-lg mb-2">V-NEST, VIT Chennai Startup and Research Foundation</p>
            <p className="text-sm opacity-90">April 2025 - Present | Chennai, India</p>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 w-full sm:w-auto">
            {Object.entries(experienceData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                  }`}
              >
                {React.createElement(data.icon, { className: "text-lg" })}
                <span>{data.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'impact' && (
            <div className="space-y-8">
              <div className={`bg-gradient-to-r ${experienceData.impact.color} rounded-3xl p-8 text-white text-center`}>
                <h3 className="text-3xl font-bold mb-4">Measuring Real Impact</h3>
                <p className="text-lg opacity-90">What I've built and who it serves</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {experienceData.impact.items.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="text-center mb-4">
                      {React.createElement(item.icon, { className: "text-3xl text-blue-600 dark:text-blue-400 mx-auto mb-2" })}
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">{item.metric}</div>
                      <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.label}</div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.description}</p>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'learnings' && (
            <div className="space-y-8">
              <div className={`bg-gradient-to-r ${experienceData.learnings.color} rounded-3xl p-8 text-white text-center`}>
                <h3 className="text-3xl font-bold mb-4">Key Learnings & Growth</h3>
                <p className="text-lg opacity-90">What I've discovered along the way</p>
              </div>

              <div className="space-y-6">
                {experienceData.learnings.items.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {React.createElement(item.icon, { className: "text-xl text-white" })}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.area}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <FaLightbulb className="text-yellow-500 mr-2" />
                            <span className="font-medium">Key Insight:</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 italic">"{item.insight}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'growth' && (
            <div className="space-y-8">
              <div className={`bg-gradient-to-r ${experienceData.growth.color} rounded-3xl p-8 text-white text-center`}>
                <h3 className="text-3xl font-bold mb-4">Professional Evolution</h3>
                <p className="text-lg opacity-90">My journey from selection to leadership</p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                <div className="space-y-8">
                  {experienceData.growth.milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10">
                        {React.createElement(milestone.icon, { className: "text-xl text-white" })}
                      </div>

                      {/* Content */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{milestone.achievement}</h4>
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                            {milestone.period}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{milestone.phase}</div>
                        <p className="text-gray-700 dark:text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>


      </div>
    {/* </div> */}
      {/* </div > */}
    </section >
  );
};

export default Experience;
