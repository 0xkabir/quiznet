import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ResultBarChart from '../ResultBarChart/ResultBarChart';

const ResultModal = ({visible, onClose, testResult}) => {
    const handleOnClose = () => {
        onClose()
    }
    if(!visible){
        return null;
    }
    return (
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
            <div className='bg-white p-5 lg:mt-16 rouded shadow-lg relative w-[90vw] h-auto md:w-[400px]'>
                <FontAwesomeIcon id='close-btn' icon={faXmark} className='cursor-pointer absolute top-2 right-2' onClick={handleOnClose}></FontAwesomeIcon>
                <h3 className='text-3xl font-medium'>Test Completed</h3>
                <p>correct: {testResult[0].value} | incorrect: {testResult[1].value}
                </p>
                <ResultBarChart></ResultBarChart>
            </div>
        </div>
    );
};

export default ResultModal;