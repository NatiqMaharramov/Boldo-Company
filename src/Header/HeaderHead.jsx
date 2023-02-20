import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import images from "../images/Logo.png"



function HeaderHead() {

  let y=0
  const bars=()=>{
    y++
  let x=document.getElementById("x")
  if(y%2!=0){
    x.style.left="0"
  }else{
    x.style.left="-250px"
  }
  }



  return (
    <div className='Header_head'>
        <div className="Head_left">
            <img src={images} alt="" />
            <h1>Boldo</h1>
        </div>
        <div className="Head_right">
        <ul id='x'>
            <NavLink className='about' to={"/"}> <li >Product</li></NavLink>
            <NavLink className='about' to={"/"}> <li >Services</li></NavLink>
            <NavLink  className='about' to={"/about"}> <li>About</li></NavLink>
            <li>Log In</li>

        </ul>
        <i onClick={bars} id='bars' class="fa-solid fa-bars bars"></i>

        </div>
        
    </div>
  )
}

export default HeaderHead