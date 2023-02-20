import React from 'react'
import left_img1 from "../../../images/Rectangle 1270 (7).png"
import left_img2 from "../../../images/Rectangle 1273.png"
import center_img from "../../../images/Rectangle 1271.png"
import right_img1 from "../../../images/Rectangle 1272.png"
import right_img2 from "../../../images/Rectangle 1274.png"






function Ssection1() {
  return (
    <div className='main2_section1'>
        <div className="left_img">
            <img src={left_img1} alt="" />
            <img src={left_img2} alt="" />
        </div>
        <img className='center_img' src={center_img} alt="" />

        <div className="right_img">
            <img src={right_img1} alt="" />
            <img src={right_img2} alt="" />

        </div>
        
    </div>
  )
}

export default Ssection1