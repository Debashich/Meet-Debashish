'use client';
import React, { useRef } from 'react';
import cesImage from '../assets/ces.png';
import chessImage from '../assets/chess.png';

const Leadership: React.FC = () => {
  const roles = [
    {
      title: 'Computer Engineer\'s Society (CES)',
      items: [
        'As an active member at Computer Engineers\' Society, I contribute to SIT\'s elite technical community organizing hackathons, coding competitions, and industry webinars. The club hosts SIH Internal rounds and alumni sessions sharing career insights, fostering innovation and technical excellence. This experience has strengthened my skills and instilled a passion for continuous learning, collaboration, and contributing to the ever evolving landscape.',
      ],
      link: 'https://www.linkedin.com/company/computer-engineers-society-sit',
      image: cesImage,
    },
    {
      title: 'SIT Chess Club',
      items: [
        'As Management Lead at SIT Chess Club, I co-initiated and helped establish and grow a vibrant chess community organizing occasional online tournaments and chess events. I contributed my passion for organizing, collaborating with a dynamic group to refine my communication and event management skills while fostering creativity and teamwork. This experience solidified my passion for strategic thinking and decision making under pressure in an academic setting.'],
      link: '#',
      image: chessImage,
    },
  ];

  return (
    <section id="volunteering" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-[#181A20]">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-white">
          Volunteering
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        </h2>
        <div className="space-y-6">
          {roles.map((role, index) => (
            <VolunteeringCard key={index} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface RoleType {
  title: string;
  items: string[];
  link: string;
  image: string;
}

const VolunteeringCard = ({ role }: { role: RoleType }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="volunteering-card-glow relative bg-[#23272F] p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 overflow-hidden"
        style={{
          ['--mouse-x' as string]: '50%',
          ['--mouse-y' as string]: '50%'
        }}
      >
        <div className="relative z-10 flex items-start gap-6">
          {/* Circular Image */}
          <div className="flex-shrink-0">
            <a
              href={role.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-orange-500/30 group-hover:border-orange-500 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/50">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </a>
          </div>

          {/* Content */}
          <div className="flex-1">
            <a
              href={role.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-orange-400 hover:text-orange-500 transition-colors cursor-pointer">
                {role.title}
              </h3>
            </a>
            <ul className="space-y-2">
              {role.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-sm md:text-base text-gray-200 flex items-start"
                >
                  <span className="text-orange-400 mr-2 text-lg flex-shrink-0">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .volunteering-card-glow::before {
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
          .volunteering-card-glow:hover::before {
            opacity: 1;
          }
          .volunteering-card-glow::after {
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
          .volunteering-card-glow:hover::after {
            opacity: 1;
          }
        `
      }} />
    </>
  );
};

export default Leadership;
