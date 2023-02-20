import React from "react";

function PropsCard({ img, h5, p, h2 }) {
  return (
    <div>
      <div className="section_main_card">
        <img src={img} alt="" />
        <h5>{h5}</h5>
        <p>{p}</p>

        <h2>
          {h2}
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 14H19"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 7L19 14L12 21"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h2>
      </div>
    </div>
  );
}

export default PropsCard;
