import { Star, Zap } from "lucide-react";

const Rewards = () => {
  return (
    <section
      id="rewards"
      className="py-24 px-6 bg-[#8C52FF] text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto border-8 border-black p-12 rounded-[60px] bg-white text-black cartoon-shadow relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-400 border-4 border-black px-8 py-4 rounded-full font-black text-xl -rotate-2">
          LEVEL UP YOUR SIPS!
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-5xl font-black mb-6 uppercase"
              style={{ fontFamily: "Bungee" }}
            >
              Join the Bean Squad
            </h2>
            <p className="text-xl font-bold mb-8">
              Earn "Webtoon Points" with every purchase and unlock secret menu
              items, holographic stickers, and free refills.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Free Coffee on Birthday",
                "Priority Line Access",
                "Invites to Cupping Parties",
              ].map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 font-black uppercase text-sm"
                >
                  <Zap className="text-yellow-500 fill-yellow-500" size={20} />{" "}
                  {perk}
                </li>
              ))}
            </ul>
            <button className="w-full py-6 bg-black text-white text-2xl font-black rounded-2xl hover:scale-[1.02] transition-transform">
              CREATE ACCOUNT
            </button>
          </div>
          <div className="bg-[#FFFAEC] border-4 border-black p-8 rounded-[40px] relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <span className="font-black">YOUR LEVEL:</span>
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-black">
                NOVICE BREWER
              </span>
            </div>
            <div className="w-full bg-stone-200 h-12 rounded-full border-4 border-black overflow-hidden relative">
              <div
                className="bg-[#FF5757] h-full transition-all duration-1000"
                style={{ width: "40%" }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center font-black">
                400 / 1000 XP
              </span>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-lg border-2 border-black flex items-center justify-center ${
                    i <= 3 ? "bg-yellow-400" : "bg-white"
                  }`}
                >
                  <Star size={20} fill={i <= 3 ? "black" : "none"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
