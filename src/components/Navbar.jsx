import { Coffee, Moon, Sun } from "lucide-react";
import React from "react";

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <>
      <div className="text-white bg-[#1A1A1A] z-60 py-2 overflow-hidden sticky top-0 border-b-4 border-black">
        <div className="tracking-widest marquee font-bold uppercase text-sm">
          BEST BEANS IN THE MULTIVERSE • NO BORING LATTES ALLOWED • OPEN TILL
          LATE • BRING YOUR DOG • STICKERS AVAILABLE AT COUNTER • BEST BEANS IN
          THE MULTIVERSE • NO BORING LATTES ALLOWED • OPEN TILL LATE • BRING
          YOUR DOG • STICKERS AVAILABLE AT COUNTER •
        </div>
      </div>
      <nav className={`p-6 relative z-50 }`}>
        <div className="max-w-7xl wobbly-border cartoon-shadow mx-auto flex justify-between items-center bg-white p-4 border-4 border-black">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="p-2 bg-[#FFD700] cartoon-shadow rotate-[-5deg] hover:rotate-0 transition-transform border-2 border-black rounded-lg">
              <Coffee size={24} strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter hidden sm:inline">
              F&W
            </span>
          </div>
          <ul className="flex gap-4 sm:gap-6 font-black uppercase text-xs sm:text-sm">
            <li className="hover:text-[#FF5757]  hover:scale-110 cursor-pointer transition-all">
              Menu
            </li>
            <li className="hover:text-[#FF5757] hover:scale-110 cursor-pointer transition-all">
              Vibe
            </li>
            <li className="hover:text-[#FF5757] hover:scale-110 cursor-pointer transition-all">
              Level Up
            </li>
            <li className="hover:text-[#FF5757] hover:scale-110 cursor-pointer transition-all">
              Locate
            </li>
          </ul>
          <div className="flex items-center gap4">
            <button
              className="p-2 cursor-pointer border-4 border-black rounded-xl hover:bg-black hover:text-white transition-all hidden sm:flex"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Sun size={26} /> : <Moon size={26} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
