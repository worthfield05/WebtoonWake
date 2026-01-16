import { useState } from "react";
const moods = [
  { emoji: "😴", label: "Zombie", rec: "Triple Espresso Injection" },
  { emoji: "🎨", label: "Creative", rec: "Artisan Pour Over" },
  { emoji: "🔥", label: "Chaos", rec: "Spiced Ghost Pepper Mocha" },
  { emoji: "🌈", label: "Happy", rec: "Sparkle Sprinkle Latte" },
];
const Features = () => {
  const [selectedMood, setSelectedMood] = useState();
  const [brewCount, setBrewCount] = useState(0);
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black uppercase mb-8">
            What's your current vibe?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood)}
                className={`p-6 cursor-pointer border-4 border-black cartoon-shadow rounded-2xl transition-all ${
                  selectedMood?.label === mood.label
                    ? "bg-black text-white scale-110"
                    : "bg-white hover:bg-yellow-100"
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="font-black text-sm uppercase">{mood.label}</div>
              </button>
            ))}
          </div>
          {selectedMood && (
            <div className="mt-8 p-6 text-black border-4 border-black cartoon-shadow inline-block rounded-xl animate-bounce bg-[#C1FF72]">
              <span>We Recommend: {selectedMood.rec}!</span>
            </div>
          )}
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-black text-white p-12 border-8 relative overflow-hidden border-[#FF5757] rounded-[50px]">
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-black mb-4 uppercase">
              Infinte Brew Lab
            </h2>
            <p className="text-xl font-bold mb-8 text-stone-400">
              Can we brew enough for the whole internet? Probably not.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="text-8xl font-black mb-2 tracking-tighter text-[#FFD700]">
                {brewCount.toLocaleString()}
              </div>
              <button
                onClick={() => setBrewCount((prev) => prev + 1)}
                className="group relative px-12 py-8 bg-[#C1FF72] text-black border-4 border-black cartoon-shadow-white rounded-full font-black text-3xl active:scale-95 transition-all "
              >
                <span className="relative z-10">CLICK TO BREW</span>
                <div className="absolute inset-0 bg-white rounded-full scale-0 group-active:scale-110 transition-transform duration-200 opacity-50"></div>
              </button>
              <p className="text-sm font-black uppercase text-stone-500">
                Caffeine levels are critical!
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-30">
            {[...Array(brewCount % 20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                ☕
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
