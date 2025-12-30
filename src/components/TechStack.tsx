import React from 'react';
import SkillCard from './SkillCard';

const TechStack: React.FC = () => {
  const allSkills = [
    
    { name: 'Go', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
    { name: 'Python', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Nginx', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Firebase', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Git', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'C++', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'HTML5', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'PostgreSQL', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'VS Code', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'GitHub', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Linux', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Jupyter', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' },
    { name: 'Kaggle', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg' },
    { name: 'NumPy', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Matplotlib', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    { name: 'Seaborn', img_src: 'https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-wide-lightbg.svg' },
    { name: 'MySQL', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

  ];

  return (
    <section id="tech" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto w-full">
        <div className="section-title mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white">
            Skills
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6">
            {allSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} img_src={skill.img_src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
