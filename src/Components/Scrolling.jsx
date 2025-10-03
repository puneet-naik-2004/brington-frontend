import "../Style/Scrolling.css";
import logo from "../Images/Test Site Files Brington/download (3).svg"; 

export default function Scrolling() {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {/* repeat logo + text */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="scroll-item">
            <img src={logo} alt="HURDELS Logo" className="scroll-logo" />
            HURDELS
          </span>
        ))}
      </div>
    </div>
  );
}
