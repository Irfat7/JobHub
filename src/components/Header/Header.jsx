import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='common-width'>
            <Navbar />
            <div className='common-width px-4 my-5'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Header;