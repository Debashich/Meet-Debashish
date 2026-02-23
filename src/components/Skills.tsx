import React from 'react';
import SkillCard from './SkillCard';

const TechStack: React.FC = () => {
  const allSkills = 
  [
      { name: 'Kubernetes', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Docker', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: "AWS", img_src: "https://www.rededucation.com/wp-content/uploads/2025/10/PikPng.com_run-dmc-png_5240809.png" },
      { name: 'Linux', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Golang', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Gin', img_src: 'https://gin-gonic.com/_astro/gin.D6H2T_2v_ZD2G7l.webp' },
      { name: 'Git', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: "Bash", img_src: "https://d33wubrfki0l68.cloudfront.net/a1da522d0a3057a1bc3fb411fcbbf57a447c1146/65e71/img/symbol/svg/full_colored_dark.svg" },
      { name: 'TypeScript', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'OpenTelemetry', img_src: 'https://layer5.io/static/4a8f123b0c66e54edf086640229da650/opentelemetry-operator-color.svg'},
      { name: 'Ink', img_src: 'https://raw.githubusercontent.com/vadimdemedes/ink/HEAD/media/logo.png'},
      { name: 'MySQL', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
      { name: 'Python', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'GitHub', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'C++', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'VS Code', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }, 
      { name: 'HTML5', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Firebase', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      // { name: 'Nginx', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      // { name: 'PostgreSQL', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      // { name: 'Jupyter', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' },
      // { name: 'Kaggle', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg' },
      // { name: 'NumPy', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      // { name: 'Pandas', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      // { name: 'Matplotlib', img_src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      // { name: 'Seaborn', img_src: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
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
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4 md:gap-6">
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
