import React from "react";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Front />
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Resume />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;
