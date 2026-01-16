import React from "react";

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#FFFAEC]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 border-4 border-black rounded-full shrink-0 flex items-center justify-center font-black text-2xl text-white bg-[#FF5757]">
            S
          </div>
          <div className="bg-white p-8 border-4 border-black rounded-tl-none cartoon-shadow relative rounded-[30px]">
            <p className="text-2xl font-black italic mb-2">
              "This place feels like walking into a cartoon and I never want to
              leave."
            </p>
            <span className="font-bold text-stone-400">
              — Seeya, Business Analysts
            </span>
            <div className="absolute -left-4 top-0 w-4 h-4 bg-white border-l-4 border-t-4 border-black origin-top-right -rotate-45"></div>
          </div>
        </div>
        <div className="flex items-start gap-4 flex-row-reverse text-right">
          <div className="w-16 h-16 bg-[#C1FF72] border-4 border-black rounded-full shrink-0 flex items-center justify-center font-black text-2xl">
            B
          </div>
          <div className="bg-white p-8 border-4 border-black rounded-tr-none cartoon-shadow relative text-black rounded-[30px]">
            <span className="font-bold text-stone-400">
              — Bivek, Future Human
            </span>
            <div className="absolute -right-4 top-0 w-4 h-4 bg-white border-r-4 border-t-4 border-black origin-top-left rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
