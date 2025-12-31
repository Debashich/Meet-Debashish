'use client';
import React, { useRef } from 'react';

const Achievements: React.FC = () => {
  const achievements = [
    { 
      title: 'Grand Finalist at Smart India Hackathon Grand Finale 2025',
      org: 'Indian Institute of Technology, Roorkee',
      date: 'December 2025',
      link: 'https://www.linkedin.com/posts/sinhadebashish_smartindiahackathon-sih-sih2025-activity-7407448026891509763-hllk',
    },
    { 
      title: 'Winner at Internal Smart India Hackathon',
      org: 'Siliguri Institute of Technology',
      date: 'September 2025',
      link: 'https://www.linkedin.com/posts/sinhadebashish_excited-to-share-thatteam-grainz-emerged-activity-7374117327979728896-Iahn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_zBssB0PtPOdTJ7BVjZHMUBOZv2NHr9lE', // Add your link here
    },
    { 
      title: 'Top 5 at 30-Day Coding Challenge',
      org: 'Siliguri Institute of Technology',
      date: 'September 2024',
      link: 'https://www.linkedin.com/posts/computer-engineers-society-sit_sitsiliguri-ces-sitces-ugcPost-7263264365691215872-W21R?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_zBssB0PtPOdTJ7BVjZHMUBOZv2NHr9lE', // Add your link here
    },
  ];

  return (
    <section id="achievements" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-white">
          Achievements
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AchievementType {
  title: string;
  org: string;
  date: string;
  link: string;
}

const AchievementCard = ({ achievement }: { achievement: AchievementType }) => {
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
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        className="hackathon-card-glow relative bg-gray-800/80 border-2 border-orange-300 hover:border-orange-500 transition-colors p-6 rounded-xl hover:shadow-2xl duration-300 flex flex-col justify-between overflow-hidden min-h-[200px] cursor-pointer block"
        style={{ 
          ['--mouse-x' as string]: '50%', 
          ['--mouse-y' as string]: '50%' 
        }}
      >
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-lg font-bold mb-3 text-orange-400 hover:text-orange-500 transition-colors leading-tight">
            {achievement.title}
          </h3>
          <p className="text-white text-sm mb-3">{achievement.org}</p>
          <p className="text-white text-xs mt-auto">{achievement.date}</p>
        </div>
      </a>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hackathon-card-glow::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            background: radial-gradient(
              800px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.06),
              transparent 40%
            );
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .hackathon-card-glow:hover::before {
            opacity: 1;
          }
          .hackathon-card-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            background: radial-gradient(
              600px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.15),
              transparent 40%
            );
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .hackathon-card-glow:hover::after {
            opacity: 1;
          }
        `
      }} />
    </>
  );
};

export default Achievements;
