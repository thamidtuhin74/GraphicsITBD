import React from 'react';

const ServiceSlider = () => {
    return (
        
    // <marquee width="100%" direction="left" className="bg-[#B1E734]">
    //     <div className='flex justify-between gap-10 py-8'>
    //         <div className="service-title text-[18px] uppercase">eCommerce Photo Editing</div>
    //         <div className="service-title text-[18px] uppercase">Car Photo Editing</div>
    //         <div className="service-title text-[18px] uppercase">AI Photo Editing</div>
    //         <div className="service-title text-[18px] uppercase">Infographic Design</div>
    //         <div className="service-title text-[18px] uppercase">UI UX Design</div>
    //         <div className="service-title text-[18px] uppercase">Social Media Design</div>
    //         <div className="service-title text-[18px] uppercase">eCommerce Video Editing</div>
    //         <div className="service-title text-[18px] uppercase">Intro & Outro video</div>
    //         <div className="service-title text-[18px] uppercase">eCommerce Development</div>
    //         <div className="service-title text-[18px] uppercase">Wordpress Development</div>
    //     </div>
    // </marquee>
        <div className="marquee bg-[#B1E734] flex m-0 p-0 overflow-hidden">
            <div className="container marquee-content flex justify-between px-5 py-8">
                <div className="service-title text-[18px] uppercase">eCommerce Photo Editing</div>
                <div className="service-title text-[18px] uppercase">Car Photo Editing</div>
                <div className="service-title text-[18px] uppercase">AI Photo Editing</div>
                <div className="service-title text-[18px] uppercase">Infographic Design</div>
                <div className="service-title text-[18px] uppercase">UI UX Design</div>
                <div className="service-title text-[18px] uppercase">Social Media Design</div>
                <div className="service-title text-[18px] uppercase">eCommerce Video Editing</div>
                <div className="service-title text-[18px] uppercase">Intro & Outro video</div>
                <div className="service-title text-[18px] uppercase">eCommerce Development</div>
                <div className="service-title text-[18px] uppercase">Wordpress Development</div>
            </div>
            {/* Repeat content for continuous scrolling effect */}
            
        </div>
    
    );
};

export default ServiceSlider;