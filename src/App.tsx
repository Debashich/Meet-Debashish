import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/Skills';
import FeaturedProjects from './components/Projects';
import Hackathons from './components/Achievements';
import Leadership from './components/Volunteering';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Hackathons />
      <Leadership />
    </div>
  );
}

export default App;
