import React from 'react'


import van3 from './images/3.png'
import van4 from './images/van4.jpeg'

const Slide2 = ({k}) => {
  
    const img=[van3,van4]
  return (
    <div className='slider2'>
 
       <img src={img[k]}/>
       <div className='description2'>
       <h1>Tempo Traveller</h1>
        <p>16+1 seater</p>
        <p>AC/non-AC</p>
        <p>Pickup Location:Theni, cumbum, chinnamanur</p>
       </div>
    </div>
  )
}

export default Slide2