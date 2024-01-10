import React from 'react'

import ertiga from './images/ertiga.jpeg'
import ertiga1 from './images/ertiga1.jpeg'



const Slide = ({i}) => {
    
    const img=[ertiga,ertiga1]
  return (
    <div className='slider'>
  
       <img src={img[i]} style={{marginTop:'5%'}}/>
      
       <div className='description'>
        <h1>Suzuki Ertica</h1>
        <p>6+1 seater</p>
        <p>AC/non-AC</p>
        <p>Pickup Location: Theni, cumbum, chinnamanur</p>
       </div>
    </div>
  )
}

export default Slide