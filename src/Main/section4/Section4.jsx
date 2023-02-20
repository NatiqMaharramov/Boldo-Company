// import React from "react";
import Card from "./Card";
import img from "../../images/Ellipse 4.png";
import img2 from "../../images/Ellipse 4 (1).png";
import img3 from "../../images/Ellipse 4 (2).png";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Section4() {

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          style={{ width: '100%' }}
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <div className="section4_start">

   
    <div className="Section4">
      <div className="section4_head">
        <h4>An enterprise template to ramp up your company website</h4>
        <div className="swiper-button-prev">
        </div>
        <div className="swiper-button-next">
         
       
         </div>
      </div>

  
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        speed={1000}
        loop={true}
        // scrollbar={{draggable:true }}
        loopFillGroupWithBlank={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.5": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide className="section4_slide ilk">
      <Card
          h6={
            "“Buyer buzz partner network disruptive non-disclosure agreement business"
          }
          img={img}
          h3={"Albus Dumbledore"}
          p={"Manager @ Hoawarts"}
        />
      </SwiperSlide>
      <SwiperSlide className="section4_slide">
      <Card
          h6={
            "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
          }
          img={img2}
          h3={"Severus Snape"}
          p={"Manager @ Slytherin"}
        />
       
      </SwiperSlide>
      <SwiperSlide className="section4_slide">
      <Card h6={   "“Release facebook responsive web design business model canvas seed money monetization.”" } img={img3} h3={"Harry Potter"} p={"Team Leader @ Gryffindor"} />


      </SwiperSlide>
      <SwiperSlide className="section4_slide">
      <Card
          h6={
            "“Buyer buzz partner network disruptive non-disclosure agreement business"
          }
          img={img}
          h3={"Albus Dumbledore"}
          p={"Manager @ Hoawarts"}
        />
      </SwiperSlide>
      <SwiperSlide className="section4_slide">
      <Card
          h6={
            "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
          }
          img={img2}
          h3={"Severus Snape"}
          p={"Manager @ Slytherin"}
        />
       
      </SwiperSlide>
      <SwiperSlide className="section4_slide">
      <Card h6={   "“Release facebook responsive web design business model canvas seed money monetization.”" } img={img3} h3={"Harry Potter"} p={"Team Leader @ Gryffindor"} />


      </SwiperSlide>
      
      
    </Swiper>

   
    </div>
    </div>
  );
}

export default Section4;

