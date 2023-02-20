import React from 'react'
import img from "../images/Logo2.png"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_left">
            <img src={img} alt="" />
            <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
            <span>All rights reserved.</span>

        </div>
        <div className="footer_right">
            <ul>
                <h5>Landings</h5>
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>



            </ul>
            <ul>
                <h5>Company</h5>
                <li>Home</li>
                <li>Careers<button>Hiring!</button></li>
                <li>Services</li>



            </ul> 
             <ul>
                <h5>Landings</h5>
                <li>Blog</li>
                <li>Products</li>
                <li>Services</li>

                





            </ul>

        </div>
        
    </div>
  )
}

export default Footer