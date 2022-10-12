import React from 'react';

const SingleBlog = ({blog}) => {
    const {question, answer} = blog
    return (
        <div className='p-5 bg-slate-200 m-5 rounded-lg shadow-xl'>
            <h2 className='text-2xl font-medium'>{question}</h2>
            <p className='text-lg lg:text-base'>{answer}</p>
        </div>
    );
};

export default SingleBlog;