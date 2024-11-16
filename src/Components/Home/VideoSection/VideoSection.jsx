import React from 'react';
import ReactPlayer from 'react-player';

const VideoSection = () => {
    

    return (
        <div className='w-full font-inter h-[100vh] bg-[#EEE9FF]'>
            <div className='container mx-auto h-full flex flex-col justify-center items-center font-inter py-16 text-[#000]'>

                <div className="section-title mb-12">
                    <h2 className='text-[75px] font-inter font-semibold text-[#181818]'>Video section</h2>
                    <p className='text-[18px] text-center'>Service related tagline goes here</p>
                </div>

                <div className='w-full relative flex justify-center items-start'>
                    <div className='md:w-[98%] mx-auto h-[695px] flex flex-row gap-5 px-12 justify-between items-start relative z-1'>
                        <div className="reactplayer-wrapper absolute z-1 inset-0" >
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                loop={true}
                                playing={true}
                                url="https://www.youtube.com/watch?v=vbT-KXTEjg8&t"
                                controls={false}
                                muted={true}
                            />
                            {/* <img src="/src/assets/images/video-mask2.png" alt="" /> */}
                        </div>
                    </div>
                    <div className='md:w-[100%] mx-auto h-[700px] flex flex-row gap-0 justify-between items-start reactplayer-mask absolute top-0 left-[0%] z-0'>
                        
                    </div>
                </div>

                        {/* <img className='absolute z-0 w-[45%] h-[40%]' src="/src/assets/images/video-mask2.png" alt="" srcset="" /> */}

                    </div>
            </div>
    );
};

export default VideoSection;