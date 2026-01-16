const Loading = () => {
  return (
    <div className="fixed inset-0 z-100 bg-[#FFD700] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <div className="relative mb-8">
        <div className="text-[120px] animate-bean inline-block">☕</div>
        <div className="absolute -top-4 -right-4 text-5xl animate-pulse">
          ✨
        </div>
      </div>
      <h2
        className="text-4xl font-black mb-4 uppercase tracking-tighter"
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
        Roasting the Beans...
      </h2>
      <div className="w-64 h-8 bg-white border-4 border-black rounded-full overflow-hidden cartoon-shadow p-1">
        <div className="h-full bg-[#FF5757] rounded-full loader-bar border-2 border-black"></div>
      </div>
      <div className="mt-6 font-black uppercase text-sm tracking-widest animate-pulse">
        Optimizing Caffeine Levels
      </div>

      <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">
        🎨
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">
        ⚡
      </div>
    </div>
  );
};

export default Loading;
