import React from "react";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Speakers from "./Components/Speakers";
import LandingPage from "./Components/LandingPage";
import Scrolling from "./Components/Scrolling";
import Number from "./Components/Number";
import Service from "./Components/Service";
import HurdlesPage from "./Components/HurdlesPage";
import StatsPage from "./Components/StatsPage";
import Letter from "./Components/Letter";
import Lock from "./Components/Lock";





function App() {
  return (
    <div className="App">
      <Hero />
       <Number/>
        <StatsPage/>
       <Service/>
        <Scrolling/>
       <HurdlesPage/>
         <LandingPage/>
        <Letter/>
        <Speakers/>
        <Footer/>
        {/* <Lock/> */}
    </div>
  );
}

export default App;
