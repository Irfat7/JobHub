import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <nav
            className='flex justify-between items-center p-2 relative
            '
        >
            <Link 
            to='/' 
            className='font-extrabold text-3xl
            md:font-bold'
            >JobHub</Link>

            <button
                onClick={() => setNav(!nav)}
                className='
                md:hidden'
            >{nav ? <FontAwesomeIcon icon={faXmark} size='xl' /> : <FontAwesomeIcon icon={faBars} size='xl'/>}
            </button>

            <div
                className={`px-2 py-1 absolute top-full right-0 duration-500 shadow-md ${nav ? 'translate-x-0' : 'translate-x-full'}
                md:static md:translate-x-0 md:px-0 md:py-0 md:shadow-none md:flex gap-12`}
            >
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistic'>Statistics</ActiveLink>
                <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <button
                className='hidden
                md:block px-5 py-3 rounded-md bg-gradient-to-r from-gradient-start to-gradient-end text-white text-lg'
            >Start Applying</button>
        </nav>
    );
};

export default Navbar;