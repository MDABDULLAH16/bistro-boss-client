import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <div className="">
        <SectionTitle subHeading={'From 11:00am To 10:00pm'} heading={'Order Online'}></SectionTitle>
      </div>
      <Swiper
      slidesPerView={3}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
    
      modules={[Pagination]}
      className='mySwiper mb-12 '
    >
      <SwiperSlide>
        <img src={slide1} alt='' className='mx-auto ' />
        <h4 className='text-4xl uppercase -mt-24  text-white mx-auto text-center'>
          salad
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt='' className='mx-auto' />
        <h4 className='text-4xl uppercase -mt-24  text-white text-center'>
          Pizza
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt='' className='mx-auto' />
        <h4 className='text-4xl uppercase -mt-24 text-white text-center'>
          Soup
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt='' className='mx-auto' />
        <h4 className='text-4xl uppercase -mt-24 text-white text-center'>
          desserts
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt='' className='mx-auto' />
        <h4 className='text-4xl uppercase -mt-24  text-white text-center'>
          Salad
        </h4>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
