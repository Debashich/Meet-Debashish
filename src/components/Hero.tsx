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
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Debashish!
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          I work on fast and reliable backends system and infrastructure
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
            className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition font-medium border border-white/10"
          >
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

          <a
            href="#resume"
            className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-medium shadow-lg shadow-orange-500/20"
          >
            Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
