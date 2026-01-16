import { ArrowRight } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative pt-12 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-block px-4 py-2 bg-black text-white font-bold rounded-lg mb-6 -rotate-2">
            SINCE 2025 (ALMOST)
          </div>
          <h1 className="text-6xl md:text-[120px] leading-[0.85] font-black mb-8 tracking-tighter">
            STAY <br />
            <span className="text-[#FF5757]">AWAKE</span>
            <br />
            <span
              className="text-stroke-black italic"
              style={{ WebkitTextStroke: "3px black", color: "transparent" }}
            >
              STAY WEIRD
            </span>
          </h1>
          <p className="text-2xl font-bold mb-10 max-w-lg leading-tight">
            A high-octane caffeine laboratory for the dreamers, the schemers,
            and the extreme beaners.
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => scrollToSection("menu")}
              className="px-10 py-6 cursor-pointer bg-[#8C52FF] text-white border-4 border-black cartoon-shadow text-2xl font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-3"
            >
              VIEW MENU <ArrowRight strokeWidth={4} />
            </button>
            <div className="flex items-center gap-4 px-6 border-4 border-black rounded-2xl bg-white/50 backdrop-blur">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-black ${
                      ["bg-yellow-400", "bg-red-400", "bg-blue-400"][i - 1]
                    }`}
                  ></div>
                ))}
              </div>
              <span className="font-black text-sm uppercase">
                +12k Happy Sips
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square border-black cartoon-shadow overflow-hidden flex items-center justify-center group rounded-[60px] border-[6px] bg-[#FFD700]">
            <span className="text-[120px]">☕</span>
            <div className="absolute top-0 right-0 text-5xl wiggle">✨</div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
          <div className="absolute top-10 left-10 text-6xl opacity-20">🎨</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-20">
            🕹️
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 cartoon-shadow font-black z-30 text-black rotate-[-10deg]">
            TRUST THE Toon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
