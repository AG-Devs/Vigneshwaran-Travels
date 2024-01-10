import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Book = ({name,setname,no,setno,date,setdate}) => {
  const name1 = name
  const no1 = no
  const [pickup,setpickup] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        try{
          axios.post('http://localhost:3001/user/book',{
        name1,
        no1,
        date,
        pickup
      })
      .then(res=>{
        if(res.data==='Posted'){
          alert('posted')
        }
      })
      
      setname("")
      setno("")
      setdate('')
      setpickup('')
      Navigate('/home')
    }
    catch(e){
      alert("error")

    }
      }
    const Navigate=useNavigate()
  return (
    
     
      <div className='positions'>
      <h1 className='feed'>Book Here</h1>
      
      <form  className='forms form1'onSubmit={(e)=>handleSubmit(e)} >
        <label>Username</label>
      <input type='text' value={name}  required placeholder='Enter your name' onChange={((e)=>setname(e.target.value))}/>
      <label>Phone No</label>
      <input type='tel' value={no}  required placeholder='Enter your Phone No' onChange={((e)=>setno(e.target.value))}/>
      <label>Date</label>
      <input type='date' value={date} required placeholder='Enter the Date' onChange={((e)=>setdate(e.target.value))}/>
      <label>Pick Up</label>
      <input type='text' value={pickup}  required placeholder='Enter your Pick Up Location' onChange={((e)=>setpickup(e.target.value))}/>
     
      <button type='submit' style={{background:'blueviolet',color:'white'}}>Submit</button>
      <button onClick={(()=>Navigate("/home"))}  style={{background:'blueviolet',color:'white'}}>Cancel</button> 
      </form>
      
  
    </div>
  )
}

export default Book