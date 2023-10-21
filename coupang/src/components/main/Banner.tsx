import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/mainImg/bannerImg/001.jpg";
import img2 from "../../assets/mainImg/bannerImg/002.jpg";
import img3 from "../../assets/mainImg/bannerImg/003.jpg";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={10} //슬라이드 간격
        autoplay={{
          delay: 2500, //자동 시간
          disableOnInteraction: false, //스와이프 후 자동재생}
        }}
        loop={true} //반복
        pagination={{ clickable: true }}
        observer={true}
        observeParents={true}
        // navigation

        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img className="swiper-slide" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide" src={img3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

// const BannerWrap = styled(Swiper)`
//   margin-top: 30px;
//   width: 100%;
//   height: 360px;

//   img {
//     width: 100%;
//     height: 360px;
//   }
// `;
