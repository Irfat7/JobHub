import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='py-20 md:py-44 flex flex-col justify-center items-center'>
            <p
                className='mb-5 text-6xl md:mb-10 md:text-9xl font-extrabold'
            >Oops!</p>
            <p className='mb-3 text-2xl font-semibold'>404 - PAGE NOT FOUND</p>
            <Link
                className='py-2 px-3 text-white rounded-md bg-gradient-to-r from-gradient-start to-gradient-end
                md:py-2 md:px-4'
                to='/'>
                GO TO HOMEPAGE
            </Link>
        </div>
    );
};

export default ErrorPage;