import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#181A20] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 flex items-center"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-orange-500"></div>
        </div>

        {/* About Text */}
        <div className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            I&apos;m a Computer Science &amp; Engineering undergraduate at
            Siliguri Institute of Technology, currently in my second year. My
            journey has been driven by hands-on exploration across backend
            systems, network security, scalable architectures, and real-world
            problem solving.
          </p>
          <p>
            I’ve built modular backend services, full-stack applications, and
            experimented with blockchain concepts. I’ve also worked on
            electronics-driven systems through hackathons — including the Smart
            India Hackathon 2025 at the national level, as well as regional
            events like Hack4Bengal and college-level competitions. My focus is
            on designing reliable, efficient systems and understanding how
            software, hardware, and networks connect and operate together.
          </p>
          <p>
            Beyond development, I actively contribute to the Computer Engineer’s
            Society (CES), an elite technical community at SIT, where I help
            organize technical events and conduct hackathons. I also co-initiated
            the chess club, managing events and tournaments that strengthened my
            leadership, coordination, and strategic thinking.
          </p>
          <p>
            These experiences have honed my skills in building resilient systems,
            managing complex workflows, and solving challenging technical
            problems, equipping me to contribute effectively to any high-performing
            technical team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
