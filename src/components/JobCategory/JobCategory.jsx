import React from 'react';
import SingleCategory from './SingleCategory/SingleCategory';

const JobCategory = () => {
    const categoryArray = [
        {
            name: 'Account & Finance',
            availableJobs: 300
        },
        {
            name: 'Creative Design',
            availableJobs: 200
        },
        {
            name: 'Marketing & Sales',
            availableJobs: 100
        },
        {
            name: 'Engineering Hub',
            availableJobs: 400
        }
    ]
    return (
        <div className='mt-16 text-center
                        md:mt-32'>
            <p
                className='mb-4 text-3xl font-bold
                md:text-5xl md:mb-8'
            >Job Category List</p>
            <p
                className='mb-5 text-gray-600 text-sm leading-normal
                md:mb-10 md:text-base'
            >Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div
                className='flex flex-col gap-4 items-center
                md:flex-row md:gap-8'
            >
                {
                    categoryArray.map((eachCategory, index) => <SingleCategory key={index} eachCategory={eachCategory} />)
                }
            </div>
        </div>
    );
};

export default JobCategory;