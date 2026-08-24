import React, { useState } from "react";
import { novenaDays, openingPrayer } from "./novenaData";
import PrayerMode from "./PrayerMode";

function NovenaDay({ dayId, setDayId, completedDays, onToggleComplete, onBack }) {
  const [isPrayerMode, setIsPrayerMode] = useState(false);
  const dayData = novenaDays.find((d) => d.id === dayId);

  if (!dayData) return null;

  const isCompleted = completedDays.includes(dayId);

  if (isPrayerMode) {
    return <PrayerMode dayData={dayData} onExit={() => setIsPrayerMode(false)} />;
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      {/* Top Navigation Strip */}
      <div className="mb-8 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-[#c9a227]">
        <button onClick={onBack} className="hover:text-[#3b245c] transition">
          ← Back to Overview
        </button>
        <span>Day {dayId} of 9</span>
      </div>

      {/* Main Header Container */}
      <div className="rounded-3xl bg-[#3b245c] p-8 text-center text-[#faf7f0] md:p-12 shadow-sm">
        <div className="text-5xl mb-4">{dayData.icon}</div>
        <h2 className="font-serif text-2xl font-semibold uppercase tracking-wide md:text-3xl">
          {dayData.title}
        </h2>
        <p className="mt-1 text-xs italic text-[#faf7f0]/60 font-serif">Theme: {dayData.theme}</p>
      </div>

      {/* Structured Prayer Content */}
      <div className="mt-10 space-y-10 font-sans">
        
        {/* Global Opening Devotion */}
        <div className="rounded-2xl border border-[#c9a227]/10 bg-white p-6 shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a227] mb-2">{openingPrayer.title}</h4>
          <p className="text-xs italic text-[#29232d]/60 font-serif mb-4">{openingPrayer.signOfCross}</p>
          <div className="space-y-2 font-serif text-base text-[#29232d]/90 leading-relaxed italic">
            {openingPrayer.body.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Scripture Reading */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a227]">Scripture</h4>
          <blockquote className="font-serif text-lg italic leading-relaxed text-[#29232d]/90 border-l-2 border-[#c9a227] pl-4">
            {dayData.scripture}
          </blockquote>
        </div>

        {/* Reflection text */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a227]">Reflection</h4>
          <p className="text-sm font-light leading-relaxed text-[#29232d]/80 md:text-base">
            {dayData.reflection}
          </p>
        </div>

        {/* Daily Intrinsic Prayer Box */}
        <div className="rounded-2xl border border-[#c9a227]/10 bg-white p-6 shadow-sm space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a227]">The Daily Prayer</h4>
          <div className="font-serif text-lg text-[#3b245c] leading-relaxed italic space-y-2 font-medium">
            {dayData.prayer.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Specific Intention Block */}
        <div className="border-l-2 border-[#d96b27] pl-4 py-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#29232d]/50 block">Today's Intention</span>
          <p className="text-sm font-medium text-[#29232d]/90 mt-0.5">{dayData.intention}</p>
        </div>

        {/* Traditional Rosary Prayers Reminder Box */}
        <div className="rounded-xl bg-[#21152f]/5 p-4 border border-[#3b245c]/10 text-center font-serif italic text-sm text-[#3b245c]/80 flex justify-center gap-6">
          <span>Our Father...</span>
          <span>Hail Mary...</span>
          <span>Glory Be...</span>
        </div>

        {/* Trigger Mode Button */}
        <div className="pt-2 text-center">
          <button 
            onClick={() => setIsPrayerMode(true)}
            className="rounded-full bg-[#d96b27] px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-[#faf7f0] shadow-md shadow-[#d96b27]/20 transition hover:bg-[#3b245c]"
          >
            ✨ Enter Prayer Mode
          </button>
        </div>

        {/* Action Checkbox Footer */}
        <div className="border-t border-[#c9a227]/10 pt-8 flex items-center justify-between gap-4 flex-col sm:flex-row text-center sm:text-left">
          <p className="text-xs font-medium text-[#29232d]/60">Have you finished praying today's prayers?</p>
          <button
            onClick={() => onToggleComplete(dayData.id)}
            className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              isCompleted ? "bg-[#c9a227] text-white" : "border border-[#29232d]/20 text-[#29232d]/70 hover:border-[#3b245c]"
            }`}
          >
            {isCompleted ? "✓ Completed" : "Mark as Done"}
          </button>
        </div>

        {/* Day Paddles */}
        <div className="border-t border-[#c9a227]/10 pt-6 flex justify-between items-center text-xs tracking-widest uppercase font-semibold">
          <button
            disabled={dayId === 1}
            onClick={() => { setDayId((p) => p - 1); window.scrollTo({ top: 0 }); }}
            className={`transition ${dayId === 1 ? "opacity-20 cursor-not-allowed" : "text-[#3b245c] hover:text-[#d96b27]"}`}
          >
            ← Previous Day
          </button>
          
          <button
            disabled={dayId === 9}
            onClick={() => { setDayId((p) => p + 1); window.scrollTo({ top: 0 }); }}
            className={`transition ${dayId === 9 ? "opacity-20 cursor-not-allowed" : "text-[#3b245c] hover:text-[#d96b27]"}`}
          >
            Next Day →
          </button>
        </div>

      </div>
    </section>
  );
}

export default NovenaDay;
