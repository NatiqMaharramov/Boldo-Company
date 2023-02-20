import React, { useState } from "react";
import img from "../../images/Image.png";
import img2 from "../../images/Group 210.png";


function Section5() {
  const [visi, setvisi] = useState(false);
  const [visi2, setvisi2] = useState(false);

  const toogle = () => {
    setvisi(!visi);
  };
  const toogle2 = () => {
    setvisi2(!visi2);

  };
  return (
    <div className="Section5">
      <img className="section5_img" src={img} alt="" />
      <div className="section5_text">
        <div className="h4_about">
        <h4>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h4>
        </div>
        
        <div className="toogle_start">
        <div className="toogle">
          <div className="toogle_p">
            <div className="toogle_p_icon">
              <p> We connect our customers with the best?</p>
              <img src={img2} deyer="1" onClick={toogle} alt="" />
            
            </div>
            {visi ? (
              <span className="visi">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. elit. Iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi magni cupiditate?</p>
              </span>
            ) : null}
          </div>
        </div> 
        
        
            <div className="toogle" id="toogle">
          <div className="toogle_p">
            <div className="toogle_p_icon">
              <p>Android research & development rockstar? </p>
              <img src={img2} onClick={toogle2} alt="" />
            
            </div>
            {visi2 ? (
              <span className="visi">
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. elit. Iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi magni cupiditate?</p>
              </span>
            ) : null}
          </div>
        </div>
        </div>
       
        
      </div>
    </div>
  );
}

export default Section5;
