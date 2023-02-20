import React from "react";


function Card({img,h4,p}) {
  return (
    <div>
      <div className="main2_section5_img_in">
        <img src={img} alt="" />
        <div className="s5_text">
          <h4>{h4}</h4>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
