import React, { useEffect } from 'react'
import PropsCard from './PropsCard'
import imgcard1 from "../../images/Rectangle 1270.png";
import imgcard2 from "../../images/Rectangle 1270 (1).png"
import imgcard3 from "../../images/Rectangle 1270 (2).png"




function Section1_main({img,h5,p,h2}) {
  return (
    
    <div>
        <div className="section_head">
            <p>Our Services</p>
            <h3>Handshake infographic mass market crowdfunding iteration.</h3>
        </div>
        <div className="section_main">
            <PropsCard img={imgcard1} h5={"Cool feature title"} p={"Learning curve network effects return on investment."} h2={"Explore page"}/>
            <PropsCard img={imgcard2} h5={"Even cooler feature"} p={"Learning curve network effects return on investment."} h2={"Explore page"}/>
            <PropsCard img={imgcard3} h5={"Cool feature title"} p={"Learning curve network effects return on investment."} h2={"Explore page"}/>







        </div>
        
    </div>
  )
}

export default Section1_main