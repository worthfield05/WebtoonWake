import { ShoppingBag } from "lucide-react";
const drinks = [
  {
    id: "neon-matcha",
    name: "Electric Matcha",
    color: "bg-[#C1FF72]",
    accent: "text-[#2D5A27]",
    sticker: "⚡",
    desc: "Whisked with pure energy and a touch of neon magic.",
    tag: "ENERGY",
  },
  {
    id: "space-cold-brew",
    name: "Cosmic Cold Brew",
    color: "bg-[#FF91FF]",
    accent: "text-[#5E1B5E]",
    sticker: "🚀",
    desc: "Steeped for 24 hours in a zero-gravity simulated environment.",
    tag: "LIMITLESS",
  },
  {
    id: "sunset-chai",
    name: "Cloud Nine Chai",
    color: "bg-[#FFBD59]",
    accent: "text-[#8C52FF]",
    sticker: "☁️",
    desc: "Tastes like a sunset condensed into a creamy, spicy dream.",
    tag: "DREAMY",
  },
];
const Menu = () => {
  return (
    <section id="menu" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-1 bg-black grow"></div>
          <h2 className="text-5xl font-black uppercase shrink-0">Liquid Art</h2>
          <div className="h-1 bg-black grow"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className={`group p-8 border-4 border-black cartoon-shadow rounded-[40px] ${drink.color} relative overflow-hidden transition-all hover:-translate-y-4`}
            >
              <div className="absolute top-4 right-4 text-4xl">
                {drink.sticker}
              </div>
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black rounded-full mb-6">
                {drink.tag}
              </div>
              <h3
                className={`text-4xl font-black mb-4 leading-none ${drink.accent}`}
              >
                {drink.name}
              </h3>
              <p className="font-bold mb-8 text-black/70">{drink.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black">Rs. 250</span>
                <button className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <ShoppingBag />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 text-[180px] opacity-10 pointer-events-none group-hover:rotate-45 transition-transform duration-700">
                ☕
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
