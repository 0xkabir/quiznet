import React from 'react';
import { Markup } from 'interweave';
import './QuizQuestion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    
    return (
        <div className='w-[340px] md:w-[400px] mx-auto bg-gray-200 p-5 md:p-10 my-5 rounded-xl shadow-lg'>
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
    );
};

export default QuizQuestion;