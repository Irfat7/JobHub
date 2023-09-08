import React from 'react';
import Hero from '../../Hero/Hero';
import JobCategory from '../../JobCategory/JobCategory';
import FeaturedJobs from '../../FeatuedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className='md:px-4 '>
            <Hero />
            <JobCategory />
            <FeaturedJobs />
        </div>
    ); 
};

export default Home;