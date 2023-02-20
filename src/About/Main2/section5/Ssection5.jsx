import React from 'react'
import Card from './Card'
import img from "../../../images/Image (4).png"
import img2 from "../../../images/Image (5).png"
import img3 from "../../../images/Image (6).png"




function Ssection5() {
  return (
    <div className='main2_section5'>
        <div className="main2_section5_text">
            <h6>Our values</h6>
            <h4>Things in we believe</h4>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
        </div>
        <div className="main2_section5_img">
            <Card img={img} h4={"We are commited."} p={"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."}/>
            <Card img={img2} h4={"We are commited."} p={"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."}/>
            <Card img={img3} h4={"We are commited."} p={"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."}/>



        </div>
    </div>
  )
}

export default Ssection5