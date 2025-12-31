import React from "react";
import Typewriter from "./Typewriter.tsx";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0b0f1a] text-white px-6 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Debashish!
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          I work on fast and reliable backend systems and infrastructure
        </p>

        <div className="text-2xl md:text-3xl font-semibold text-blue-400">
          <Typewriter />
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition font-medium border border-white/10"
          >
            View Projects
          </a>

          <a
  href="https://github.com/Debashich"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition font-medium border border-white/10"
>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
  </svg>
  GitHub
</a>


          <a
            href="https://linkedin.com/in/sinhadebashish"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition font-medium border border-white/10"
          >
            LinkedIn
          </a>

          {/* Resume Button - Visible on all screens */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
            aria-label="Download Resume"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
