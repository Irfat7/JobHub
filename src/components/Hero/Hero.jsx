import React from 'react';
import coverPic from '../../assets/hero-person.png'

const Hero = () => {
    return (
        <div className='text-5xl font-bold text-center flex justify-between items-center flex-col-reverse
                        md:mt-8 md:flex-row md:gap-32 md:text-left md:text-8xl'>
            <div
                className='flex flex-col gap-3 
                md:gap-5'>
                <div>
                    <p
                        className='mb-2 mt-2'
                    >One Step</p>

                    <p
                        className='mb-2'
                    >Close To Your</p>

                    <p
                        className='common-font-style'
                    >Dream Job</p>
                </div>
                <p
                    className='text-sm font-normal text-gray-600 leading-normal'
                >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button
                    className='w-full py-2 font-bold text-xl text-white rounded-md bg-gradient-to-r from-gradient-start to-gradient-end
                               md:w-48 md:px-4'
                >Get Started</button>
            </div>
            <img
                className='w-3/4 md:w-1/3'
                src={coverPic} alt="" />
        </div>
    );
};

export default Hero;