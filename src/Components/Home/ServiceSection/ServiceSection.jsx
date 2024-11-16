import React from 'react';
import { PiNotePencilLight } from 'react-icons/pi';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ServiceSection = () => {
    return (
        <div className='bg-[#2E2E2E] pb-20 text-[#BCBCBC]'>
            <div className="container mx-auto relative">
                <div className="section-title mt-6 mb-12 absolute w-full ">
                    <h2 className='text-[75px] font-inter font-semibold text-[#B1E734]'>OUR SERVICES</h2>
                </div>
                <div className='flex flex-row gap-5 px-12 justify-between items-end'>
                    <div className='w-1/2 h-[360px] flex flex-col items-center gap-10 border-r-[1px] border-[#a6a6a64d]'>
                        
                    </div>
                    <div className='w-1/2 h-full pb-5'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>Modern consumers are digital experts. They go online to do their research and then their spending. Make sure your website is primed to grab their attention. Our stunning designs make good brands great and unforgettable. They make a lasting impression on every single visitor.</p>
                    </div>
                    

                </div>

                <div className='flex flex-row gap-10 mt-20 pb-5 px-12 justify-between items-center relative border-b-[1px] border-[#a6a6a64d]'>
                    <div className='w-1/3 h-full flex flex-col justify-center items-center'>
                        <PiNotePencilLight className='text-[84px] text-[#B1E734]'/>
                        <h2 className='text-[30px] font-inter font-semibold text-[#B1E734]'>PHOTO SOLUTION</h2>
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-start items-end'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>We take inspiration from a range of mediums, trends and attitudes. We use it to craft innovative websites. Those websites transform brands.</p>
                        <button className='primary-btn mt-[50px] btn py-[10px] px-[30px] bg-[#D9D9D9] text-[22px] text-[#000]'>Learn more</button>
                        
                    </div>
                    <div className='w-1/3 flex flex-col items-center gap-10 mySwiper'>
                        <Swiper navigation={true} modules={[Navigation]} loop={true}  >
                            <SwiperSlide><img src="/src/assets/images/slide1.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide3.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide5.png" alt="right1"/></SwiperSlide>
                        </Swiper>
                        
                        
                    </div>

                    <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

                </div>
                <div className='flex flex-row gap-10 mt-20 pb-5 px-12 justify-between items-center relative border-b-[1px] border-[#a6a6a64d]'>
                    
                    <div className='w-1/3 flex flex-col items-center gap-10 mySwiper'>
                        <Swiper navigation={true} modules={[Navigation]} loop={true}  >
                            <SwiperSlide><img src="/src/assets/images/slide2.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide4.png" alt="right1"/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-start items-end'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>We take inspiration from a range of mediums, trends and attitudes. We use it to craft innovative websites. Those websites transform brands.</p>
                        <button className='primary-btn mt-[50px] btn py-[10px] px-[30px] bg-[#D9D9D9] text-[22px] text-[#000]'>Learn more</button>
                        
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-center items-center'>
                        <img src="/src/assets/images/G-design-icon.svg" alt="G-design-icon" />
                        <h2 className='text-[30px] font-inter font-semibold text-[#B1E734]'>GRAPHIC DESIGN</h2>
                    </div>
                    

                    <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

                </div>
                <div className='flex flex-row gap-10 mt-20 pb-5 px-12 justify-between items-center relative border-b-[1px] border-[#a6a6a64d]'>
                    <div className='w-1/3 h-full flex flex-col justify-center items-center'>
                        <img src="/src/assets/images/vidoe-edit-icon.svg" alt="VIDEO EDITING icon" />
                        <h2 className='text-[30px] font-inter font-semibold text-[#B1E734]'>VIDEO EDITING</h2>
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-start items-end'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>We take inspiration from a range of mediums, trends and attitudes. We use it to craft innovative websites. Those websites transform brands.</p>
                        <button className='primary-btn mt-[50px] btn py-[10px] px-[30px] bg-[#D9D9D9] text-[22px] text-[#000]'>Learn more</button>
                        
                    </div>
                    <div className='w-1/3 flex flex-col items-center gap-10 mySwiper'>
                        <Swiper navigation={true} modules={[Navigation]} loop={true}  >
                            <SwiperSlide><img src="/src/assets/images/slide1.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide3.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide5.png" alt="right1"/></SwiperSlide>
                        </Swiper>
                        
                        
                    </div>

                    <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

                </div>
                <div className='flex flex-row gap-10 mt-20 pb-5 px-12 justify-between items-center relative border-b-[1px] border-[#a6a6a64d]'>
                    
                    <div className='w-1/3 flex flex-col items-center gap-10 mySwiper'>
                        <Swiper navigation={true} modules={[Navigation]} loop={true}  >
                            <SwiperSlide><img src="/src/assets/images/slide2.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide4.png" alt="right1"/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-start items-end'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>We take inspiration from a range of mediums, trends and attitudes. We use it to craft innovative websites. Those websites transform brands.</p>
                        <button className='primary-btn mt-[50px] btn py-[10px] px-[30px] bg-[#D9D9D9] text-[22px] text-[#000]'>Learn more</button>
                        
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-center items-center'>
                    <img src="/src/assets/images/web-dev-icon.svg" alt="WEB DEVELOPMENT icon" />
                        <h2 className='text-[30px] font-inter font-semibold text-[#B1E734]'>WEB DEVELOPMENT</h2>
                    </div>
                    

                    <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

                </div>
                <div className='flex flex-row gap-10 mt-20 pb-5 px-12 justify-between items-center relative border-b-[1px] border-[#a6a6a64d]'>
                    <div className='w-1/3 h-full flex flex-col justify-center items-center'>
                        <img src="/src/assets/images/digital-marketting.svg" alt="G-design-icon" />
                        <h2 className='text-[30px] font-inter font-semibold text-[#B1E734]'>DIGITAL MARKETING</h2>
                    </div>
                    <div className='w-1/3 h-full flex flex-col justify-start items-end'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>We take inspiration from a range of mediums, trends and attitudes. We use it to craft innovative websites. Those websites transform brands.</p>
                        <button className='primary-btn mt-[50px] btn py-[10px] px-[30px] bg-[#D9D9D9] text-[22px] text-[#000]'>Learn more</button>
                        
                    </div>
                    <div className='w-1/3 flex flex-col items-center gap-10 mySwiper'>
                        <Swiper navigation={true} modules={[Navigation]} loop={true}  >
                            <SwiperSlide><img src="/src/assets/images/slide1.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide3.png" alt="right1"/></SwiperSlide>
                            <SwiperSlide><img src="/src/assets/images/slide5.png" alt="right1"/></SwiperSlide>
                        </Swiper>
                        
                        
                    </div>

                    <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

                </div>
                
            </div>
            
        </div>
    );
};

export default ServiceSection;