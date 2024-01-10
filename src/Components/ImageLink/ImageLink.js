import React from 'react';
import './ImageLink.css';
const ImageLink = ({ onInputChange, onButtonSubmit }) =>{
    return(
        <div >
            
            <div className='centerd'>
                <div className='pa4 br3 shadow-5'>
            <input type="text" className='f4 pa2 w-70 center' onChange={onInputChange}></input>
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
            onClick={onButtonSubmit}> 
            Detect</button>
            </div>
        </div>
        </div>
    );
}

export default ImageLink;