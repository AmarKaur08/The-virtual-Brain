import React from 'react';
import '../Styling/Rank.css'
const Rank=({name,enteries})=>{
  return(
    <div>
    <div className="rankdecor">
      {`${name.toUpperCase()}!!, Your current Rank is...`}
      {/* //just js things u can write without {} also */}
    </div>
    <div className="rankdecor">
    {enteries}
  </div>
  </div>
  );
}
export default Rank