import React, { useContext } from 'react';
import { AppliedJobsContext } from '../Header/Header';
import EachAppliedJob from './EachAppliedJob/EachAppliedJob';

const AppliedJobs = () => {
    document.title = 'Applied Jobs'

    const { appliedJobs } = useContext(AppliedJobsContext)
    return (
        <div>
            <p
                className='font-bold text-3xl text-center my-16 
                       md:my-28'
            >Applied Jobs</p>

            <div>
                {
                    appliedJobs.length &&
                    <div className='w-full mb-4 rounded-md flex justify-end'>
                        <div>
                            <select onChange={()=>console.log('changed')} id="countries" className="px-4 py-2 border focus:outline-gradient-end border-gray-300 rounded-lg">
                                <option disabled selected>Filter By</option>
                                <option>Remote</option>
                                <option>Part Time</option>
                                <option>Date</option>
                            </select>
                        </div>
                    </div>

                }
                {
                    appliedJobs.length
                        ? appliedJobs.map((appliedJob, index) => <EachAppliedJob key={index} appliedJob={appliedJob} />)
                        : <h1>NO JOBS</h1>
                }
            </div>

        </div>
    );
};

export default AppliedJobs;