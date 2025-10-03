// import "../Style/LandingPage.css";

// export default function LandingPage() {
//   return (
//     <div className="landing-page">
//       {/* Top-left text */}
//       <div className="top-left">
//         <h1 className="project-name">Project Name</h1>
//         <p className="client-name">Client Name</p>
//       </div>

//       {/* Top-right button */}
//       <button className="plus-btn">+</button>
//     </div>
//   );
// }




import { useState } from "react";
import "../Style/LandingPage.css";
import About from "./About";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="landing-page">
      {/* Top-left text */}
      <div className="top-left">
        <h1 className="project-name">Project Name</h1>
        <p className="client-name">Client Name</p>
      </div>

      {/* Top-right button (toggle) */}
      <button 
        className={`plus-btn ${showModal ? "active" : ""}`} 
        onClick={() => setShowModal(!showModal)}
      >
        {showModal ? "×" : "+"}   {/* changes icon */}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <About /> {/* ✅ Renders About page inside modal */}
          </div>
        </div>
      )}
    </div>
  );
}
