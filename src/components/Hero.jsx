import React from "react";

function Hero() {
  const handleScrollToNovena = () => {
    // Finds the 9-Day Novena section on the page and scrolls down to it smoothly
    const element = document.getElementById("novena");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center px-4 py-20 text-center sm:px-6 md:py-32 overflow-hidden rounded-b-3xl min-h-[75vh]"
    >
      
      
      

      {/* Foreground Content Card Area */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Sacred Icon Indicator */}
        <div className="animate-pulse text-3xl text-[#d96b27] mb-4 md:text-4xl md:mb-6">
          🕊️
        </div>

        {/* Main Title Header */}
        <h1 className="font-serif text-4xl font-semibold uppercase tracking-wide text-[#3b245c] sm:text-5xl md:text-6xl leading-tight">
          Come, Holy Spirit
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#c9a227] sm:text-xs md:text-sm px-2">
          9 Days of Prayer, Surrender and Renewal
        </p>

        {/* Decorative Thin Divider */}
        <div className="my-6 h-[1px] w-12 bg-[#c9a227]/60 md:my-8 md:w-16"></div>

        {/* Scripture Blockquote */}
        <blockquote className="font-serif text-lg italic leading-relaxed text-[#29232d] px-2 sm:px-4 md:text-2xl font-semibold">
          "Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love."
        </blockquote>

        {/* FIXED: Tapping this button slides the screen down directly to the cards below */}
        <button 
          onClick={handleScrollToNovena}
          className="mt-8 rounded-full bg-[#3b245c] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#faf7f0] shadow-xl shadow-[#3b245c]/30 transition-all hover:bg-[#d96b27] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Begin Novena →
        </button>
      </div>
    </section>
  );
}

export default Hero;
