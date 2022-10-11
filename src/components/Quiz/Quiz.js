import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const {name,total, questions} = useLoaderData().data
    let serial = 0
    return (
        <div>
            <div className='pt-10'>
                <h2 className='text-3xl font-medium text-center'>Quiz of {name}</h2>
                <p className='text-center'>{total} Quizes | 10 Minutes</p>
            </div>
            {
                questions.map(question => {
                    serial++;
                    return <QuizQuestion key={question.id} quizQuestion={question} serial={serial}></QuizQuestion>
                })
            }
            <div className='text-center'>
                <button className='bg-slate-800 hover:bg-slate-900 text-white font-medium mt-5 mb-10 px-5 py-2 rounded-lg'>Finish Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;