import React from "react";
// import img1 from "../images/Frame 219.png"
// import img2 from "../images/Group 264.png"
// import img3 from "../images/Rectangle 1289.png"
// import img4 from "../images/Group 208 (1).png"
// import imgx from "../images/Group 263.png"
// import HeaderEnd from "./HeaderEnd";

import img1 from "../images/61f32a150347142af23e528c_hero graphics.png"






function HeaderMain() {
  return (
    <>
    <div className="header_main">
      <div className="header_main_left">
        <h2>Save time by building fast with Boldo Template </h2>
        <p>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>

        <div className="header_main_button">
          <button>Buy template</button>
          <button>Explore</button>
        </div>
      </div>
      <div className="header_main_right">
        <img className="right_img" src={img1} alt="" />
        
      
      </div>
    </div>
    </>
  );
}

export default HeaderMain;
