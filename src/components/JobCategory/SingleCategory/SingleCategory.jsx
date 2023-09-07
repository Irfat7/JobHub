import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import './SingleCategory.css'

const SingleCategory = ({ eachCategory }) => {
    const { name, availableJobs } = eachCategory
    return (
        <div className='single-category-custom-style
                        py-9 w-3/4 text-md
                        md:text-left md:px-7'>
            <p
                className='mb-5'
            ><FontAwesomeIcon className='p' icon={faLaptopCode} size='2xl' /></p>
            <p
                className='mb-3 font-bold text-xl'
            >{name}</p>
            <p
                className='text-custom-dark-gray'
            >{availableJobs} jobs available</p>
        </div>
    );
};

export default SingleCategory;