import React from "react";

function IntroSection() {
  return (
    <section id="about" className="border-t border-[#c9a227]/10 bg-white/50 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        {/* Section Title */}
        <h2 className="font-serif text-3xl uppercase tracking-wide text-[#3b245c]">
          About the Novena
        </h2>
        
        {/* Subtle Decorative Anchor */}
        <div className="mx-auto my-4 h-[1px] w-12 bg-[#c9a227]/40"></div>

        {/* Narrative Context */}
        <p className="font-sans text-sm font-light leading-relaxed text-[#29232d]/80 md:text-base">
          The Novena to the Holy Spirit is a traditional Christian devotion leading up to Pentecost. 
          Over these nine consecutive days, we pray for the complete outpouring of the Holy Spirit, 
          inviting His divine fire to purify our hearts, grant us deep wisdom, and renew our daily lives.
        </p>
      </div>
    </section>
  );
}

export default IntroSection;
