import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../context/AppContext";

import img1 from "/image/ho.jpg";
import img2 from "/image/lo.jpg";
import img3 from "/image/po.jpg";

const Slider = () => {
  const swiperRef = useRef(null);
  const { activeSliderIndex, setActiveSlideIndex } = useContext(MyContext);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlideIndex(currentIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => handleSlideChange(swiper));
    }
  });

  const places = [
    {
      name: "first",
      img: img1,
    },
    {
      name: "second",
      img: img2,
    },
    {
      name: "third",
      img: img3,
    },
  ];

  return (
    <div className="mr-14 shadow-xl">
      <Swiper
        slidesPerView={1}
        keyboard={true}
        spaceBetween={-250}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        initialSlide={activeSliderIndex}
        className="pl-[70px] pt-2"
      >
        {places.map((items, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={items.img} alt="" className="object-cover shadow-xl" />
              <div>
                sample text
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
