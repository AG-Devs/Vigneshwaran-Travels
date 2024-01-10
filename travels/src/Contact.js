import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
const Contact = () => {
  const navigate=useNavigate()
  return (
    <div className='position'>
      <h1 className='contact'>CONTACT US</h1>
      <div className='para'>
      <p>90920 62601</p>
      <p>90920 62601</p>
      <p>nagaarjunan1309@gmail.com</p>
      <p>nagaarjunan1309</p>
      </div>
      <RxCrossCircled  style={{position:'relative',top:'-40%'}}onClick={(()=>navigate("/home"))} />
      <div className='icon'>
      <IoLogoWhatsapp  />
      </div>
      <div className='icon1'>
      <FaPhoneSquareAlt />
      </div>
      <div className='icon2'>
      <SiGmail />
      </div>
     
      <div className='icon3'>
      <FaFacebookSquare />
      </div>
    </div>
  )
}

export default Contact