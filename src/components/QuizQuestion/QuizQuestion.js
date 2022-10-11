import React, { useState } from 'react';
import { Markup } from 'interweave';
import './QuizQuestion.css'

const QuizQuestion = ({serial, quizQuestion}) => {
    const {question, options, correctAnswer} = quizQuestion
    const [selected, setSelected] = useState()
    console.log(selected)
    
    return (
        <div className='w-[400px] mx-auto bg-gray-200 p-10 my-5 rounded-xl shadow-lg'>
            <div className='flex items-start question'>
                {serial}. <Markup content={question}/>
            </div>   
            <div>
                {
                    options.map((option, index) => <div key={index} className='hover:bg-slate-300 rounded' onClick={()=>setSelected(option)}>
                        <input type="radio" name={`question-${serial}`} id={`option-${serial}-${index}`} />
                        <label htmlFor={`option-${serial}-${index}`}>{option}</label>
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;