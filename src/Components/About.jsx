import React from "react";
import "../Style/About.css";
import SampleImg from "../Images/Test Site Files Brington/imgi_3_11062b_36ee1ae10e6b4421bf01f123cc06c130f000.jpg"; 

export default function ProjectCard() {
  return (
    <div className="project-section">
      <div className="project-card">
        {/* Left Image Box */}
        <div className="project-image">
          <img src={SampleImg} alt="Project" />
        </div>

        {/* Right Content Box */}
        <div className="project-content">
          <p>
            Share information on a previous project here to attract new clients.
            To help visitors understand the context and background of the work,
            provide a brief summary. Include the project’s time frame and scope,
            as well as its goals and outcome.
          </p>
          <p>
            Add details about why this project was created and what makes it
            significant. Explain how the business handled challenges and
            overcame obstacles to make this undertaking a success. Consider
            adding images or videos to showcase the project and engage viewers.
          </p>

          <a href="#" className="learn-more">Learn More &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
}
