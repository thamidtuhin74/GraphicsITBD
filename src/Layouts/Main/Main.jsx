import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <Header className="absolute"></Header>
                <div className='w-full'>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
            
        </div>
    );
};

export default Main;