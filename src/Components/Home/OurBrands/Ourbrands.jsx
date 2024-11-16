import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Ourbrands = () => {
    return (
        <div className='w-full font-inter h-auto bg-[#EEE9FF]'>
            <div className='container mx-auto h-full flex flex-col justify-center items-center font-inter py-16 text-[#000]'>

                <div className="section-title mb-12 flex flex-col items-center">
                    <h2 className='text-[75px] font-inter font-semibold text-[#181818]'>Our Brands</h2>
                    <p className='text-[18px] text-center w-[40%]'>We maintain the quality with the fastest turnaround time, which is 12 hours. That means you never have to worry about the deadlines</p>
                </div>
                <div className='myBrandSwiper'>
                    <Swiper slidesPerView={6} spaceBetween={20} loop={true} 
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false
                        }}  
                        className="">
                        <SwiperSlide><img src="/src/assets/images/brands/1.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/2.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/3.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/4.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/5.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/6.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/1.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/2.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/3.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/4.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/5.png" alt="right1"/></SwiperSlide>
                        <SwiperSlide><img src="/src/assets/images/brands/6.png" alt="right1"/></SwiperSlide>
                    </Swiper>
                </div>
                

                

                <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

            </div>
        </div>
    );
};

export default Ourbrands;