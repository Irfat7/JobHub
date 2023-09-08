import React, { createContext, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';

export const AllJobsContext = createContext()

const Header = () => {
    const [allJobs, setAllJobs] = useState(useLoaderData())

    return (
        <div className='common-width'>
            <Navbar />
            <div className='common-width px-4 my-5'>
                <AllJobsContext.Provider value={allJobs}>
                    <Outlet />
                </AllJobsContext.Provider>
            </div>
        </div>
    );
};

export default Header;