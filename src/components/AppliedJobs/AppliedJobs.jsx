import React, { useContext, useEffect, useState } from 'react';
import { AppliedJobsContext } from '../Header/Header';
import EachAppliedJob from './EachAppliedJob/EachAppliedJob';

const AppliedJobs = () => {
    document.title = 'Applied Jobs'

    const { appliedJobs } = useContext(AppliedJobsContext)

    const [appliedJobsToShow, setAppliedJobsToShow] = useState(appliedJobs)

    useEffect(()=>{
        setAppliedJobsToShow(appliedJobs)
    },[appliedJobs])

    const filterChangeHandler = (e) =>{
        const value = e.target.value
        if(value==='Remote'){
            const filtered = appliedJobs.filter(job=> job.isRemote===true)
            setAppliedJobsToShow(filtered)
        }
        else if(value==='Full Time'){
            const filtered = appliedJobs.filter(job=> job.isFullTime===true)
            setAppliedJobsToShow(filtered)
        }
        else if(value==='Date'){
            setAppliedJobsToShow(appliedJobs)
        }
    }

    return (
        <div>
            <p
                className='font-bold text-3xl text-center my-16 
                       md:my-28'
            >Applied Jobs</p>

            <div>
                <div className='w-full mb-4 rounded-md flex justify-end'>
                    <div>
                        <select onChange={(e) => filterChangeHandler(e)} id="countries" className="px-4 py-2 border focus:outline-gradient-end border-gray-300 rounded-lg">
                            <option disabled selected>Filter By</option>
                            <option>Remote</option>
                            <option>Full Time</option>
                            <option>Date</option>
                        </select>
                    </div>
                </div>
                {
                    appliedJobsToShow.length
                        ? appliedJobsToShow.map((appliedJob, index) => <EachAppliedJob key={index} appliedJob={appliedJob} />)
                        : <h1
                            className='font-bold text-2xl text-center p-10'
                        >NO JOBS Found</h1>
                }
            </div>

        </div>
    );
};

export default AppliedJobs;