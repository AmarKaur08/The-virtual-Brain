import React from 'react';
import '../Styling/SignIn.css'
const SignIn=({onRouteChange})=>{
  return(
    <div>
    <form >
      <div className="formdecor">
      <p className="textdecor">Sign In</p>
      <br></br>
      <label for="email">Email</label><input className="inputdecor2" type='email' required />
      <label for="password">Password</label><input className="inputdecor2" type='password' name="password" required/>
      <button onClick={()=>onRouteChange('home')} className="btn" name="button">SignIn</button>
      <div><a className="linkdecor1" href="">Sign Up</a></div>
      </div>
    </form>
    </div>
  );
}
export default SignIn