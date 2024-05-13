import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
const Slider = () => {
  const slider = useSelector((state) => state.slider.slider);
  console.log(Array.isArray(slider));
  return (
    <>
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
        style={{ zIndex: 0 }}
      >
        {slider.map((itemslider) => {
          return (
            <SwiperSlide key={itemslider.id}>
              <img
                src={itemslider.imgslider}
                alt=""
                style={{ height: "400px" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slider;
