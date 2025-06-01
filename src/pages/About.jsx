import React from 'react';
import { Code, Monitor, Server, Database, Brain, Globe, Palette, Camera, Infinity } from 'lucide-react';

const About = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <Code size={36} className="text-orange-500" />,
      level: 90,
    },
    {
      name: 'CSS',
      icon: <Monitor size={36} className="text-blue-500" />,
      level: 85,
    },
    {
      name: 'JavaScript',
      icon: <Server size={36} className="text-yellow-500" />,
      level: 80,
    },
    {
      name: 'React',
      icon: <Globe size={36} className="text-cyan-500" />,
      level: 75,
    },
    {
      name: 'Python',
      icon: <Database size={36} className="text-green-500" />,
      level: 85,
    },
    {
      name: 'AI/ML',
      icon: <Brain size={36} className="text-purple-500" />,
      level: 70,
    },
  ];

  const quickFacts = [
    { label: 'Year', value: '1st' },
    { label: 'Technologies', value: '5+' },
    { label: 'Projects', value: '3' },
    { label: 'Learning', value: '∞' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-8">
          <div className="bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Starting as a curious tech enthusiast, I've embarked on an exciting journey in the world of technology.
              My passion for coding and problem-solving has led me to explore various aspects of software development
              and artificial intelligence.
            </p>
          </div>

          <div className="bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Goals & Inspirations</h2>
            <p className="text-gray-700 dark:text-gray-300">
              My goal is to become a proficient full-stack developer while making meaningful contributions to the tech community.
              I'm inspired by innovative solutions that make a positive impact on people's lives.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {skill.icon}
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-navy-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-navy-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Facts</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="text-center p-4 bg-gray-50 dark:bg-navy-900 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{fact.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;