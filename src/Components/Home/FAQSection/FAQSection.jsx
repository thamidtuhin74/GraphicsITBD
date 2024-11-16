import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
        {
            question: "What is Tailwind CSS?",
            answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
        },
        {
            question: "How do I use React with Tailwind?",
            answer: "You can install Tailwind CSS in a React project and use its classes directly in your components.",
        },
        {
            question: "What is a component in React?",
            answer: "A component in React is a reusable piece of UI logic written in JavaScript.",
        },
        {
            question: "How does Tailwind improve productivity?",
            answer: "Tailwind CSS provides pre-defined utility classes, which reduces custom CSS writing.",
        },
        {
            question: "Can I customize Tailwind styles?",
            answer: "Yes, you can customize Tailwind using the `tailwind.config.js` file.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className='w-full font-inter h-auto bg-[#EEE9FF]'>
            <div className='container mx-auto h-full flex flex-col justify-center items-center font-inter py-16 text-[#000]'>

                <div className="section-title mb-12 flex flex-col items-center">
                    <h2 className='text-[75px] font-inter font-semibold text-[#181818]'>Frequently Asked Questions</h2>
                    <p className='text-[18px] text-center w-[70%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                <div className=" grid grid-cols-2 gap-5 w-full justify-center">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className=" w-full"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-medium text-white bg-[#676565] hover:bg-[#676565] rounded-[15px] rounded-br-[0px] shadow-sm"
                            >
                                <span>{faq.question}</span>
                                
                                <BsPlusCircleFill className='text-[#B1E734] text-[34px]' />
                            </button>
                            {activeIndex === index && (
                                <div className="w-[90%] mx-auto p-10 bg-transparent text-gray-700 text-left border-[1px] border-[#676565] rounded-[15px] rounded-br-[0px]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                

                <img className='absolute left-[35%] top-[50%]' src="/src/assets/images/rect-tri.svg" alt="" srcset="" />

            </div>
        </div>
    );
};

export default FAQSection;