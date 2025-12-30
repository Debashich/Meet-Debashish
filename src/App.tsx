import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Hackathons from './components/Hackathons';
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
