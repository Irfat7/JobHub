import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer } = blog

    return (
        <div className='mb-4'>
            <p
                className='text-4xl font-semibold leading-10 mb-2'
            >{question}</p>
            <p
                className='p-4 tracking-wide text-gray-700 leading-7'
            >{answer}</p>
        </div>
    );
};

export default Blog;