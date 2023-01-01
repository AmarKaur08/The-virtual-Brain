import React,{Component} from "react";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import SignIn from "./Components/SignIn.js";
import Logo from "./Components/Logo.js";
import ImageLinkForm from './Components/ImageLinkForm'
import Rank from "./Components/Rank.js";
import ParticlesBg from 'particles-bg';
import FaceDetector from './Components/FaceDetector'

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      route:'_signin_'
    }
  }
  onInputChange=(event)=>
  {
    console.log(event.target.value);
    this.setState({input:event.target.value})
  }
  onButtonSubmit=()=>{
  console.log('click');
  this.setState({imageUrl:this.state.input})
  }
  onRouteChange=(Route)=>{
   this.setState({route:Route})
  }
  render(){
  return (
    <div className="App">
      <ParticlesBg color="#ffffff" num={200} type="cobweb"  bg={true} />
      <Navigation onRouteChange={this.onRouteChange}/>  
      {    
      this.state.route === '_signin_'? <SignIn onRouteChange={this.onRouteChange}/>:
      <><Logo /><Rank /><ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} /><FaceDetector imageUrl={this.state.imageUrl} /></>}
    </div>
  );
  }
}
export default App;
