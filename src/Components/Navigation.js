import React from 'react';
import '../Styling/Navigation.css'
const Navigation=({onRouteChange,isSignedin})=>{
  
    if (isSignedin)
    {
      return(
    <nav style={{display:'flex',justifyContent:'flex-end'}}>
      <p onClick={()=>onRouteChange('signout')} id="Signout">Sign Out</p>
      {/* because onclick we want to call routechnge fn thus we are doing ()= */}
    </nav>
      );
    }
    else{
      return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
      <p onClick={()=>onRouteChange('_signin_')} id="Signout">Sign In</p>
      <p onClick={()=>onRouteChange('register')} id="Signout">Register</p>
      {/* because onclick we want to call routechnge fn thus we are doing ()= */}
    </nav>
      );
    }
  
}
export default Navigation