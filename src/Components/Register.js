import React from 'react';
import '../Styling/SignIn.css'
class Register extends React.Component{
 constructor(props)
 {
   super();
   {
   this.state={
    email:'',
    password:'',
    name:''
   }
   }
 }
 onEmailChange=(event)=>
  {
    this.setState({email:event.target.value})
  }
  onPassChange=(event)=>
  {
    this.setState({password:event.target.value})
  }
  onNameChange=(event)=>
  {
    this.setState({name:event.target.value})
  }
  onSubmitRegister = async (e) => {
    // e.preventDefault();
    try {
      let res = await fetch("https://virtualbrain-backend.amarpreetkaur2.repl.co/register", {
        method: "POST",
        headers:{'content-type':'application/json','charset':'UTF-8'},
        body: JSON.stringify({
          email:this.state.email,
          password:this.state.password,
          name:this.state.name
        }),
      });
      let resJson = await res.json();
      if (resJson.name!=='' && resJson.email!=='' && resJson.password!=='') {
        console.log(resJson);
        this.props.loaduser(resJson)
        {this.props.onRouteChange('home')};
       } //else {
      //   {this.props.onRouteChange('register')};
      // }
    } catch (err) {
      console.log("errorrrrrrrrrrrrrrrr",err);
    }
  };
  render(){
    const{onRouteChange}=this.props;
    return(
      <div>
      <form method='post' onSubmit={(e)=>e.preventDefault()}>
        <div className="formdecor">
        <p className="textdecor">Register</p>
        <br></br>
        <label htmlFor="name">Name</label><input 
        onChange={this.onNameChange}
        className="inputdecor2" type='test' required />
        <label htmlFor="email">Email</label><input 
        onChange={this.onEmailChange}
        className="inputdecor2" type='email' required />
        <label htmlFor="password">Password</label><input 
        onChange={this.onPassChange}
        className="inputdecor2" type='password' name="password" required/>
        <button onClick={this.onSubmitRegister} className="btn" name="button" type='submit'>Register</button>
        <div><p onClick={()=>onRouteChange('_signin_')} className="linkdecor1" value="Register">Sign In</p></div>
        </div>
      </form>
      </div>
    );
  }
  
}
export default Register