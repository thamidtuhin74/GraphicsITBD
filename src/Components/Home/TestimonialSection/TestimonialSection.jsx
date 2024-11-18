import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import SingleReview from './SingleReview';

const TestimonialSection = () => {
    return (
        <div className='w-full font-inter h-auto bg-[#EEE9FF]'>
            <div className='container mx-auto h-full flex flex-col gap-14 justify-center items-center font-inter pt-16 pb-[150px] text-[#000]'>

                <div className='w-full flex flex-row justify-between items-center'>
                    <h2 className='text-[75px] font-inter font-thin text-[#181818] text-left leading-none'>What our <span className='font-semibold'>clients say</span><br/> about us</h2>
                    <img className='' src="/src/assets/images/trust-pilot.png" alt="trust-pilot.png" />

                </div>
                
                <div className='myBrandSwiper'>
                    <Swiper slidesPerView={3} spaceBetween={20} loop={true} 
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false
                        }}  
                        className="">
                        <SwiperSlide><SingleReview/></SwiperSlide>
                        <SwiperSlide><SingleReview/></SwiperSlide>
                        <SwiperSlide><SingleReview/></SwiperSlide>
                        <SwiperSlide><SingleReview/></SwiperSlide>
                        <SwiperSlide><SingleReview/></SwiperSlide>
                        <SwiperSlide><SingleReview/></SwiperSlide>
                    </Swiper>
                </div>
                

                

                <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

            </div>
        </div>
    );
};

export default TestimonialSection;