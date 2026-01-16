import { Clock, MapPin } from "lucide-react";
import React from "react";

const Locate = () => {
  return (
    <section id="locate" className="py-24 px-6 scroll-mt-24 bg-[#FFBD59]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-white border-8 rounded-[50px] border-black p-8 cartoon-shadow relative overflow-hidden flex items-center justify-center h-100">
            <div className="absolute inset-0 bg-blue-100 opacity-20"></div>
            <div className="z-10 text-center">
              <MapPin size={80} className="mx-auto mb-4 text-[#FF5757]" />
              <p className="font-black text-2xl uppercase">MAP GOES HERE</p>
              <p className="font-bold text-stone-500">
                (But the vibes are everywhere)
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-6xl font-black mb-8 uppercase leading-none">
            Teleport <br /> to us!
          </h2>
          <div className="space-y-6">
            <div className="bg-white hover:scale-110 transition-all cursor-pointer p-6 border-4 border-black cartoon-shadow rounded-2xl flex items-center gap-6">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center text-white bg-[#8C52FF]">
                <MapPin />
              </div>
              <div>
                <p className="font-black text-lg">THE Biratnagar Downtown</p>
                <p className="font-bold text-stone-500 text-sm">
                  404 VIBE STREET, CREATIVITY DISTRICT
                </p>
              </div>
            </div>
            <div className="bg-white hover:scale-110 transition-all cursor-pointer p-6 border-4 border-black cartoon-shadow rounded-2xl flex items-center gap-6">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-[#C1FF72]">
                <Clock />
              </div>
              <div>
                <p className="font-black text-lg">OPEN HOURS</p>
                <p className="font-bold text-stone-500 text-sm">
                  8AM - 12AM (NEVER SLEEP MODE)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locate;
