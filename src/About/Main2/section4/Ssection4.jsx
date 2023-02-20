import React from "react";
import Card from "./Card";
import img from "../../../images/Image (1).png"
import img2 from "../../../images/Image (2).png"
import img3 from "../../../images/Image (3).png"






function Ssection4() {
  return (
    <div className="main2_section4">
      <div className="main2_section4_text">
      <h6>Our team</h6>
        <h2>The leadership team</h2>
        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>

      </div>
      <div className="main2_section4_img">
      <Card img={img} h3={"Michael Scott"} span={"General Manager"}/>
      <Card img={img2} h3={"Dwight Schrute"} span={"General Manager"}/>
      <Card img={img3} h3={"Pam Beetsley"} span={"General Manager"}/>

   

     
      </div>



    </div>
  );
}

export default Ssection4;
