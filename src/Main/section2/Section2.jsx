import React from "react";
import img1 from "../../images/Group 216.png";

function Section2() {
  const svg = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#0A2640" />
      <path
        d="M26 12L15 23L10 18"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="section2">
      <div className="section2_left">
        <img src={img1} alt="" />
      </div>
      <div className="section2_right">
        <h3>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <p>
          {svg} <span>We connect our customers with the best.</span>
        </p>
        <p>
          {svg} <span> Advisor success customer launch party.</span>
        </p>
        <p>
          {svg} <span>Business-to-consumer long tail.</span>
        </p>

        <button>Start now</button>
      </div>
    </div>
  );
}

export default Section2;
