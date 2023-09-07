import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard/JobCard';

const FeaturedJobs = () => {
    const allJobs = useLoaderData()
    const [jobsToShow, setJobsToShow] = useState(allJobs.slice(0, 4))

    return (
        <div className='mt-16 text-center
                        md:mt-32'>
            <p
                className='mb-4 text-3xl font-bold
                           md:text-5xl md:mb-8'
            >Featured Jobs</p>
            <p
                className='mb-5 text-gray-600 text-sm leading-normal
                           md:mb-10 md:text-base'
            >Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div
                className='grid gap-5
                           md:grid-cols-2 md:gap-6'
            >
                {
                    jobsToShow.map(job => <JobCard key={job.id} job={job} />)
                }
            </div>
            {
                jobsToShow.length === 4 && <button
                    onClick={() => setJobsToShow(allJobs)}
                    className='mt-5 px-4 py-2 rounded-md font-bold text-white bg-gradient-to-r from-gradient-start to-gradient-end 
                               md:mt-10 md:px-6 md:py-3'
                >Show All Jobs</button>
            }
        </div>
    );
};

export default FeaturedJobs;