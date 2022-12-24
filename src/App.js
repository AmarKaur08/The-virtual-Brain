import React,{Component} from "react";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import Logo from "./Components/Logo.js";
import ImageLinkForm from './Components/ImageLinkForm'
import Rank from "./Components/Rank.js";
 import ParticlesBg from 'particles-bg';

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }
  onInputChange=(event)=>
  {
    console.log(event.target.value);
  }
  onButtonSubmit=()=>{
  console.log('click');
  }
  render(){
  return (
    <div className="App">
      <ParticlesBg color="#ffffff" num={200} type="cobweb"  bg={true} />
      <Navigation />
      <Logo/>  
      <Rank/>    
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>      
      {/* <FaceDetector/> */}
    </div>
  );
  }
}
export default App;
