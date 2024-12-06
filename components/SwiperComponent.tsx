import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardComponent from "./CardComponent";

interface SwiperComponentProps {
  cardItems: Array<{ title: string; link: string }>;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ cardItems }) => {
  return (
    <div className="swiper-container-wrapper">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        centeredSlides={false}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".custom-pagination",
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {cardItems.map((item, index) => (
          <SwiperSlide key={index}>
            <CardComponent title={item.title} link={item.link} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-5"></div>
    </div>
  );
};

export default SwiperComponent;
