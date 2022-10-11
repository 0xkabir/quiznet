import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    const {name, logo, total} = topic
    return (
        <div className='relative w-72 flex justify-center items-center rounded-lg shadow-xl bg-gray-800'>
            <img src={logo} alt="" className='dim'/>
            <div className='absolute h-full flex flex-col justify-center items-center text-gray-200'>
                <h3 className='text-3xl font-medium'>{name}</h3>
                <p className='text-sm'>Total Quiz: {total}</p>
            </div>
        </div>
    );
};

export default Topic;