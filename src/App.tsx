import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import IndieProducts from './components/IndieProducts';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <IndieProducts />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
