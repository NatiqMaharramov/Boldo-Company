import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { changeStateValue } from "../redux/MainReducer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

function HeaderEnd() {
  const Dispatch = useDispatch();
  const Json = useSelector((state) => state.Data.data);
  // const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("./data1.json").then((resp) => {
      Dispatch(
        changeStateValue({
          name: "data",
          value: resp.data,
        })
      );
    });
  }, []);

  return (
    <div className="headerend1">
         <div className="header_end">
      {Json.map((e) => (
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        speed={1000}
        // loop={true}

        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.5": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 5,
              spaceBetween: 10,
            }
          }}

        modules={[Autoplay,Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="slider1">

              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider1">
              {" "}
              <img src={e.img} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      ))}
    </div>

    </div>
 
  );
}

export default HeaderEnd;
