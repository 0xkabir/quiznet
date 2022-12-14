import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic
    return (
        <NavLink to={`/quiz/${id}`}>
            <div className='relative w-72 mx-auto flex justify-center items-center rounded-lg shadow-xl bg-gray-800'>
            <img src={logo} alt="" className='dimmed'/>
            <div className='absolute w-72 h-full backdrop-brightness-50 backdrop-blur-sm py-10 flex flex-col justify-center items-center text-gray-200'>
                <h3 className='text-3xl font-medium'>{name}</h3>
                <p className='text-sm md:text-base lg:text-sm'>{total} Quizes | 10 Minutes</p>
            </div>
            </div>
        </NavLink>
    );
};

export default Topic;