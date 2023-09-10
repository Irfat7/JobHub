import React, { createContext, useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import ScrollTop from '../../Utility/ScrollTop';
import toast, { Toaster } from 'react-hot-toast';
import { addToLocalStorage, getLocalStorage } from '../../Utility/LocalStorageManager';
import Footer from '../Footer/Footer';

export const AllJobsContext = createContext()
export const AppliedJobsContext = createContext()

const Header = () => {
    const [allJobs, setAllJobs] = useState(useLoaderData())
    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        const storedJobsId = getLocalStorage()
        const tempAppliedJobs = []
        for (let id of storedJobsId) {
            const fullJobDetails = allJobs.find(job => job.id === id)
            if (fullJobDetails) {
                tempAppliedJobs.push(fullJobDetails)
            }
        }
        setAppliedJobs(tempAppliedJobs)
    },
        [allJobs])

    const applyJobHandler = (selectedJob) => {
        const alreadyApplied = appliedJobs.find(job => job.id === selectedJob.id)
        if (alreadyApplied) {
            toast('You already applied for this job')
            return
        }
        setAppliedJobs([...appliedJobs, selectedJob])
        addToLocalStorage(selectedJob.id)
        toast('Jobs Applied')
    }


    return (
        <div>
            <div className='common-width'>
                <ScrollTop />
                <Navbar />
                <div className='common-width px-4 my-5'>
                    <AllJobsContext.Provider value={allJobs}>
                        <AppliedJobsContext.Provider value={{ appliedJobs, applyJobHandler }}>
                            <Outlet />
                        </AppliedJobsContext.Provider>
                    </AllJobsContext.Provider>
                </div>
                <Toaster />
            </div>
            <Footer/>
        </div>
    );
};

export default Header;