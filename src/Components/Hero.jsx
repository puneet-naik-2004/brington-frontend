



import React from "react";
import "../Style/Hero.css";

export default function HeroSection() {
  return (
    <div className="hero">
      {/* Header / Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          <li>Home</li>
        </ul>
      </nav>

      {/* Background Image */}
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>I am a Sample Website</h1>
        <p>
          I'm a Sample Website, Create me as same as I am, Don't Do any Mistakes.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
