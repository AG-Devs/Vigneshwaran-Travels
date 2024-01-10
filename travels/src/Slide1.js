import React from 'react'

import van1 from './images/van1.jpeg'
import ertiga2 from './images/ertiga2.jpeg'


const Slide1 = ({j}) => {
 
    const img=[van1,ertiga2]
  return (
    <div className='slider1'>
     
       <img src={img[j]}/>
       <div className='description1'>
       <h1>Shift Dezire</h1>
        <p>4+1 seater</p>
        <p>AC/non-AC</p>
        <p>Pickup Location: Theni, cumbum, chinnamanur</p>
       </div>
    </div>
  )
}

export default Slide1