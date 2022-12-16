import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import Logo from "./Components/Logo.js";
import ImageLinkForm from './Components/ImageLinkForm'
import Rank from "./Components/Rank.js";
export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>  
      <Rank/>    
      <ImageLinkForm/>      
      {/* <FaceDetector/> */}
    </div>
  );
}
