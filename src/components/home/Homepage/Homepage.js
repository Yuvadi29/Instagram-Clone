import React from 'react'
import Maincontent from '../Maincontent/Maincontent'
import Navbar from '../Navbar/Navbar'
import "./Homepage.css"


const homepage = () => {
  return (
    <div  className='home_page'>
        <div >
            <Navbar /> 
        </div>
        <div>
            <Maincontent />
        </div>
      
    </div>
  )
}

export default homepage
