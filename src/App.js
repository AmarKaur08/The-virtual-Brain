import React,{Component} from "react";
import "./App.css";
import Navigation from "./Components/Navigation.js";
import SignIn from "./Components/SignIn.js";
import Logo from "./Components/Logo.js";
import ImageLinkForm from './Components/ImageLinkForm'
import Rank from "./Components/Rank.js";
import ParticlesBg from 'particles-bg';
import FaceDetector from './Components/FaceDetector';
import Register from './Components/Register'


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      route:'_signin_',
      isSignedin:false,
      user:{
        id:'',
        name:'',
        email:'',
        enteries:'0',
        joined:''
      }
    }
  }
  //testing of backend
  // componentDidMount(){
  // fetch('https://virtualbrain-backend.amarpreetkaur2.repl.co/')
  // .then(response=>response.json())
  // .then(data=>console.log(data));
  // }
  //tetsing over///////////////////////
  loaduser=(data)=>
  {
    this.setState({user:{
        id:data.id,
        name:data.name,
        email:data.email,
        password:data.password,
        enteries:data.enteries,
        joined:data.joined
      }})
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
   if(Route==='signout')
   {
 this.setState({isSignedin:false})
   }
   else if(Route==='home')
   {
    this.setState({isSignedin:true})
   }
  }
  render(){
  return (
    <div className="App">
      <ParticlesBg color="#ffffff" num={120} type="cobweb"  bg={true} />
      <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.onRouteChange}/>  
      {    
      this.state.route==='home'?<><Logo /><Rank name={this.state.user.name} enteries={this.state.user.enteries}/><ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} /><FaceDetector imageUrl={this.state.imageUrl} /></> :
      this.state.route === '_signin_'? <SignIn loaduser={this.loaduser} onRouteChange={this.onRouteChange}/>:
      <Register loaduser={this.loaduser} onRouteChange={this.onRouteChange}/>}
    </div>
  );
  }
}
export default App;
