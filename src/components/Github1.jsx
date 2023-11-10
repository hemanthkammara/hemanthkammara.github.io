import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";

export default function Github1() {
  return(
     
        <DIV>

      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slideOne">
          {" "}
          <img
          className="img1"
            
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=hemanthkammara&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact"
            alt="hemanthkammara"
          />
        </SwiperSlide>

        <SwiperSlide className="slideOne">
          <img
           
            // style={{ width: "100%" }}
            src="https://github-readme-stats.vercel.app/api?username=hemanthkammara&theme=light&hide_border=false&include_all_commits=true&count_private=true"
            alt="hemanthkammara"
          />
        </SwiperSlide>

        <SwiperSlide className="slideOne">
          <img
       
            // style={{ width: "100%" }}
            src="https://github-readme-streak-stats.herokuapp.com?user=hemanthkammara"
            alt="hemanthkammara"
          />
        </SwiperSlide>
      </Swiper>
        </DIV>
    
      
  );
}
const DIV=styled.div`
    .mySwiper{
        width: 60%;
       // border: 1px dotted red;
    }
    .slideOne{
       // overflow: hidden;
        width: 80%;
        height: 434px;
       border: 1px solid black;
        text-align: center;
    }
    img{
        width: 80%;
        height: 100%;
       //object-fit: cover;
    }

    @media only screen and (max-width: 800px) {
        .mySwiper{
        width: 80%;
       // border: 1px dotted red;
    }
    .slideOne{
        height: 304px;
      width: 100%;
    }

    }
    

`

