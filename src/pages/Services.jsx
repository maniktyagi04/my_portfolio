import React from 'react';
import { Code, Layout, Database, Lightbulb, Layers, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creating modern, responsive websites with intuitive user interfaces and engaging user experiences.',
      icon: <Layout size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Frontend Development',
      description: 'Building interactive web applications using React, HTML, CSS, and JavaScript with modern frameworks.',
      icon: <Code size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'AI/ML Basics',
      description: 'Implementing basic machine learning models and algorithms for data analysis and prediction.',
      icon: <Cpu size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Database Design',
      description: 'Designing efficient database structures and implementing data management solutions.',
      icon: <Database size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Consulting',
      description: 'Providing technical advice and strategies for digital transformation and technology implementation.',
      icon: <Lightbulb size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-centered designs with focus on usability, accessibility, and visual appeal.',
      icon: <Layers size={40} className="text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Services</h1>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          I offer various services to help businesses and individuals create digital solutions that meet their needs. 
          Whether you need a website, an application, or technical advice, I'm here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-600 dark:bg-blue-700 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-blue-100 mb-6 md:mb-0 max-w-2xl">
                I specialize in creating tailored solutions to meet specific needs. If you have a project in mind,
                let's discuss how I can help bring your vision to life.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Discovery</h3>
            <p className="text-gray-600 dark:text-gray-400">Understanding your needs, goals, and challenges to ensure the solution meets your requirements.</p>
          </div>
          <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Design & Develop</h3>
            <p className="text-gray-600 dark:text-gray-400">Creating a customized solution with a focus on quality, usability, and performance.</p>
          </div>
          <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Deliver & Support</h3>
            <p className="text-gray-600 dark:text-gray-400">Implementing the solution and providing ongoing support to ensure long-term success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;