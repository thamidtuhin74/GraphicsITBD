import React from 'react';
import Marquee from "react-fast-marquee";

const Footer = () => {
    return (
        <footer className="bg-[#EEE9FF] text-[#404040] pb-10 px-6">
            <div className='py-20'>
                <Marquee>
                    <div className=' flex flex-row justify-between gap-10'>
                        {/* <img src="/src/assets/images/brands/GRAPHICS-IT-BD.png" alt="Brand image"/>
                        <img src="/src/assets/images/brands/WEBVALY.png" alt="Brand image"/>
                        <img src="/src/assets/images/brands/CLIPPING-PATH-GRAPHICS.png" alt="Brand image"/>
                        <img src="/src/assets/images/brands/CAR-PHOTO-BACKGROUNDING.png" alt="Brand image"/>
                        <img src="/src/assets/images/brands/CAR-PICS-EDITING.png" alt="Brand image"/> */}
                        <p
                            style={{
                                WebkitTextStroke: "1px black",
                                color: "transparent",
                            }}
                            className="text-[60px] font-medium"
                            >
                            GRAPHICS IT BD
                        </p>
                        <p
                            style={{
                                WebkitTextStroke: "1px black",
                                color: "transparent",
                            }}
                            className="text-[60px] font-medium"
                            >
                            WEBVALY
                        </p>
                        <p
                            style={{
                                WebkitTextStroke: "1px black",
                                color: "transparent",
                            }}
                            className="text-[60px] font-medium"
                            >
                            CLIPPING PATH GRAPHICS
                        </p>
                        <p
                            style={{
                                WebkitTextStroke: "1px black",
                                color: "transparent",
                            }}
                            className="text-[60px] font-medium"
                            >
                            CAR PHOTO BACKGROUNDING
                        </p>
                        <p
                            style={{
                                WebkitTextStroke: "1px black",
                                color: "transparent",
                            }}
                            className="text-[60px] font-medium"
                            >
                            CAR PICS EDITING
                        </p>
                        
                        
                    </div>
                </Marquee>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left pb-5">
                {/* Logo and Description */}
                <aside className="flex flex-col items-start gap-3">
                    <div className="flex items-center space-x-3">
                        <img src="/src/assets/images/logo.png" alt="" />
                    </div>
                    <p className="text-sm text-left w-[80%]">
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33
                    </p>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </aside>
        
                {/* Services */}
                <nav className="space-y-2 md:pl-20">
                    <h6 className="font-semibold text-gray-800 uppercase">Services</h6>
                    <ul className="space-y-1 ">
                    <li>
                        <a href="#" className="hover:underline">
                        Photo Solution
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Video Editing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Graphic Design
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Web Development
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Digital Marketing
                        </a>
                    </li>
                    </ul>
                </nav>
        
                {/* Company */}
                <nav className="space-y-2 md:pl-20">
                    <h6 className="font-semibold text-gray-800 uppercase">Top Links</h6>
                    <ul className="space-y-1">
                    <li>
                        <a href="#" className="hover:underline">
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Careers
                        </a>
                    </li>
                    </ul>
                </nav>
        
                {/* Legal */}
                <nav className="space-y-2 md:pl-20">
                    <h6 className="font-semibold text-gray-800 uppercase">Contact</h6>
                    <ul className="space-y-1">
                    <li>
                        <a href="#" className="hover:underline">
                        Kholifapara, Dhap Satgara, Rangpur City Corporation,Rangpur-5400
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Email: graphicsitbd@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Phone: +880 1700000000
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 text-left border-t-[1px] border-[#3C3C3C]">
                {/* Logo and Description */}
                <aside className="grid-flow-col items-center">
                    
                    <p>
                    © 2024 Graphics IT BD Trademarks and brands are the property of their respective owners.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="#" className="hover:underline">
                            Privacy policy
                        </a>
                        <a href="#" className="hover:underline">
                            Terms & conditions
                        </a>
                    
                    </div>
                </nav>
            </div>
            
        </footer>
        
    );
};

export default Footer;