import React from "react";
// import "./style.css";
import Navigation from "./Components/Navigation.js";
import Logo from "./Components/Logo.js"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
      {/* <ImageLinkForm/>
      <FaceDetector/> */}
    </div>
  );
}
