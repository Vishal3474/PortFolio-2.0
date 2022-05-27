import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Resume from './components/Resume';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
