import React from 'react';
import '../Styling/Logo.css';
import Tilt from "react-parallax-tilt";
// import './creativity.png'
const Logo=()=>{
  return(
    <Tilt>
      <div className="logodecor">
        <img src="https://previews.123rf.com/images/lumut/lumut1702/lumut170201633/72830468-brain-logo-template.jpg" alt="logo"/>        
      </div>
    </Tilt>
  );
}
export default Logo