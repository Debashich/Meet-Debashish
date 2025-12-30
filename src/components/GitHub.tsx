import React from 'react';

const GitHub: React.FC = () => {
  return (
    <section id="github" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          GitHub
        </h2>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I actively maintain my GitHub with:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
            <li className="flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Backend and full-stack projects
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Hackathon codebases
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              Learning experiments and prototypes
            </li>
          </ul>
          <a
            href="https://github.com/Debashich"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200 text-lg font-semibold"
          >
            github.com/Debashich
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;

