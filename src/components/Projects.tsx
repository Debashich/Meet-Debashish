'use client';
import React, { useRef } from 'react';

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
      ],
      github: 'https://github.com/Debashich/GopherNet',
      demo: '#',
      projectPage: '/gophernet',
    },
    {
      title: 'Project Alpha',
      type: 'Backend API Service',
      tech: 'Go, PostgreSQL, Docker',
      description: 'A scalable REST API built for high-performance data processing.',
      highlights: [
        'JWT authentication system',
        'Database optimization',
        'Microservices architecture',
      ],
      github: 'https://github.com/Debashich',
      demo: '#',
      projectPage: '/projectalpha',
    },
    // {
    //   title: 'DevOps Pipeline',
    //   type: 'CI/CD Infrastructure',
    //   tech: 'Docker, Kubernetes, GitHub Actions',
    //   description: 'Automated deployment pipeline for containerized applications.',
    //   highlights: [
    //     'Container orchestration',
    //     'Automated testing',
    //     'Zero-downtime deployment',
    //   ],
    //   github: 'https://github.com/Debashich',
    //   demo: '#',
    //   projectPage: '/devopspipeline',
    // },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-[#181A20]">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-white">
          Projects
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface ProjectType {
  title: string;
  type: string;
  tech: string;
  description: string;
  highlights: string[];
  github: string;
  demo: string;
  projectPage: string;
}

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <a
        ref={cardRef}
        href={project.projectPage}
        onMouseMove={handleMouseMove}
        className="project-card-glow relative bg-[#23272F] p-6 rounded-lg shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 overflow-hidden flex flex-col w-full max-w-sm cursor-pointer block"
        style={{
          ['--mouse-x' as string]: '50%',
          ['--mouse-y' as string]: '50%'
        }}
      >
        <div className="mb-4 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-orange-400 hover:text-orange-500 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-2">{project.type}</p>
          <p className="text-xs md:text-sm text-gray-400 mb-3">
            <span className="font-semibold text-white">Tech:</span> {project.tech}
          </p>
        </div>
        <div className="mb-4 relative z-10 flex-grow">
          <ul className="space-y-1 text-sm md:text-base text-gray-200">
            {project.highlights.map((highlight, hIndex) => (
              <li key={hIndex} className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 relative z-10">
          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-200"
            aria-label="View on GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Rocket Deploy Button */}
          {/* <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:scale-110 transition-all duration-200"
            aria-label="View Live Demo"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.13 22.19l-1.63-3.83c-.08-.18-.29-.3-.5-.3s-.42.12-.5.3l-1.63 3.83c-.1.24.06.51.32.55l3.62.6c.26.04.52-.19.62-.43.1-.24-.06-.51-.32-.55zm8.1-9.23c-.43-2.73-1.87-5.17-4.01-6.83l.89-1.32c.22-.33.13-.77-.2-.99-.33-.22-.77-.13-.99.2l-.89 1.32c-.64-.38-1.33-.68-2.06-.88.12-.54.46-1 .91-1.28.45-.28 1.01-.38 1.54-.28.53.1.98.4 1.26.85.28.45.38 1.01.28 1.54-.1.53-.4.98-.85 1.26-.45.28-1.01.38-1.54.28-.25-.05-.5.12-.55.37-.05.25.12.5.37.55.73.15 1.5.01 2.13-.38.63-.39 1.08-1.01 1.24-1.74.16-.73.03-1.5-.38-2.13-.39-.63-1.01-1.08-1.74-1.24-.73-.16-1.5-.03-2.13.38-.63.39-1.08 1.01-1.24 1.74-.06.26-.09.52-.1.78-1.95.08-3.83.84-5.29 2.16-1.65 1.49-2.66 3.56-2.84 5.83-.18 2.26.44 4.5 1.75 6.3.08.11.19.19.32.23l3.62.6c.26.04.52-.19.62-.43l1.63-3.83c.08-.18.29-.3.5-.3s.42.12.5.3l1.63 3.83c.1.24.36.47.62.43l3.62-.6c.13-.04.24-.12.32-.23 1.31-1.8 1.93-4.04 1.75-6.3z" />
            </svg>
          </a> */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 hover:scale-110 transition-all duration-200"
            aria-label="View Live Demo"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </a>

        </div>
      </a>
      <style dangerouslySetInnerHTML={{
        __html: `
          .project-card-glow::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.5rem;
            background: radial-gradient(
              800px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.06),
              transparent 40%
            );
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .project-card-glow:hover::before {
            opacity: 1;
          }
          .project-card-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.5rem;
            background: radial-gradient(
              600px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.15),
              transparent 40%
            );
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .project-card-glow:hover::after {
            opacity: 1;
          }
        `
      }} />
    </>
  );
};

export default FeaturedProjects;
