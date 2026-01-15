import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [isDark, setIsDark] = useState(false);
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
      <Navbar isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default App;
