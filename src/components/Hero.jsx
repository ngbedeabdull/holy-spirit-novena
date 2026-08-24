import React from "react";

function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32">
      {/* Sacred Icon Indicator */}
      <div className="animate-pulse text-4xl text-[#d96b27] mb-6">
        🕊️
      </div>

      {/* Main Title Headers */}
      <h1 className="font-serif text-4xl font-semibold uppercase tracking-wide text-[#3b245c] md:text-6xl">
        Come, Holy Spirit
      </h1>

      <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#c9a227] md:text-sm">
        9 Days of Prayer, Surrender and Renewal
      </p>

      {/* Decorative Thin Divider */}
      <div className="my-8 h-[1px] w-16 bg-[#c9a227]/40"></div>

      {/* Scripture Blockquote */}
      <blockquote className="max-w-xl font-serif text-lg italic leading-relaxed text-[#29232d]/80 md:text-2xl">
        "Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love."
      </blockquote>

      {/* Primary Navigation Button */}
      <button className="mt-10 rounded-full bg-[#3b245c] px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-[#faf7f0] shadow-lg shadow-[#3b245c]/20 transition-all hover:bg-[#d96b27] hover:-translate-y-0.5">
        Begin Novena →
      </button>
    </section>
  );
}

export default Hero;
