import React from 'react'
import tempo2 from './images/tempo2.jpeg'
import van4 from './images/4.png'

const Slide3 = ({l}) => {
 
    const img=[van4,tempo2]
  return (
    <div className='slider3'>
    
       <img src={img[l]} />
       <div className='description3'>
       <h1>Tempo Traveller</h1>
        <p>14+1 seater</p>
        <p>AC/non-AC</p>
        <p>Pickup Location:Theni, cumbum, chinnamanur</p>
       </div>
    </div>
  )
}

export default Slide3