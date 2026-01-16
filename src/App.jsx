import { useEffect, useState } from "react";
import {
  Features,
  Footer,
  Hero,
  Loading,
  Locate,
  Menu,
  Navbar,
  Rewards,
  Sticker,
  Testimonials,
} from "./components";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  if (loading) {
    return <Loading />;
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
