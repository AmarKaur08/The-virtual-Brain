import React from 'react';
import '../Styling/Navigation.css'
const Navigation=({onRouteChange})=>{
  return(
    <nav style={{display:'flex',justifyContent:'flex-end'}}>
      <p onClick={()=>onRouteChange('_signin_')} id="Signout">Sign Out</p>
      {/* because onclick we want to call routechnge fn thus we are doing ()= */}
    </nav>
  );
}
export default Navigation