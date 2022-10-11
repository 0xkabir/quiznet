import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const {name,questions} = useLoaderData().data
    let serial = 0
    return (
        <div>
            <h2 className='text-4xl font-medium text-center'>Quiz of {name}</h2>
            {
                questions.map(question => {
                    serial++;
                    return <QuizQuestion key={question.id} quizQuestion={question} serial={serial}></QuizQuestion>
                })
            }
        </div>
    );
};

export default Quiz;