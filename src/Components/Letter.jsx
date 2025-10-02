// import React, { useState } from "react";
// import "../Style/Letter.css";

// // Import your letter images
// import A from "../Images/Test Site Files Brington/A_font.png";
// import B from "../Images/Test Site Files Brington/B_font.png";
// import C from "../Images/Test Site Files Brington/C_font.png";
// import D from "../Images/Test Site Files Brington/D_font.png";
// import E from "../Images/Test Site Files Brington/E_font.png";
// import F from "../Images/Test Site Files Brington/F_font.png";

// const letters = [
//   { id: "A", img: A },
//   { id: "B", img: B },
//   { id: "C", img: C },
//   { id: "D", img: D },
//   { id: "E", img: E },
//   { id: "F", img: F },
// ];

// export default function App() {
//   const [activeLetter, setActiveLetter] = useState("A");

//   return (
//     <div className="container">
//       {/* Left Side: Letter Image */}
//       <div className="left-panel">
//         {letters.map((letter) => (
//           <img
//             key={letter.id}
//             src={letter.img}
//             alt={letter.id}
//             className={activeLetter === letter.id ? "active" : ""}
//           />
//         ))}
//       </div>

//       {/* Right Side: Letter Buttons */}
//       <div className="right-panel">
//         {letters.map((letter) => (
//           <div
//             key={letter.id}
//             className={`letter ${activeLetter === letter.id ? "selected" : ""}`}
//             onClick={() => setActiveLetter(letter.id)}
//           >
//             {letter.id}
//           </div>
//         ))}

//         <div className="project-info">
//           <h3>A–Z PROJECT</h3>
//           <p>Click a letter to see its design</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "../Style/Letter.css";

// Import your letter images (small thumbnail)
import A from "../Images/Test Site Files Brington/A_font.png";
import B from "../Images/Test Site Files Brington/B_font.png";
import C from "../Images/Test Site Files Brington/C_font.png";
import D from "../Images/Test Site Files Brington/D_font.png";
import E from "../Images/Test Site Files Brington/E_font.png";
import F from "../Images/Test Site Files Brington/F_font.png";

// Import background images (big preview)
import A_BG from "../Images/Test Site Files Brington/imgi_5_Frame-15.jpg";
import B_BG from "../Images/Test Site Files Brington/imgi_7_Frame-16.jpg";
import C_BG from "../Images/Test Site Files Brington/imgi_9_Frame-17.jpg";
import D_BG from "../Images/Test Site Files Brington/imgi_11_Frame-18.jpg";
import E_BG from "../Images/Test Site Files Brington/imgi_13_Frame-19.jpg";
import F_BG from "../Images/Test Site Files Brington/imgi_15_Frame-20.jpg";

const letters = [
  { id: "A", thumb: A, background: A_BG },
  { id: "B", thumb: B, background: B_BG },
  { id: "C", thumb: C, background: C_BG },
  { id: "D", thumb: D, background: D_BG },
  { id: "E", thumb: E, background: E_BG },
  { id: "F", thumb: F, background: F_BG },
];

export default function App() {
  const [activeLetter, setActiveLetter] = useState("A");

  // Find the active letter object
  const activeData = letters.find((l) => l.id === activeLetter);

  return (
    <div className="container">
      {/* Left Side: Big Background Image */}
      <div
        className="left-panel"
        style={{
          backgroundImage: `url(${activeData.background})`,
        }}
      >
        <h1 className="big-letter">{activeData.id}</h1>
      </div>

      {/* Right Side: Letter Buttons */}
      <div className="right-panel">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className={`letter ${activeLetter === letter.id ? "selected" : ""}`}
            onClick={() => setActiveLetter(letter.id)}
            style={{ backgroundImage: `url(${letter.thumb})` }}
          ></div>
        ))}

        <div className="project-info">
          <h3>A–Z PROJECT</h3>
          <p>It’s over to you. Download our library of transparent video letters and add them to your next project.</p>
        </div>
      </div>
    </div>
  );
}
