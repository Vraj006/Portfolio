import React from 'react';
import { 
  FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt,
  FaHtml5, FaCss3Alt, FaBootstrap, FaDocker, FaCode,
  FaCheckCircle, FaLightbulb, FaRocket
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiPostgresql, 
  SiTensorflow, SiPostman, SiNextdotjs, SiMui
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      description: 'Creating beautiful and responsive user interfaces',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB', description: 'Component-based UI development' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', description: 'Full-stack React framework' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', description: 'Modern ES6+ development' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC', description: 'Utility-first CSS framework' },
        { name: 'Material UI', icon: SiMui, color: '#0081CB', description: 'React component library' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', description: 'Semantic markup and structure' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', description: 'Modern styling and animations' },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', description: 'Responsive design framework' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Building robust server-side applications',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', icon: SiExpress, color: '#000000', description: 'Fast web framework for Node.js' },
        { name: 'Python', icon: FaPython, color: '#3776AB', description: 'Versatile programming language' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'NoSQL database management' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', description: 'Relational database system' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      description: 'Development tools and workflow optimization',
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032', description: 'Version control and collaboration' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED', description: 'Containerization platform' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37', description: 'API development and testing' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', description: 'Machine learning framework' },
      ]
    }
  ];

  const SkillCard = ({ skill, index }) => {
    return (
      <div 
        className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ 
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)` 
          }}
        />
        
        {/* Icon Container */}
        <div className="relative flex items-center justify-center mb-4">
          <div 
            className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ backgroundColor: `${skill.color}15` }}
          >
            <skill.icon 
              className="text-3xl transition-all duration-300 group-hover:scale-110" 
              style={{ color: skill.color }} 
            />
          </div>
          
          {/* Floating Particles */}
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" style={{ backgroundColor: skill.color }}></div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ backgroundColor: skill.color }}></div>
        </div>
        
        {/* Content */}
        <div className="relative text-center">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {skill.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {skill.description}
          </p>
        </div>
        
        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-3xl mb-4 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={categoryIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Additional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Machine Learning', 'REST APIs', 'JWT Authentication',
              'Responsive Design', 'Database Design', 'Version Control',
              'API Development', 'Frontend Architecture', 'State Management',
              'Agile Development', 'Testing', 'Performance Optimization'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200 dark:border-gray-700 font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="relative mt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-white text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full animate-bounce"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <FaRocket className="text-3xl" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Continuous Learning Journey</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Technology evolves rapidly, and I'm passionate about staying at the forefront. 
              Currently diving deep into advanced AI/ML concepts, cloud architecture, 
              and emerging web technologies to build tomorrow's solutions today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI/ML', 'Cloud Computing', 'DevOps', 'Blockchain'].map((topic) => (
                <span key={topic} className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
