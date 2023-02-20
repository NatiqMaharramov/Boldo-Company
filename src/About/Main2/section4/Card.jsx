import React from 'react'


function Card({img,h3,span}) {
  return (
    <div>
          <div className="main2_section4_img_in">
        <img src={img} alt="" />
        <h3>{h3}</h3>
        <span>{span}</span>

        </div>
    </div>
  )
}

export default Card