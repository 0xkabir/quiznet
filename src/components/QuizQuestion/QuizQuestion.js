import React, { useState } from 'react';
import { Markup } from 'interweave';
import './QuizQuestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const QuizQuestion = ({serial, quizQuestion, correct, setCorrect, incorrect, setIncorrect, givenAnswer, setGivenAnswer}) => {
    const {question, options, correctAnswer} = quizQuestion
    const [disabled, setDisabled] = useState(false)
    const showToastAndDisableBtn = answer => {
        setDisabled(!disabled)
        if(answer === correctAnswer){
            setCorrect(correct+1)
            setGivenAnswer(givenAnswer+1)
            return toast.success('Correct Answer!!');
        }
        else{
            setIncorrect(incorrect+1)
            setGivenAnswer(givenAnswer+1)
            return toast.error('Incorrect Answer');
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
                <p className='text-center md:text-xl lg:text-base pt-5'>{correctAnswer}</p>
            </div>
            <div className={show?'hidden':'block'}>
            <div className='flex items-start question'>
                {serial}. <Markup content={question}/>
            </div>   
            <div>
                {
                    options.map((option, index) =><div key={index} className='hover:bg-slate-300 md:text-xl lg:text-base rounded'>
                            <input type="radio" name={`question-${serial}`} id={`option-${serial}-${index}`} disabled={disabled?true:false} onClick={()=>showToastAndDisableBtn(option)}/>
                            <label htmlFor={`option-${serial}-${index}`}>{option}</label>
                        </div>)
                    }
                </div>
            </div>
            </div>    
        </div>
    );
};

export default QuizQuestion;