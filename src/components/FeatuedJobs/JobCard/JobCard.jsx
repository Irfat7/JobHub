import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { id, companyLogoImgUrl, jobTitle, companyName, isRemote, isFullTime, cityLocation, countryName, salaryRange } = job
    return (
        <div
            className='border border-gray-300 rounded-md p-10 text-left text-base
                       '
        >
            <img
                className='h-8 mb-5
                           md:h-10 md:mb-8'
                src={companyLogoImgUrl}
            />
            <div className='flex flex-col gap-3'>
                <p
                    className=' text-xl font-bold
                                md:text-2xl'
                >{jobTitle}</p>
                <p
                    className='text-gray-500'
                >{companyName}</p>
                <div className='flex gap-3'>
                    <span
                        className='flex justify-center font-bold items-center py-1 px-1.5 common-font-style border border-2 rounded-md border-gradient-end
                                   md:py-1 md:w-1/3'
                    > {isRemote ? 'Remote' : 'Onsite'} </span>
                    <span
                        className='flex justify-center font-bold items-center py-1 px-1.5 common-font-style border border-2 rounded-md border-gradient-end
                                   md:py-1 md:w-1/3 md:font-bold'
                    > {isFullTime ? 'Full Time' : 'Part Time'} </span>
                </div>

                <div
                    className='text-gray-500 flex flex-col gap-1 mb-4
                             md:mb-5 md:flex-row md:gap-4'
                >
                    <p>
                        <span>$</span>
                        {cityLocation}, {countryName}
                    </p>
                    <p>
                        <span>$</span>
                        Salary : {salaryRange}
                    </p>
                </div>
            </div>


            <Link to={`/details/${id}`}>
                <button
                    className='py-2 px-3 text-white rounded-md bg-gradient-to-r from-gradient-start to-gradient-end
                      md:py-2 md:px-4'
                >View Details</button>
            </Link>
        </div>
    );
};

export default JobCard;