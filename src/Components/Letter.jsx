


// import React, { useState } from "react";
// import "../Style/Letter.css";


// import A_IMG from "../Images/Test Site Files Brington/A_font.png";
// import B_IMG from "../Images/Test Site Files Brington/B_font.png";
// import C_IMG from "../Images/Test Site Files Brington/C_font.png";
// import D_IMG from "../Images/Test Site Files Brington/D_font.png";
// import E_IMG from "../Images/Test Site Files Brington/E_font.png";
// import F_IMG from "../Images/Test Site Files Brington/F_font.png";

// // Import background images
// import A_BG from "../Images/Test Site Files Brington/imgi_5_Frame-15.jpg";
// import B_BG from "../Images/Test Site Files Brington/imgi_7_Frame-16.jpg";
// import C_BG from "../Images/Test Site Files Brington/imgi_9_Frame-17.jpg";
// import D_BG from "../Images/Test Site Files Brington/imgi_11_Frame-18.jpg";
// import E_BG from "../Images/Test Site Files Brington/imgi_13_Frame-19.jpg";
// import F_BG from "../Images/Test Site Files Brington/imgi_15_Frame-20.jpg";

// const letters = [
//   { id: "A", img: A_IMG, background: A_BG },
//   { id: "B", img: B_IMG, background: B_BG },
//   { id: "C", img: C_IMG, background: C_BG },
//   { id: "D", img: D_IMG, background: D_BG },
//   { id: "E", img: E_IMG, background: E_BG },
//   { id: "F", img: F_IMG, background: F_BG },
// ];

// export default function App() {
//   const [activeLetter, setActiveLetter] = useState("A");

//   const activeData = letters.find((l) => l.id === activeLetter);

//   return (
//     <div className="container">

      
//       {/* Left Panel: background + letter image */}
//       <div
//         key={activeData.id}
//         className="left-panel fade-bg"
//         style={{ backgroundImage: `url(${activeData.background})` }}
//       >
//         <img src={activeData.img} alt={activeData.id} className="big-letter-img" />
//       </div>

//       {/* Right Panel: normal text letters */}
//       <div className="right-panel">
//         {letters.map((letter) => (
//           <div
//             key={letter.id}
//             className={`letter-text ${activeLetter === letter.id ? "selected" : ""}`}
//             onClick={() => setActiveLetter(letter.id)}
//           >
//             {letter.id}
//           </div>
//         ))}

//         <div className="project-info">
//           <h3>A–Z PROJECT</h3>
//           <p>
//             It’s over to you. Download our library of transparent video letters
//             and add them to your next project.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../Style/Letter.css";

import A_IMG from "../Images/Test Site Files Brington/A_font.png";
import B_IMG from "../Images/Test Site Files Brington/B_font.png";
import C_IMG from "../Images/Test Site Files Brington/C_font.png";
import D_IMG from "../Images/Test Site Files Brington/D_font.png";
import E_IMG from "../Images/Test Site Files Brington/E_font.png";
import F_IMG from "../Images/Test Site Files Brington/F_font.png";

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

export default function Letter() {
  const [activeLetter, setActiveLetter] = useState("A");
  const letterRefs = useRef([]);
  const bigImgRef = useRef(null);
  const leftPanelRef = useRef(null);
  const infoRef = useRef(null);

  // initial stagger-in for letters + info and left panel fade
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(leftPanelRef.current, { opacity: 0, scale: 0.98, duration: 0.8 }, 0);
      tl.from(letterRefs.current, {
        opacity: 0,
        y: 26,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.12,
      }, 0.15);
      tl.from(infoRef.current, { opacity: 0, y: 30, duration: 0.9 }, "-=0.2");
    }, leftPanelRef);

    return () => ctx.revert && ctx.revert();
  }, []);

  // animate big image when activeLetter changes (pop + re-trigger rotation/bob)
  useEffect(() => {
    if (!bigImgRef.current) return;

    // clear previous tweens on big image
    gsap.killTweensOf(bigImgRef.current);

    // pop-in animation
    const tl = gsap.timeline();
    tl.fromTo(
      bigImgRef.current,
      { opacity: 0, scale: 0.68, rotation: 0 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.6)" }
    );

    // gentle slow rotation (infinite) + subtle bob
    gsap.to(bigImgRef.current, {
      rotation: 360,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
    gsap.to(bigImgRef.current, {
      y: -8,
      duration: 2.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 0.1,
    });

    // small single-frame highlight on left panel background for polish
    gsap.fromTo(leftPanelRef.current,
      { filter: "brightness(0.96)" },
      { filter: "brightness(1.02)", duration: 0.6, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );

    return () => {
      // don't leave additional infinite tweens if component unmounts
      gsap.killTweensOf(bigImgRef.current);
    };
  }, [activeLetter]);

  const activeData = letters.find((l) => l.id === activeLetter);

  return (
    <div className="letter-page">
      <div
        ref={leftPanelRef}
        key={activeData.id}
        className="left-panel fade-bg"
        style={{ backgroundImage: `url(${activeData.background})` }}
      >
        <img
          ref={bigImgRef}
          src={activeData.img}
          alt={activeData.id}
          className="big-letter-img"
          draggable={false}
        />
      </div>

      <div className="right-panel">
        {letters.map((letter, i) => (
          <div
            key={letter.id}
            ref={(el) => (letterRefs.current[i] = el)}
            className={`letter-text ${activeLetter === letter.id ? "selected" : ""}`}
            onClick={() => setActiveLetter(letter.id)}
            role="button"
            aria-pressed={activeLetter === letter.id}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActiveLetter(letter.id);
              }
            }}
          >
            {letter.id}
          </div>
        ))}

        <div className="project-info" ref={infoRef}>
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
