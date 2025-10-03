


import React, { useState } from "react";
import "../Style/Letter.css";


import A_IMG from "../Images/Test Site Files Brington/A_font.png";
import B_IMG from "../Images/Test Site Files Brington/B_font.png";
import C_IMG from "../Images/Test Site Files Brington/C_font.png";
import D_IMG from "../Images/Test Site Files Brington/D_font.png";
import E_IMG from "../Images/Test Site Files Brington/E_font.png";
import F_IMG from "../Images/Test Site Files Brington/F_font.png";

// Import background images
import A_BG from "../Images/Test Site Files Brington/imgi_5_Frame-15.jpg";
import B_BG from "../Images/Test Site Files Brington/imgi_7_Frame-16.jpg";
import C_BG from "../Images/Test Site Files Brington/imgi_9_Frame-17.jpg";
import D_BG from "../Images/Test Site Files Brington/imgi_11_Frame-18.jpg";
import E_BG from "../Images/Test Site Files Brington/imgi_13_Frame-19.jpg";
import F_BG from "../Images/Test Site Files Brington/imgi_15_Frame-20.jpg";

const letters = [
  { id: "A", img: A_IMG, background: A_BG },
  { id: "B", img: B_IMG, background: B_BG },
  { id: "C", img: C_IMG, background: C_BG },
  { id: "D", img: D_IMG, background: D_BG },
  { id: "E", img: E_IMG, background: E_BG },
  { id: "F", img: F_IMG, background: F_BG },
];

export default function App() {
  const [activeLetter, setActiveLetter] = useState("A");

  const activeData = letters.find((l) => l.id === activeLetter);

  return (
    <div className="container">

      
      {/* Left Panel: background + letter image */}
      <div
        key={activeData.id}
        className="left-panel fade-bg"
        style={{ backgroundImage: `url(${activeData.background})` }}
      >
        <img src={activeData.img} alt={activeData.id} className="big-letter-img" />
      </div>

      {/* Right Panel: normal text letters */}
      <div className="right-panel">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className={`letter-text ${activeLetter === letter.id ? "selected" : ""}`}
            onClick={() => setActiveLetter(letter.id)}
          >
            {letter.id}
          </div>
        ))}

        <div className="project-info">
          <h3>A–Z PROJECT</h3>
          <p>
            It’s over to you. Download our library of transparent video letters
            and add them to your next project.
          </p>
        </div>
      </div>
    </div>
  );
}
