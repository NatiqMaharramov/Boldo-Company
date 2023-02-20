import React from 'react'



function Card({h6,img,h3,p}) {
  return (
    <div>
        <div className="s4_card">
          <h6>{h6}</h6>
          <div className="s4_card_end">
            <img src={img} alt="" />
            <div className="card_endd">
              <h3>{h3}</h3>
              <p>{p}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card