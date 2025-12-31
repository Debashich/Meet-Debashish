import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#181A20] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 flex items-center"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              About Me
            </h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>
          
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
            aria-label="Download Resume"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

        {/* About Text */}
        <div className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            Throughout college, I've been building <span className="text-orange-300">backend</span> systems and
            <span className="text-orange-300"> full stack projects</span>
            , with Golang as my primary tool, with a growing interest in networking and
            secure, scalable architectures. I also build electronics driven
            solutions through hackathons most notably the{' '}
            <a
              href="https://www.linkedin.com/posts/sinhadebashish_smartindiahackathon-sih-sih2025-activity-7407448026891509763-hllk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_zBssB0PtPOdTJ7BVjZHMUBOZv2NHr9lE"
              className="text-orange-300 hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smart India Hackathon Grand Finale 2025 
            </a>
            {" "}because I like engineering that has real constraints, not just clean
            diagrams.
          </p>
          <p>
            I'm active in the{' '}
            <a
              href="https://www.linkedin.com/company/computer-engineers-society-sit"
              className="text-orange-300 hover:text-orange-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Engineer's Society (CES)
            </a>
            , where I help run technical events and hackathons, and I co‑initiated
            the Chess club organizing tournaments and managing operations taught
            me more about leadership and execution than any single course. Before
            SIT, I studied at Delhi Public School, Siliguri, where I regularly
            took part in inter- and intra-school drawing/sketching competitions,
            represented my school at multiple events, and picked up a habit of
            showing up consistently and competing seriously.
          </p>
          <p>
            I completed my schooling at Delhi Public School, Siliguri, and I'm
            currently a second‑year Computer Science & Engineering undergraduate
            at Siliguri Institute of Technology and when I'm not deep into
            projects, you'll usually find me tinkering with my laptop, refining
            ideas, breaking things, and rebuilding them better.
          </p>
        </div>

        {/* Mobile Resume Button */}
        <div className="sm:hidden mt-8">
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium w-full"
            aria-label="Download Resume"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
