import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear any previous errors when user starts typing
    if (submitStatus.error) {
      setSubmitStatus({ loading: false, success: false, error: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSubmitStatus({ loading: true, success: false, error: null });
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ loading: false, success: false, error: null });
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: error.message || 'Failed to send message. Please try again or contact me directly.' 
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interested in collaborating on a project, need assistance with development,
            or just want to say hi? Feel free to reach out!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-3xl text-primary mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Me</h4>
              <a 
                href="mailto:vrajprajapati28506@gmail.com" 
                className="text-primary hover:underline text-sm break-all"
              >
                vrajprajapati28506@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col items-center text-center">
              <FaPhone className="text-3xl text-primary mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Call Me</h4>
              <a 
                href="tel:+919106595440" 
                className="text-primary hover:underline text-sm"
              >
                +91 910 659 5440
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col items-center text-center">
              <FaLinkedin className="text-3xl text-primary mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/prajapati-vraj-094614288/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-sm"
              >
                Connect with me
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col items-center text-center">
              <FaGithub className="text-3xl text-primary mb-3" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h4>
              <a 
                href="https://github.com/Vraj006" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-sm"
              >
                View my code
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h3>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            {/* Status Messages */}
            {submitStatus.success && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                <div>
                  <p className="text-green-700 dark:text-green-300 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 dark:text-green-400 text-sm">You should receive a confirmation email shortly.</p>
                </div>
              </div>
            )}
            
            {submitStatus.error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center">
                <FaExclamationTriangle className="text-red-500 mr-3 text-xl" />
                <div>
                  <p className="text-red-700 dark:text-red-300 font-medium">Failed to send message</p>
                  <p className="text-red-600 dark:text-red-400 text-sm">{submitStatus.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your Name"
                  required
                  disabled={submitStatus.loading}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your Email"
                  required
                  disabled={submitStatus.loading}
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary mb-4 transition-all"
                placeholder="Subject"
                required
                disabled={submitStatus.loading}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary mb-6 transition-all"
                rows="5"
                placeholder="Your Message"
                required
                disabled={submitStatus.loading}
              ></textarea>
              <button
                type="submit"
                disabled={submitStatus.loading}
                className={`w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center ${
                  submitStatus.loading 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                }`}
              >
                {submitStatus.loading ? (
                  <>
                    <FaSpinner className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

