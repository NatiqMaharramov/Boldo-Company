import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeStateValue } from "../../redux/MainReducer";
import { useDispatch, useSelector } from "react-redux";

function Section6() {
    const[visible,setvisible]=useState(3)
    const[load,setload]=useState(6)

    const Dispatch = useDispatch();
    const state = useSelector((state) => state.Data.data2);

    const Load=()=>{
        setvisible(visible+3)
        setload(load-3)
        
    }
  
  useEffect(() => {
    axios.get("./data2.json").then((resp) => {
      // console.log(resp.data.length);
      Dispatch(
        changeStateValue({
          name: "data2",
          value: resp.data,
        })
      );
    });
  }, []);

  return (
    <div className="section6">
      <div className="section6_head">
        <p>Our Blog</p>
        <h4>Value proposition accelerator product management venture</h4>
      </div>
      <div className="section6_main">
        
        {state.slice(0,visible).map((e) => (
          <div className="section6_card">
            <img src={e.img} alt="" />

            <div className="s6_about">
              <h3>{e.h3}</h3> <span>{e.span}</span>
            </div>
            <p>{e.p}</p>

            <div className="s6_end">
              <img src={e.img2} alt="" />
              <h6>{e.h6}</h6>
            </div>
          </div>
        ))}
      </div>
      
      {load? <button className="load" onClick={Load}>Load more</button>:null}

    </div>
  );
}

export default Section6;
