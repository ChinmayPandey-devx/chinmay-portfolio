import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-background min-h-screen text-textMain" id="top">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
