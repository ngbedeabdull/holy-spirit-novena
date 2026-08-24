import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import NovenaPreview from "./components/NovenaPreview";
import NovenaDay from "./components/NovenaDay";
import BottomNav from "./components/BottomNav";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedDayId, setSelectedDayId] = useState(1);
  
  // Load initial progress state directly from LocalStorage
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem("novenaProgress");
    return saved ? JSON.parse(saved) : [];
  });

  // Automatically synchronize progress state to LocalStorage on changes
  useEffect(() => {
    localStorage.setItem("novenaProgress", JSON.stringify(completedDays));
  }, [completedDays]);

  const toggleDayComplete = (dayId) => {
    setCompletedDays((prev) =>
      prev.includes(dayId) ? prev.filter((id) => id !== dayId) : [...prev, dayId]
    );
  };

  const handleSelectDay = (id) => {
    setSelectedDayId(id);
    setCurrentView("day");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#29232d] pb-16 md:pb-0">
      <Navbar onNavigateHome={() => handleNavigation("home")} />

      <main>
        {currentView === "home" && (
          <>
            <Hero onBeginNovena={() => handleNavigation("novena")} />
            <IntroSection />
          </>
        )}

        {(currentView === "home" || currentView === "novena") && (
          <NovenaPreview onSelectDay={handleSelectDay} />
        )}

        {currentView === "day" && (
          <NovenaDay 
            dayId={selectedDayId} 
            completedDays={completedDays}
            onToggleComplete={toggleDayComplete}
            onBack={() => handleNavigation("novena")} 
          />
        )}

        {currentView === "about" && <IntroSection />}
      </main>

      <footer className="border-t border-[#c9a227]/20 bg-[#21152f] px-6 py-8 text-center text-sm text-white/70 mb-16 md:mb-0">
        <p>© {new Date().getFullYear()} Holy Spirit Novena</p>
        <p className="mt-2 text-white/50">Come, Holy Spirit. Renew the face of the earth.</p>
      </footer>

      <BottomNav currentView={currentView} onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
