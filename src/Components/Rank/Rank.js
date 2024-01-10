import React from 'react';

const Rank = ({name, entery}) => {
     return(
         <div>
     <div className='tc white f3'>
         <p>{name} your current rank is.....</p>
         </div>
         <div className=" white f1 tc">
            <p> {entery} !!!</p> 
         </div>
         </div>
     );
}

export default Rank;