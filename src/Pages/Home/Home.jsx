import React from 'react';
import Hero from '../../Components/Home/Hero/Hero';
import ServiceSlider from '../../Components/Home/ServiceSlider/ServiceSlider';
import AboutSection from '../../Components/Home/AboutSection/AboutSection';
import ServiceSection from '../../Components/Home/ServiceSection/ServiceSection';
import VideoSection from '../../Components/Home/VideoSection/VideoSection';
import FAQSection from '../../Components/Home/FAQSection/FAQSection';
import Ourbrands from '../../Components/Home/OurBrands/Ourbrands';
import TestimonialSection from '../../Components/Home/TestimonialSection/TestimonialSection';
import ContactForm from '../../Components/Home/GetInTouch/GetInTouch';

const Home = () => {
    return (
        <div className='w-full'>
            <Hero></Hero>
            <ServiceSlider></ServiceSlider>
            <AboutSection></AboutSection>
            <ServiceSection></ServiceSection>
            <VideoSection></VideoSection>
            <FAQSection></FAQSection>
            <Ourbrands></Ourbrands>
            <TestimonialSection></TestimonialSection>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;