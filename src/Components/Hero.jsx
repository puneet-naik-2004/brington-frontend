// // import React from "react";

// // export default function Hero() {
// //   return (
// //     <div className="relative h-screen w-full">
// //       {/* Top Navigation */}
// //       <nav className="absolute top-0 left-0 w-full bg-orange-600 p-4">
// //         <ul className="flex justify-end">
// //           <li className="text-white font-semibold">Home</li>
// //         </ul>
// //       </nav>

// //       {/* Background Image */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center"
// //         style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}
// //       ></div>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black opacity-50"></div>

// //       {/* Hero Content */}
// //       <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-4xl px-8 md:px-16">
// //         <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
// //           I am a Sample Website
// //         </h1>
// //         <p className="text-lg md:text-xl text-white mb-8">
// //           I'm a Sample Website, Create me as same as I am, Don't Do any Mistakes.
// //         </p>
// //         <button className="bg-purple-400 text-white px-6 py-3 rounded hover:bg-purple-500 transition">
// //           Get Started
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }




// import React from "react";
// import "../Style/Hero.css";

// export default function Hero() {
//   return (
//     <div className="hero">
//       <nav className="nav">
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>About</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       </nav>

//       <div className="hero-bg"></div>
//       <div className="hero-overlay"></div>

//       <div className="hero-content">
//         <h1>I am a Sample Website</h1>
//         <p>I'm a Sample Website. Create me exactly as I am. Pay attention to every detail.</p>
//         <button>Get Started</button>
//       </div>
//     </div>
//   );
// }



import React from "react";
import "../Style/Hero.css";

export default function HeroSection() {
  return (
    <div className="hero">
      {/* Header / Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          <li>Home</li>
        </ul>
      </nav>

      {/* Background Image */}
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>I am a Sample Website</h1>
        <p>
          I'm a Sample Website, Create me as same as I am, Don't Do any Mistakes.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
