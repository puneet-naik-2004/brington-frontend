import "../Style/Speakers.css";
import speakerImg1 from "../Images/Test Site Files Brington/Speaker1.jpg";
import speakerImg2 from "../Images/Test Site Files Brington/Speaker2.jpg";
import speakerImg3 from "../Images/Test Site Files Brington/Speaker3.jpg";
import speakerImg4 from "../Images/Test Site Files Brington/Speaker4.jpg";
import speakerImg5 from "../Images/Test Site Files Brington/Speaker5.jpg";
import speakerImg6 from "../Images/Test Site Files Brington/Speaker6.jpg";
import speakerImg7 from "../Images/Test Site Files Brington/Speaker7.jpg";
import speakerImg8 from "../Images/Test Site Files Brington/Speaker8.jpg";



export default function Speakers() {
  const speakers = [
    {
      name: "Harry Williams",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg1,
      linkedin: "#",
    },
    {
      name: "Akira Lee",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg2,
      linkedin: "#",
    },
    {
      name: "Veronika Zakharova",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg3,
      linkedin: "#",
    },
    {
      name: "Ann Jacobs",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg4,
      linkedin: "#",
    },
    {
      name: "Lissa Cross",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg5,
      linkedin: "#",
    },
    {
      name: "Murty Yang",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg6,
      linkedin: "#",
    },
     {
      name: "Murty Yang",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg7,
      linkedin: "#",
    },
     {
      name: "Murty Yang",
      role: "Director of Mobile Gaming, Fixer",
      img: speakerImg8,
      linkedin: "#",
    },
  ];

  return (
    <section className="speakers-section">
      <h2 className="speakers-title">Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img src={speaker.img} alt={speaker.name} className="speaker-img" />
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p>{speaker.role}</p>
            </div>
            <a href={speaker.linkedin} className="linkedin-btn">LinkedIn</a>
          </div>
        ))}
      </div>
    </section>
  );
}
