import React from "react";

function PrayerMode({ dayData, onExit }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#29232d] p-6 text-[#faf7f0] md:p-12 overflow-y-auto select-none">
      {/* Top Section */}
      <div className="mx-auto w-full max-w-xl text-center pt-6">
        <div className="animate-pulse text-4xl text-[#c9a227] mb-3">
          {dayData.icon}
        </div>
        <span className="text-xs font-semibold tracking-widest text-[#c9a227]/70 uppercase">
          Day {dayData.id}
        </span>
        <h2 className="mt-1 font-serif text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl">
          {dayData.title}
        </h2>
        <div className="mx-auto my-6 h-[1px] w-12 bg-[#c9a227]/20"></div>
      </div>

      {/* Core Prayer Section */}
      <div className="mx-auto w-full max-w-xl my-auto space-y-8 px-2">
        <div className="border-l-2 border-[#c9a227]/40 pl-4 font-serif text-lg italic leading-relaxed text-[#faf7f0]/70 md:text-xl">
          "{dayData.scripture}"
        </div>
        
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a227]/60 block font-sans">
            The Prayer
          </span>
          {/* Fixed to cleanly render lines inside an array list layout with semantic padding */}
          <div className="font-serif text-xl font-medium leading-relaxed text-white md:text-2xl space-y-2">
            {dayData.prayer.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mx-auto w-full max-w-xl text-center pb-6">
        <span className="text-[10px] font-medium tracking-widest text-[#faf7f0]/40 uppercase block mb-4 font-sans">
          Pray in silence...
        </span>
        <button 
          onClick={onExit}
          className="rounded-full border border-[#faf7f0]/20 px-6 py-2.5 text-[10px] font-medium uppercase tracking-widest text-[#faf7f0]/80 transition-colors hover:border-white hover:text-white"
        >
          ← Exit Prayer Mode
        </button>
      </div>
    </div>
  );
}

export default PrayerMode;
