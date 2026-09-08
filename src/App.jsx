import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pitches from './components/Pitches';
import Tools from './components/Tools';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-background min-h-screen text-textMain" id="top">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Pitches showLogos={true} />
        <Tools />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
