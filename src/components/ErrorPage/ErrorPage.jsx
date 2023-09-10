import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <p
                className='mb-5 text-6xl md:mb-10 md:text-9xl font-extrabold'
            >Oops!</p>
            <p className='mb-5 text-2xl font-semibold'>404 - PAGE NOT FOUND</p>
            <Link
                className='py-2 px-3 text-lg text-white rounded-md bg-gradient-to-r from-gradient-start to-gradient-end
                md:py-2 md:px-4'
                to='/'>
                GO TO HOMEPAGE
            </Link>
        </div>
    );
};

export default ErrorPage;