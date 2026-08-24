import React from "react";
import { Compass, BookOpen, Info } from "lucide-react";

function BottomNav({ currentView, onNavigate }) {
  const navItems = [
    { id: "home", label: "Home", icon: Compass },
    { id: "novena", label: "Novena", icon: BookOpen },
    { id: "about", label: "About", icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#c9a227]/20 bg-white/95 px-4 py-2 backdrop-blur-md md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id || (item.id === "novena" && currentView === "day");

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 py-1 transition-colors ${
                isActive ? "text-[#3b245c]" : "text-[#29232d]/50 hover:text-[#c9a227]"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] uppercase tracking-wider ${isActive ? "font-semibold" : "font-medium"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
