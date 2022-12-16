import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import Logo from "./Components/Logo.js";
import ImageLinkForm from './Components/ImageLinkForm'
import Rank from "./Components/Rank.js";
 import ParticlesBg from 'particles-bg';

export default function App() {
  return (
    <div className="App">
      <ParticlesBg color="#ffffff" num={200} type="cobweb"  bg={true} />
      <Navigation />
      <Logo/>  
      <Rank/>    
      <ImageLinkForm/>      
      {/* <FaceDetector/> */}
    </div>
  );
}
