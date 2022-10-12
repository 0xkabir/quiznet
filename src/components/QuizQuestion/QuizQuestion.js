import React, { useState } from 'react';
import { Markup } from 'interweave';
import './QuizQuestion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const QuizQuestion = ({serial, quizQuestion}) => {
    const {question, options, correctAnswer} = quizQuestion
    const showToast = answer => {
        if(answer === correctAnswer){
            return toast.success('Correct Answer!!', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        else{
            return toast.error('Incorrect Answer', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }

    }

    const [show, setShow] = useState(false)
    
    return (
        <div className={'w-[340px] md:w-[400px] mx-auto bg-gray-200 p-5 md:p-10 my-5 rounded-xl shadow-lg'}>
            <div className={'flex flex-col justify-center relative'}>
                <div onClick={()=>setShow(!show)} className='cursor-pointer absolute top-0 md:top-[-20px] right-0 md:right-[-10px]'>
                    {
                        show?<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>:<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    }
                </div>
            <div className={show?'block':'hidden'}>
                <h2 className='text-2xl font-medium'>Correct Answer:</h2>
                <p className='text-center pt-5'>{correctAnswer}</p>
            </div>
            <div className={show?'hidden':'block'}>
            <div className='flex items-start question'>
                {serial}. <Markup content={question}/>
            </div>   
            <div>
                {
                    options.map((option, index) =><div key={index} className='hover:bg-slate-300 rounded'>
                            <input type="radio" name={`question-${serial}`} id={`option-${serial}-${index}`} onClick={()=>showToast(option)}/>
                            <label htmlFor={`option-${serial}-${index}`}>{option}</label>
                            <ToastContainer
                            position="bottom-right"
                            autoClose={2500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            />
                        </div>)
                    }
                </div>
            </div>
            </div>    
        </div>
    );
};

export default QuizQuestion;