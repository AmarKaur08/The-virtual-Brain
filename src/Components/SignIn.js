import React from 'react';
import '../Styling/SignIn.css'
class  SignIn extends React.Component{
  constructor(props)
  {
    super(props);
    {
      this.state={
        signInEmail:'',
        signInPass:''
      }
    }
  }
  onEmailChange=(event)=>
  {
    this.setState({signInEmail:event.target.value})
  }
  onPassChange=(event)=>
  {
    this.setState({signInPass:event.target.value})
  }
  onSubmitSignIn=()=>{
    fetch('https://VirtualBrain-Backend.amarpreetkaur2.repl.co/signin',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPass
      })
    })
    // .then(data=>console.log(data.json()))
    this.props.onRouteChange('home');
  }

  render(){
    const {onRouteChange}=this.props;
  return(
    <div>
    <form method='post'>
      <div className="formdecor">
      <p className="textdecor">Sign In</p>
      <br></br>
      <label htmlFor="email">Email</label><input onChange={this.onEmailChange}
      className="inputdecor2" type='email' required />
      <label htmlFor="password">Password</label><input onChange={this.onPassChange} className="inputdecor2" type='password'  required/>
      <button onClick={this.onSubmitSignIn} className="btn" >SignIn</button>
      <div><p onClick={()=>onRouteChange('register')} className="linkdecor1" value="Signin">Register</p></div>
      </div>
    </form>
    </div>
  );
  }
}
export default SignIn;