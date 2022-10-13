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
        <div className='fixed inset-0 bg-opacity-30 backdrop-brightness-75 backdrop-blur-sm flex justify-center items-center' >
            <div className='bg-white p-5 lg:mt-16 rouded shadow-lg relative w-[90vw] md:w-[450px]'>
                <FontAwesomeIcon id='close-btn' icon={faXmark} className='cursor-pointer absolute top-5 right-5 bg-slate-700 hover:bg-slate-900 px-3 py-2.5 text-white font-medium rounded-full' onClick={handleOnClose}></FontAwesomeIcon>
                <h3 className='text-3xl font-medium'>Test Completed</h3>
                <p className='md:text-lg lg:text-base mb-3'>correct: {testResult[0].value} | incorrect: {testResult[1].value}
                </p>
                <div className='h-64 md:72'>
                    <ResultBarChart></ResultBarChart>
                </div>
                <div className='text-center'>
                    <button className='bg-slate-700 hover:bg-slate-900 px-8 py-2 rounded text-white font-medium' onClick={handleOnClose}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultModal;