import React from 'react';
import { Link } from 'react-router-dom';

const EachAppliedJob = ({ appliedJob }) => {
    const { id, companyLogoImgUrl, jobTitle, companyName, isRemote,
        isFullTime, cityLocation, countryName, salaryRange } = appliedJob
    return (
        <div className='border border-gray-300 p-2 rounded-md flex flex-col justify-between items-center
                        md:flex-row md:p-4 mb-4'>
            <div className='flex flex-col items-center gap-8
                            md:flex-row'>

                <img
                    className='h-40 w-40 object-contain'
                    src={companyLogoImgUrl}
                />

                <div className='flex flex-col gap-2 mb-4 md:mb-0'>
                    <p
                        className='text-xl font-bold
                                   md:text-2xl'
                    >{jobTitle}</p>

                    <p className='text-gray-500'>{companyName}</p>

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
                        className='text-gray-500 flex flex-col gap-1
                                  md:flex-row md:gap-4'
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
            </div>
            <Link
                className='py-2 px-3 w-full text-center md:w-auto text-white rounded-md bg-gradient-to-r from-gradient-start to-gradient-end
                           md:py-2 md:px-4'
                to={`/details/${id}`}>View Details
            </Link>
        </div>
    );
};

export default EachAppliedJob;