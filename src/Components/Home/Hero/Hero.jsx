import React, { useState, useEffect } from 'react';

const Hero = () => {
    const services = [
        { title: 'Business Websites', link: '/business-websites' },
        { title: 'Ecommerce Development', link: '/ecommerce-development' },
        { title: 'Frontend Development', link: '/frontend-development' },
        { title: 'WordPress Design', link: '/wordpress-design' }
    ];

    const [currentService, setCurrentService] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Trigger fade-out animation
            setTimeout(() => {
                setCurrentService((prev) => (prev + 1) % services.length); // Cycle through services
                setFade(true); // Trigger fade-in animation
            }, 500); // Duration of fade-out
        }, 2000); // Change text every 2000ms

        return () => clearInterval(interval);
    }, [services.length]);

    return (
        <div className='w-full font-inter '>
            <div className='container mx-auto flex flex-col justify-between font-inter h-[100vh] pt-12 pb-16 text-[#fff]'>

                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/src/assets/video/bg-video.mp4" type="video/mp4" />
                </video>

                <div className="w-[90%] flex flex--col justify-end">
                    <div className="menu-top w-[200px] flex flex-col items-center">
                        <div className='w-1/2'>
                            <p className='border-[1px] rounded border-[#B1E734] bg-[#000] relative z-10'>Enquiries</p>
                        </div>
                        <hr className='h-[2px] bg-[#fff] w-full mt-[-13px]' />
                        <p className='mt-[13px]'>+8801798905167</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[100px] font-inter font-bold'>WELCOME TO <br />GRAPHICS IT BD</h1>
                    <div className='flex ml-[30%]'>
                        <p className='text-[20px] text-right w-[409px]'>If you use <span className='text-[#B1E734]'>Graphics IT BD</span> regularly and would like to help keep the site on the Internet.</p>
                    </div>
                </div>

                {/* Animated Button */}
                <div className='text-[100px] font-inter font-bold'>
                    <a 
                        href={services[currentService].link}
                        className={`btn rounded-lg border-[1px] border-[#C0C0C0] px-12 text-[#B1E734] transition-all duration-500 `}
                    >
                        <span className={`${fade ? 'fade-in' : 'fade-out'}`}>{services[currentService].title.toUpperCase()}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
