import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12">
        <div className="flex-1">
          <div className="relative w-64 h-96 md:w-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_6804917.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">Manik Tyagi</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto lg:mx-0 mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            I am a first-year B.Tech student at Newton School of Technology with a strong foundation in Python, HTML, CSS, JavaScript, and React. I am passionate about front-end development and have hands-on experience in UI/UX design, creating user-friendly and responsive interfaces. With a strong drive for continuous learning and innovation, I aim to build impactful tech solutions while constantly improving my software development and product design expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-navy-800 hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creating responsive and interactive web applications using modern technologies.
            </p>
          </div>
          <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building intelligent systems and applications using machine learning techniques.
            </p>
          </div>
          <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Designing intuitive and visually appealing user interfaces and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
