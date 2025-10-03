


import "../Style/Service.css";
import CircleImg from "../Images/Test Site Files Brington/download (1).svg";  
import InnerImg from "../Images/Test Site Files Brington/imgi_3_Peca App.png"; 
import BgImg from "../Images/Test Site Files Brington/imgi_2_c837a6_672a051f666445959989095dc2028431~mv2.jpg";        // background image

export default function ServicesSection() {
  return (
   <div 
   className="services-container"
    style={{ 
     backgroundImage: `url(${BgImg})`,
     backgroundSize: "cover", 
     backgroundPosition: "center",
      backgroundRepeat: "no-repeat", 
      width: "auto",
       minHeight: "100vh",
       display: "flex", 
       justifyContent: "center", 
       alignItems: "center",
       }}
    >
      <div className="services-content">
        <h1 className="title">Accomplish Anything in Developing</h1>

        {/* Header */}
        <p className="services-header">
          This is the space to introduce the Services section. Briefly describe
          the types of services offered and highlight any special benefits or
          features.
        </p>

       
        <div className="services-grid">
         
          <div className="services-list">
            <div className="list-item">✔ Sample Text 1</div>
            <div className="list-item">✔ Sample Text</div>
            <div className="list-item">✔ Sample Text</div>
          </div>

        
          <div className="services-icon">
            <div className="icon-circle">
              <img src={CircleImg} alt="Outer Circle" className="outer-img" />
              <img src={InnerImg} alt="Inner Icon" className="inner-img" />
            </div>
          </div>

        
          <div className="services-list">
            <div className="list-item">✔ Sample Text</div>
            <div className="list-item">✔ Sample Text</div>
            <div className="list-item">✔ Sample Text</div>
          </div>
        </div>

      
        <div className="services-button">
          <button>Create Now!</button>
        </div>
      </div>
    </div>
  );
}

