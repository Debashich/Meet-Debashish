import React from 'react';

const Leadership: React.FC = () => {
  const roles = [
    {
      title: 'Computer Engineer\'s Society (CES)',
      items: [
        'Organize technical events and conduct hackathons',
        'Help coordinate elite technical community activities at SIT',
      ],
    },
    {
      title: 'Chess Club',
      items: [
        'Co-initiated the formation of the club',
        'Manage events and tournaments',
      ],
    },
  ];

  return (
    <section id="volunteering" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-[#181A20]">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center text-white">
          Volunteering
        </h2>
        <div className="space-y-10">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#23272F] p-10 rounded-lg shadow-lg border border-gray-700"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">
                {role.title}
              </h3>
              <ul className="space-y-3">
                {role.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-lg md:text-xl text-gray-200 flex items-start"
                  >
                    <span className="text-orange-400 mr-3 text-2xl">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

