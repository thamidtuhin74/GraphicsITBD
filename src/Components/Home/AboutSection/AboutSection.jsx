import React from 'react';

const AboutSection = () => {
    return (
        <div className='w-full font-inter h-[100vh] bg-[#EEE9FF]'>
            <div className='container mx-auto h-full flex flex-col justify-center items-center font-inter py-16 text-[#000]'>

                <div className="section-title mb-12">
                    <h2 className='text-[50px] font-inter font-semibold text-[#959595]'><span className='text-[70px] font-inter font-bold text-[#707070]'>TURNING</span> EVERY DETAIL INTO DIGITAL <span className='text-[70px] font-inter font-bold text-[#707070]'>SUCCESS</span></h2>
                </div>

                <div className='flex flex-row gap-5 px-12 justify-between items-start relative'>
                    <div className='w-1/2 h-full flex flex-col justify-start items-center'>
                        <p className='text-[22px] text-justify md:pl-[60px]'>At <span className='font-bold'>Graphics IT BD</span>  we know that every detail counts every detail of your brand and every part of your bespoke online presence. Your website showcases your business to potential customers. So, why settle for anything less than great? We never do that. We craft unique digital solutions that your customers will love.</p>
                        <button className='primary-btn mt-[220px] btn py-[10px] px-[30px] bg-[#D9D9D9] text-[22px]'>Learn more</button>
                    </div>
                    <div className='w-1/2 flex flex-col items-center gap-10'>
                        <div className="right-imgs flex">
                            <img src="/src/assets/images/right1.png" alt="right1" className='ml-[5px] relative z-1'/>
                            <img src="/src/assets/images/right2.png" alt="right2" className='ml-[-50px] mt-8'/>
                        </div>
                        <div className="right-count w-[90%]">
                            <div className='grid grid-cols-2 text-[22px]'>
                                <div className='border-[1px] border-[#bdbdbd] py-2'>
                                    <h2 className='text-[42px] font-bold'>25+</h2>
                                    <p>Project completed</p>
                                </div>
                                <div className='border-[1px] border-[#bdbdbd] py-2'>
                                    <h2 className='text-[42px] font-bold'>15+</h2>
                                    <p>Year experience</p>
                                </div>
                                <div className='border-[1px] border-[#bdbdbd] py-2'>
                                    <h2 className='text-[42px] font-bold'>32</h2>
                                    <p>Happy customers</p>
                                </div>
                                <div className='border-[1px] border-[#bdbdbd] py-2'>
                                    <h2 className='text-[42px] font-bold'>9</h2>
                                    <p>Award achivements</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

                </div>
            </div>
        </div>
    );
};

export default AboutSection;