import React from 'react';

const Hackathons: React.FC = () => {
  const achievements = [
    { 
      icon: '🏆', 
      text: 'Smart India Hackathon 2025 – National Level', 
      badge: 'National',
      badgeColor: 'bg-red-600 text-white'
    },
    { 
      icon: '🏅', 
      text: 'SIH Grand Finale – Top 5 Teams (IIT Roorkee)', 
      badge: 'National',
      badgeColor: 'bg-red-600 text-white'
    },
    { 
      icon: '🎯', 
      text: 'Hack4Bengal – Regional Event', 
      badge: 'Regional',
      badgeColor: 'bg-blue-600 text-white'
    },
    { 
      icon: '🏆', 
      text: 'SIH Internal Winner', 
      badge: 'College',
      badgeColor: 'bg-green-600 text-white'
    },
    { 
      icon: '👨‍💻', 
      text: 'Active hackathon participant', 
      badge: null,
      badgeColor: ''
    },
  ];

  return (
    <section id="hackathons" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-white">
          Hackathons & Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{achievement.icon}</span>
                <span className="text-lg md:text-xl text-gray-200">{achievement.text}</span>
              </div>
              {achievement.badge && (
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${achievement.badgeColor}`}>
                  {achievement.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;

