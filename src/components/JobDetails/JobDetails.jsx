import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AllJobsContext, AppliedJobsContext } from '../Header/Header';

const JobDetails = () => {
    document.title="Job Details"
    const jobId = useLoaderData()
    const allJobs = useContext(AllJobsContext)
    const {appliedJobs, applyJobHandler} = useContext(AppliedJobsContext)

    const selectedJob = allJobs.find(job => job.id === jobId)
    const { id, jobTitle, jobDescription, jobResponsibilities, educationalRequirements, experienceRequirement, contactInformation, cityLocation, countryName, salaryRange } = selectedJob
    
    return (
        <div>
            <p
                className='font-bold text-3xl text-center my-16 
                       md:my-28'
            >Job Details</p>

            <div className='grid grid-cols-1 text-justify gap-12
                            md:grid-cols-2 md:gap-6'>
                <div>
                    <p className='leading-7 mb-5'>
                        <span className='font-bold'>Job Description: </span>
                        <span className='text-gray-600'>
                            {jobDescription}
                        </span>
                    </p>
                    <ul className='leading-7 mb-5'>
                        <p className='font-bold mb-4'>Job Responsibility:</p>
                        {
                            jobResponsibilities.map((responsibility, index) => <li className='text-gray-600 list-disc ml-6' key={index}> {responsibility} </li>)
                        }
                    </ul>
                    <div className='mb-5'>
                        <p className='mb-4 font-bold'>Education Requirements</p>
                        <p className='text-gray-600 leading-7'>{educationalRequirements}</p>
                    </div>
                    <div>
                        <p className='font-bold mb-4'>Experience</p>
                        <p className='text-gray-600 leading-6'>{experienceRequirement}</p>
                    </div>
                </div>
                <div className=''>
                    <div
                        className='bg-indigo-100 rounded-md p-7 mb-6 md:p-7 md:mb-6'
                    >
                        <p className='pb-6 mb-6 font-bold border-gray-300 border-b-2'>Job Details</p>
                        <p className='font-semibold mb-4'>Salary : <span className='text-gray-600 font-normal'>{salaryRange} (Per Month)</span></p>
                        <p className='font-semibold mb-8 '>Job Title : <span className='text-gray-600 font-normal'>{jobTitle}</span></p>
                        <p className='font-bold pb-6 mb-6 border-gray-300 border-b-2'>Contact Information</p>
                        <div className='mb-4'>
                            <span className='font-bold'>Phone : </span>
                            <span className='text-gray-600'>{contactInformation?.phone}</span>
                        </div>
                        <div className='mb-4'>
                            <span className='font-bold'>Email : </span>
                            <span className='text-gray-600'>{contactInformation?.email}</span>
                        </div>
                        <div className='mb-4'>
                            <span className='font-bold'>Address : </span>
                            <span className='text-gray-600'>{contactInformation?.address}</span>
                        </div>
                    </div>

                    <button
                        onClick={()=>applyJobHandler(selectedJob)}
                        className='w-full text-white text-lg rounded-md py-2 bg-gradient-to-r from-gradient-start to-gradient-end'>
                        Apply Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;