import React from 'react';
import headerBg from '../../header-bg.jpg'

const Header = () => {
    return (
        <div className='relative flex flex-col justify-center'>
            <img src={headerBg} alt="" className='h-60 md:h-80 top-16 w-full object-cover blur-sm brightness-90'/>
            <div className='text-gray-200 absolute px-6 md:px-16'>
                <h2 className='text-2xl md:text-3xl font-medium'>Crack The Coding Interview</h2>
                <p className='hidden md:block md:text-lg lg:text-base'>So, You're a Web Developer afraid of coding interviews? Crack the Coding Interview today with QuizNet</p>
            </div>
        </div>
    );
};

export default Header;