import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Locate from "./components/Locate";
import Sticker from "./components/Sticker";
import Menu from "./components/Menu";
import Rewards from "./components/Rewards";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div
      className={`min-h-screen transition-colors duration-700 font-mono selection:bg-black selection:text-white ${
        isDark ? "bg-[#1A1A1A] text-white" : "bg-[#FFFAEC] text-[1A1A1A]"
      }`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute z-0 opacity-[0.6] blur-2xl w-96 h-96 bg-purple-400 rounded-full"
          style={{ left: "10%", top: "20%" }}
        ></div>
        <div
          className="absolute z-0 opacity-[0.6] blur-2xl w-80 h-80 bg-orange-300 rounded-full"
          style={{ left: "10%", top: "20%" }}
        ></div>
      </div>
      <Navbar
        scrollToSection={scrollToSection}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <Menu />
      <Rewards />
      <Sticker />
      <Locate />
      <Testimonials />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
