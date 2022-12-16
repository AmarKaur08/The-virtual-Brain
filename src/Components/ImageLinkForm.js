import React from 'react';
import '../Styling/ImageLinkForm.css';
const ImageLinkForm=()=>{
  return(    
      <div className="center" > 
        <p className="linkdecor center">
          This virtual brain will detect faces in your pictures.Give it a try!!!!!!
          </p> 
          <div className="main2">
            <input type="text" className="inputdecor"/>
            <button className="butdecor">Detect</button>
            </div>  
                   
      </div>    
  );
}
export default ImageLinkForm;