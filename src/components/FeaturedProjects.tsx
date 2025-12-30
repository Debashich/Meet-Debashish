import React from 'react';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'GopherNet',
      type: 'Full-Stack Web Application',
      tech: 'Go, MySQL, React, TypeScript, Tailwind, Docker, Nginx',
      description: 'A backend-first full-stack application built with a modular Go architecture and a modern React frontend.',
      highlights: [
        'Modular backend design in Go',
        'Authentication & middleware layers',
        'MySQL database integration',
        'RESTful APIs',
        'React + TypeScript frontend',
        'Production-style deployment setup',
      ],
      github: 'https://github.com/Debashich',
      demo: '#',
    },
    // {
    //   title: 'Smart India Hackathon – Grand Finale',
    //   type: 'Hardware-Focused System (Top 5 at IIT Roorkee)',
    //   tech: 'ESP32, GPS, Radio Modules',
    //   description: 'A real-world system designed and evaluated at a national level under tight constraints.',
    //   highlights: [
    //     'Embedded system development',
    //     'Real-time data transmission',
    //     'GPS tracking integration',
    //     'Team-based system design',
    //     'Practical engineering under pressure',
    //   ],
    //   github: 'https://github.com/Debashich',
    //   demo: '#',
    // },
    // {
    //   title: 'Blockchain-Based Solution',
    //   type: 'SIH Internal Winner',
    //   tech: 'Blockchain',
    //   description: 'A blockchain-based solution focused on secure, decentralized data handling.',
    //   highlights: [
    //     'Blockchain system understanding',
    //     'Use-case-driven design',
    //     'Emphasis on architecture over tooling',
    //   ],
    //   github: 'https://github.com/Debashich',
    //   demo: '#',
    // },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-[#181A20]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-white">
          Projects
          
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#23272F] p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-700"
            >
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-3">{project.type}</p>
                <p className="text-base md:text-lg text-gray-400 mb-6">
                  <span className="font-semibold text-white">Tech:</span> {project.tech}
                </p>
              </div>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-200">
                  {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-lg bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="px-6 py-3 text-lg bg-orange-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

