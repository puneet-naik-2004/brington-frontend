import React from "react";
import "../Style/HurdlesPage.css";
import hurdlesImg from "../Images/Test Site Files Brington/imgi_37_0da768_a67d0929975d4901ae745f83646ddea7~mv2.png";

export default function HurdlesPage() {
  return (
    <div className="hurdles-container">
      {/* Top Section with Title + Header */}
      <div className="text-section">
        <h1 className="hurdles-title">ABOUT <br /> THE RACE</h1>

        <p className="hurdles-header">
          This is a race of yourself to yourself. <br />
          Fight the race! Develop the website. <br />
          Complete the task. <br />
          As a developer, it's Not That hard.
        </p>
      </div>

      {/* Images Section */}
      <div className="images-section">
        <img src={hurdlesImg} alt="Hurdle 1" className="hurdles-img img1" />
        <img src={hurdlesImg} alt="Hurdle 2" className="hurdles-img img2" />
        <img src={hurdlesImg} alt="Hurdle 3" className="hurdles-img img3" />
        <img src={hurdlesImg} alt="Hurdle 4" className="hurdles-img img4" />
        <img src={hurdlesImg} alt="Hurdle 5" className="hurdles-img img5" />
      </div>
    </div>
  );
}
