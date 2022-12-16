import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import Logo from "./Components/Logo.js";
import ImageLinkForm from './Components/ImageLinkForm'

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
      
      <ImageLinkForm/>
      
      {/* <FaceDetector/> */}
    </div>
  );
}
