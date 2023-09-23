import React, { useState,useEffect } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import PromoBanner from './components/PromoBanner';
import SocialIcon from "./components/SocialIcon";
import Menu  from "./components/Menu";
import Footer from "./components/Footer";
import SubLinks from "./components/SubLinks";
import NetflixOriginal from "./components/NetflixOriginal";
import TredingNow from "./components/TredingNow";
import SocialNetworkLogos from "./components/SocialNetworkLogos";
import FilmList from './components/FilmList';

function App() {

  
  

  return (
    <div >
      <Menu/>
      <PromoBanner />
      <FilmList />
      <TredingNow/>
      <NetflixOriginal />
      <SocialIcon />
      <SocialNetworkLogos />
      <SubLinks />
      <Footer/>
    </div>
    
  );
}

export default App;