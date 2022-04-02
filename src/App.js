import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Reference from "./Components/References";
import Forms from './Components/Forms';
import Footer from './Components/Footer';

const App=()=>{
  return(
    <>
    <Navbar />
    <Home />
    <AboutUs />
    <Portfolio />
    <Resume />
    <Reference />
    <Forms />
    <Footer />
    </>
  )
}

export default App;
