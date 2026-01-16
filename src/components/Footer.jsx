import { Instagram, MessageCircle, X } from "lucide-react";
import React from "react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="p-12 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-black mb-6">
            WEBTOON
            <br />& WAKE
          </h2>
          <p className="text-stone-400 font-bold max-w-sm text-lg">
            Breaking the rules of traditional cafes since before it was cool.
            Stay wired
          </p>
        </div>
        <div>
          <h4 className="font-black mb-6 text-yellow-400 uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-3 font-bold">
            <li>
              <button
                onClick={() => scrollToSection("menu")}
                className="cursor-pointer hover:text-white text-stone-400"
              >
                The Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sticker")}
                className="cursor-pointer hover:text-white text-stone-400"
              >
                The Vibe
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("rewards")}
                className="cursor-pointer hover:text-white text-stone-400"
              >
                Rewards
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("locate")}
                className="cursor-pointer hover:text-white text-stone-400"
              >
                Find Us
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-6 text-yellow-400 uppercase tracking-widest">
            Connect
          </h4>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all cursor-pointer hover:bg-[#FF5757]">
              <Instagram size={20} />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all cursor-pointer hover:bg-[#FF5757]">
              <X size={20} />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all cursor-pointer hover:bg-[#FF5757]">
              <MessageCircle size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 border-t-2 border-stone-800 pt-8 mt-8 justify-between items-center text-sm font-black">
        <p>© 2026 THE COOLEST CAFE IN THE WORLD. ALL BEANS RESERVED.</p>
        <div className="flex gap-4 uppercase text-[10px] tracking-widest text-stone-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
