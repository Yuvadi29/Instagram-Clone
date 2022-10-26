import React from 'react';
import "./Navbar.css"
import Grid from '@mui/material/Grid';
import logoinsta from "../../images/logoinsta.png"
import {AiFillHome , AiOutlineCompass , AiOutlineHeart , AiOutlineSearch}  from 'react-icons/ai'
import {FiSend , FiPlusCircle} from 'react-icons/fi'
// import {BiMessageRounded} from "react-icons/Bi"
import Avatar from '@mui/material/Avatar';
import pp1 from "../../images/pp1.png"
// import {BsPlusSquare} from 'react-icons/Bs' 



const Navbar = () => {
    return (
        <div>
            <div className="Navbar_content">
               <Grid container>
               <Grid item xs={1.5}>
              </Grid>
                <Grid item xs={3.5}>
                    <img  className='instalogo' src={logoinsta} alt=""/>

                </Grid>
                <Grid item xs={3}>
                    <input type="text" name="" id="" className='nav_input' placeholder='search' />
                    
                </Grid>        
                
                <Grid item xs={3} >
                    
                <div className="navbar_icons">
                    <AiFillHome size={27} className='nav_icon_element' />
                    <FiSend size={27} className='nav_icon_element' />
                    <FiPlusCircle size={27} className='nav_icon_element'/>
                    <AiOutlineCompass size={27} className='nav_icon_element' />
                    <AiOutlineHeart size={27} className='nav_icon_element'/>
                    <Avatar style={{"width" : "30px" ,"height" : "30px" ,"display" : "inline-block"}}src={pp1} className='nav_icon_element'/>


                </div>

                </Grid>    
                <Grid item xs={1}>

                </Grid>
                </Grid>    
                 
                </div>



        </div>
    )
}

export default Navbar
