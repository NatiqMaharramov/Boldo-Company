// import React from 'react'
import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

function Button({ svg, span, colors,color2 }) {
  var x = document.querySelectorAll(".btn");
  const [color, setcolor] = useState(false);
  const changeColor = (e) => {
    setcolor(!color);
 
  };

  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", () => {
      for (let j = 0; j < x.length; j++) {
        x[j].style.backgroundColor = "white";
        x[j].style.color = "#0A2640";
      }

      x[i].style.backgroundColor = "#0A2640";
      x[i].style.color = "white";

    });
  }

  return (
    <div>
      <button
        style={{ backgroundColor: colors,color:color2 }}
        className="btn"
        onClick={changeColor}
      >
        {svg}
        <span>{span}</span>
      </button>
     
    </div>
  );
}

export default Button;

