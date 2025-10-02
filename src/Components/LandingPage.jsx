import "../Style/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Top-left text */}
      <div className="top-left">
        <h1 className="project-name">Project Name</h1>
        <p className="client-name">Client Name</p>
      </div>

      {/* Top-right button */}
      <button className="plus-btn">+</button>
    </div>
  );
}
