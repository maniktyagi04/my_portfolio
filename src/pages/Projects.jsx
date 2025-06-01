import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cryptoverse',
      description: 'A comprehensive cryptocurrency tracking application with real-time data, charts, and market insights.',
      tags: ['React', 'API', 'Cryptocurrency'],
      github: 'https://github.com/maniktyagi04/CryptoVerse',
      liveDemo: 'https://crypto-verse-flax.vercel.app/',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'An intelligent conversational agent built with natural language processing capabilities for seamless human-computer interaction.',
      tags: ['Python', 'NLP', 'Machine Learning'],
      github: 'https://github.com/maniktyagi04/AI_chatBot',
      liveDemo: 'https://ai-chat-bot-pied-mu.vercel.app/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Career Path Finder',
      description: 'A personalized career guidance platform that helps users discover and navigate optimal career paths based on their skills and interests.',
      tags: ['React', 'Node.js', 'AI'],
      github: 'https://github.com/maniktyagi04/careerpath',
      liveDemo: 'https://careerpath-beta.vercel.app/',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          Here are some of the projects I've worked on. Each project represents my skills and passion for creating innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white dark:bg-navy-800 rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">More Projects Coming Soon!</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Stay tuned for more exciting projects that showcase different technologies and solutions.
        </p>
      </div>
    </div>
  );
};

export default Projects;