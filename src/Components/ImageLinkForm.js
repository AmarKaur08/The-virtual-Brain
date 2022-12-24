import React from 'react';
import '../Styling/ImageLinkForm.css';
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
  return(    
      <div className="center" > 
        <p className="linkdecor center">
          This virtual brain will detect faces in your pictures.Give it a try!!!!!!
          </p> 
          <div className="main2">
            <div className="borderdecor">
            <input type="text" className="inputdecor" onChange={onInputChange}/>
            <button className="butdecor" value="Detect" onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>  
                   
      </div>    
  );
}
export default ImageLinkForm;