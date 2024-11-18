import React from 'react';
import Marquee from 'react-fast-marquee';

const ServiceSlider = () => {
    return (
        <div className="bg-[#B1E734] flex m-0 p-0 overflow-hidden">
            <Marquee>
                <div className="flex flex-row justify-between px-5 py-8 gap-20">
                    <div className="service-title text-[18px] uppercase">eCommerce <br/>Photo Editing</div>
                    <div className="service-title text-[18px] uppercase">Car Photo<br/> Editing</div>
                    <div className="service-title text-[18px] uppercase">AI Photo<br/> Editing</div>
                    <div className="service-title text-[18px] uppercase">Infographic<br/> Design</div>
                    <div className="service-title text-[18px] uppercase">UI UX <br/>Design</div>
                    <div className="service-title text-[18px] uppercase">Social <br/>Media Design</div>
                    <div className="service-title text-[18px] uppercase">eCommerce <br/>Video Editing</div>
                    <div className="service-title text-[18px] uppercase">Intro &<br/> Outro video</div>
                    <div className="service-title text-[18px] uppercase">eCommerce<br/> Development</div>
                    <div className="service-title text-[18px] uppercase">Wordpress <br/>Development</div> 
                </div>
            {/* Repeat content for continuous scrolling effect */}
            </Marquee>

        </div>    
    );
};

export default ServiceSlider;