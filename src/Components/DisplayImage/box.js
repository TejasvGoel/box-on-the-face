import React from 'react';
import './DisplayImage.css';

const Box = ({top,right,bottom,left, image}) =>{
    return(
        <div className='centerd ma'>
        <div className='absolute mt2'>
           <img src={image}  alt='photosss' width='500px' height='auto' id="inputImage"></img>
        <div className='bounding-box dim' 
        style={{ top: top, right: right, bottom: bottom, left: left }}>
       </div>
       </div>
       </div>
    );
}

export default Box;