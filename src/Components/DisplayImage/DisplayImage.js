import React from 'react';
import './DisplayImage.css';
//import Box from './box';

const DisplayImage = ({ imageUrl, boxes }) => {
    
    return (
        <div className='centerd ma'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt='photosss' width='500px' height='auto' id="inputImage" />
                {
                    boxes.map((box, i) => {
                        return <div key={`box${box.topRow}${box.rightCol}`}
                        className = 'bounding-box'
                        style = {{
                         top: box.topRow,
                         right: box.rightCol,
                         bottom: box.bottomRow,
                         left: box.leftCol
                         }} >
                             <div className="tc pa-2">
                             {i}
                             </div>
                         
                        </div>
                    })
                }

               


            </div>
        </div>
    );

}

export default DisplayImage;