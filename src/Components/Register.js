import React from 'react';
import '../Styling/SignIn.css'
const Register=({onRouteChange})=>{
  return(
    <div>
    <form >
      <div className="formdecor">
      <p className="textdecor">Register</p>
      <br></br>
      <label htmlFor="name">Name</label><input className="inputdecor2" type='test' required />
      <label htmlFor="email">Email</label><input className="inputdecor2" type='email' required />
      <label htmlFor="password">Password</label><input className="inputdecor2" type='password' name="password" required/>
      <button onClick={()=>onRouteChange('home')} className="btn" name="button">Register</button>
      <div><p onClick={()=>onRouteChange('_signin_')} className="linkdecor1" value="Register">Sign In</p></div>
      </div>
    </form>
    </div>
  );
}
export default Register