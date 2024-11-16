import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { PiDotsNineBold } from 'react-icons/pi';

const Header = () => {
    return (
        <div>
            <div className='h-[100vh] w-[100px] bg-[#00000000] text-white flex flex-col justify-between fixed items-center py-5 top-0 z-1'>
            <div className="nav-top">
                <img src="/src/assets/icons/gitBD.svg" alt="Grapicsit BD" />
            </div>
            <div className="nav-center "><PiDotsNineBold className='text-[4rem] text-[#B1E734]'/></div>
            <div className="nav-bottom">
                <div className="profile">
                    <p><IoMdSearch className='text-[3rem] text-[#ff0000]'/></p>
                </div>
                <div className="logout">
                    <p><CiLogout className='text-[2.8rem] text-[#ff0000]'/>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;