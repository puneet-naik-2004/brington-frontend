import React, { useState, lazy, Suspense } from "react";
import Lock from "./Components/Lock";

// Lazy load all heavy components
const Hero = lazy(() => import("./Components/Hero"));
const Footer = lazy(() => import("./Components/Footer"));
const Speakers = lazy(() => import("./Components/Speakers"));
const LandingPage = lazy(() => import("./Components/LandingPage"));
const Scrolling = lazy(() => import("./Components/Scrolling"));
const Number = lazy(() => import("./Components/Number"));
const Service = lazy(() => import("./Components/Service"));
const HurdlesPage = lazy(() => import("./Components/HurdlesPage"));
const StatsPage = lazy(() => import("./Components/StatsPage"));
const Letter = lazy(() => import("./Components/Letter"));

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="App">
      {!isUnlocked ? (
        <Lock onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <Suspense fallback={<div className="loading">Loading...</div>}>
          {/* ✅ All components are lazy loaded */}
          <Hero />
          <Number />
          <StatsPage />
          <Service />
          <Scrolling />
          <HurdlesPage />
          <LandingPage />
          <Letter />
          <Speakers />
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default App;
