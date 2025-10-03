import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../Style/StatsPage.css";

gsap.registerPlugin(MotionPathPlugin);

export default function StatsPage() {
  const starRef = useRef(null);
  const numberRefs = useRef([]);

 
  const stats = [
    {
      number: "1,034",
      text: "Sample Data about Sample Things",
      style: { top: "40%", left: "45%" },
      path: "M 50,300 Q 200,50 350,300", 
    },
    {
      number: "2",
      text: "Sample Data about Sample Things",
      style: { top: "30%", left: "30%" },
      path: "M 10,200 Q 200,20 390,200", 
    },
    {
      number: "54",
      text: "Sample Data about Sample Things",
      style: { top: "50%", left: "55%" },
      path: "M 30,100 Q 200,250 370,100", 
    },
    {
      number: "25",
      text: "Sample Data about Sample Things",
      style: { top: "60%", left: "40%" },
      path: "M 20,150 Q 200,10 380,150", 
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });

    stats.forEach((stat, index) => {
      // Animate star along unique path
      tl.fromTo(
        starRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
      )
        .to(starRef.current, {
          duration: 3,
          motionPath: {
            path: `#path${index}`,
            align: `#path${index}`,
            autoRotate: true,
          },
        })
        .to(starRef.current, { opacity: 0, duration: 0.2 });

      // Animate number fade in/out
      tl.fromTo(
        numberRefs.current[index],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        "<" // sync
      ).to(numberRefs.current[index], { opacity: 0, duration: 1 }, "+=1");
    });
  }, []);

  return (
    <div className="stats-container">
      {/* Star */}
      <div ref={starRef} className="star"></div>

      {/* Numbers */}
      {stats.map((item, index) => (
        <div
          key={index}
          className="stat-item"
          style={item.style}
          ref={(el) => (numberRefs.current[index] = el)}
        >
          <h1 className="stat-number">{item.number}</h1>
          <p className="stat-text">{item.text}</p>

          {/* Path */}
          <svg className="curve" viewBox="0 0 400 300">
            <path
              id={`path${index}`}
              d={item.path}
              stroke="rgba(0,0,0,0.3)"
              strokeDasharray="6 6"
              fill="transparent"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
