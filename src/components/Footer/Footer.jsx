import React from 'react';
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='common-width text-white p-8 flex-wrap flex justify-between'>
                <div className='justify-self-center mb-8 md:w-full lg:w-72 flex flex-col gap-3'>
                    <p
                        className='font-extrabold text-3xl
                               md:font-bold'
                    >JobHub</p>
                    <p
                        className='text-gray-400'
                    >There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex gap-2 justify-center'>
                        <div className='bg-white inline-block p-2 rounded-full'>
                            <img src={facebook} alt="" />
                        </div>
                        <div className='bg-white inline-block p-2 rounded-full'>
                            <img src={twitter} alt="" />
                        </div>
                        <div className='bg-white inline-block p-2 rounded-full'>
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>

                <div className=' w-1/2 mb-8 md:w-28 flex flex-col gap-2'>
                    <p
                        className='text-lg font-semibold'
                    >Company</p>
                    <p className='text-gray-400'>About Us</p>
                    <p className='text-gray-400'>Work</p>
                    <p className='text-gray-400'>Latest News</p>
                    <p className='text-gray-400'>Careers</p>
                </div>

                <div className='w-1/2 mb-8 md:w-28 flex flex-col gap-2'>
                    <p
                        className='text-lg font-semibold'
                    >Product</p>
                    <p className='text-gray-400'>Prototype</p>
                    <p className='text-gray-400'>Work</p>
                    <p className='text-gray-400'>Plans & Pricing</p>
                    <p className='text-gray-400'>Customers</p>
                    <p className='text-gray-400'>Integrations</p>
                </div>

                <div className='w-1/2 mb-8 md:w-28 flex flex-col gap-2'>
                    <p
                        className='text-lg font-semibold'
                    >Support</p>
                    <p className='text-gray-400'>Help Desk</p>
                    <p className='text-gray-400'>Sales</p>
                    <p className='text-gray-400'>Become a Partner</p>
                    <p className='text-gray-400'>Developers</p>
                </div>

                <div className='w-1/2 mb-8 md:w-28 flex flex-col gap-2'>
                    <p
                        className='text-lg font-semibold'
                    >Contact</p>
                    <p className='text-gray-400'>524 Broadway , NYC</p>
                    <p className='text-gray-400'>+1 777 - 978 - 5570</p>
                </div>

                <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>

                <div className='w-full flex items-center gap-2 flex-col sm:flex-row text-xs text-gray-500 md:justify-between'>
                    <p>@2023 JobHub. All Rights Reserved</p>
                    <p>Powered by JobHub</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;