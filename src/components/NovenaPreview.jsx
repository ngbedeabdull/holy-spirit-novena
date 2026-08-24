import React from "react";
import { novenaDays } from "./novenaData";

function NovenaPreview({ onSelectDay, completedDays = [] }) {
  return (
    <section id="novena" className="border-t border-[#c9a227]/10 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl uppercase tracking-wide text-[#3b245c]">
            9-Day Novena
          </h2>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#c9a227]">
            Your journey of prayer
          </p>
        </div>

        {/* Dashboard Grid Map */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {novenaDays.map((day) => {
            const isDone = completedDays.includes(day.id);
            return (
              <div 
                key={day.id} 
                onClick={() => onSelectDay(day.id)}
                className="group flex flex-col justify-between rounded-2xl border border-[#c9a227]/10 bg-white p-6 transition-all duration-300 hover:border-[#c9a227]/30 hover:shadow-md cursor-pointer relative overflow-hidden"
              >
                {/* Visual Checkmark indicator */}
                {isDone && (
                  <div className="absolute top-4 right-4 text-xs font-semibold tracking-wider text-[#c9a227] uppercase">
                    ✓ Done
                  </div>
                )}

                <div className="space-y-3">
                  <span className="text-xs font-semibold tracking-widest text-[#c9a227] uppercase">
                    Day {day.id}
                  </span>
                  
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    {day.icon}
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium text-[#3b245c] transition-colors group-hover:text-[#d96b27]">
                    {day.title}
                  </h3>
                  
                  <p className="font-serif text-xs italic text-[#29232d]/60">
                    {day.theme}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NovenaPreview;
