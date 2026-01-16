import { Coffee, Flame, Ghost, Smile, Sparkles } from "lucide-react";
const stickers = [
  { label: "YUMMY!", color: "bg-[#FF5757]", rotate: "-5deg", icon: <Smile /> },
  { label: "COFFEE!", color: "bg-[#FFBD59]", rotate: "3deg", icon: <Coffee /> },
  {
    label: "CREATIVE",
    color: "bg-[#C1FF72]",
    rotate: "-2deg",
    icon: <Sparkles />,
  },
  { label: "RADICAL", color: "bg-[#8C52FF]", rotate: "8deg", icon: <Flame /> },
  { label: "FROTHY", color: "bg-[#FF91FF]", rotate: "-4deg", icon: <Ghost /> },
];
const Sticker = () => {
  return (
    <section
      id="sticker"
      className="py-24 relative overflow-hidden scroll-mt-24 bg-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-center text-5xl font-black mb-20 uppercase">
          The Sticker Wall
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stickers.map((sticker, i) => (
            <div
              key={i}
              className={`${sticker.color}  p-12 border-4 border-black cartoon-shadow flex flex-col items-center justify-center font-black text-2xl text-center sticker-hover transition-all cursor-pointer`}
              style={{ transform: `rotate(${sticker.rotate})` }}
            >
              <div className="mb-2">{sticker.icon}</div>
              <div className="group-hover:wiggle inline-block leading-tight">
                {sticker.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sticker;
