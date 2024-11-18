import React from 'react';

const SingleReview = () => {
    return (
        <div className='p-3'>
            <img src="/src/assets/icons/quote.svg" alt="Quote icon" className='w-[50px]' />
            <p className='text-[20px] text-left font-medium py-4'>When we talk about Axtra, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter</p>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-2 items-center'>
                    <img src="/src/assets/user/1.png" alt="User image" />
                    <div className='flex flex-col items-start'>
                        <p className='text-[20px] text-left text-thin'><span className='font-medium'>John </span>Smith</p>
                        <p>Manager, XYZ</p>
                    </div>
                </div>
                <div className='flex flex-row gap-1'>
                    <img src="/src/assets/icons/fullstar.svg" alt="review star" className='w-[18%] h-auto !object-contain'/>
                    <img src="/src/assets/icons/fullstar.svg" alt="review star" className='w-[18%] h-auto !object-contain'/>
                    <img src="/src/assets/icons/fullstar.svg" alt="review star" className='w-[18%] h-auto !object-contain'/>
                    <img src="/src/assets/icons/fullstar.svg" alt="review star" className='w-[18%] h-auto !object-contain'/>
                    <img src="/src/assets/icons/halfstar.svg" alt="review star" className='w-[18%] h-auto !object-contain'/>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;