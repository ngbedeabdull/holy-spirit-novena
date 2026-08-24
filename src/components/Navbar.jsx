import React from "react";

function Navbar({ onNavigateHome }) {
  return (
    <nav className="flex items-center justify-between border-b border-[#c9a227]/20 bg-[#faf7f0] px-4 py-4 md:px-12 sticky top-0 z-50">
      {/* Brand Emblem - Interactive home button */}
      <div 
        onClick={onNavigateHome}
        className="font-serif text-lg font-semibold tracking-wide text-[#3b245c] select-none cursor-pointer sm:text-xl"
      >
        🕊️ Holy Spirit Novena
      </div>

      {/* Desktop Link Layout - Hidden on mobile screens, reveals on md breakpoints */}
      <div className="hidden space-x-8 text-xs font-medium uppercase tracking-widest text-[#29232d]/80 md:flex">
        <button onClick={onNavigateHome} className="text-[#3b245c] font-bold transition hover:text-[#c9a227]">
          Home
        </button>
        <a href="#about" className="transition hover:text-[#c9a227]">
          About
        </a>
        <a href="#novena" className="transition hover:text-[#c9a227]">
          Novena
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
