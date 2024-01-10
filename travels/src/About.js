import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate()
  return (
    <div className='position'>
      <h1>VIGNESHWARAN TRAVELS</h1>
      <div className='position1'>
      <p>Vigneshwaran Travels owns two cars and two tempo travels</p>
      <p> we are providing services throughout Theni.</p>
      <p>we have completed 200+ trips successfully with customer satisfaction.</p>
      </div>
      <RxCrossCircled onClick={(()=>{navigate('/home')})} />

    </div>
  )
}

export default About