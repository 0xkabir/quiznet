import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Error from '../Error/Error';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import ResultModal from '../ResultModal/ResultModal';

export const ResultContext =  createContext()

const Quiz = () => {
    const {name,total, questions} = useLoaderData().data
    let serial = 0
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [givenAnswer, setGivenAnswer] = useState(0)
    const [showResultModal, setShowResultModal] = useState(false)
    const testResult = [{name:'correct', value:correct},
                        {name:'incorrect', value:incorrect}]
    const handleCloseModal = () => setShowResultModal(false)
    return (
        questions?<ResultContext.Provider value={testResult}>
            <div>
            <div className='pt-10'>
                <h2 className='text-3xl font-medium text-center'>Quiz of {name}</h2>
                <p className='text-center md:text-xl lg:text-base'>{total} Quizes | 10 Minutes</p>
            </div>
            {
                questions.map(question => {
                    serial++;
                    return <QuizQuestion key={question.id} quizQuestion={question} correct={correct} setCorrect={setCorrect} incorrect={incorrect} setIncorrect={setIncorrect} givenAnswer={givenAnswer} setGivenAnswer={setGivenAnswer} serial={serial}></QuizQuestion>
                })
            }
            <div className='text-center'>
                <button className='bg-slate-800 hover:bg-slate-900 text-white md:text-lg lg:text-base font-medium mt-5 mb-10 px-5 py-2 rounded-lg' disabled={givenAnswer!==total?true:false} onClick={()=>setShowResultModal(true)}>Finish Quiz</button>
            </div>
            <ResultModal visible={showResultModal} onClose={handleCloseModal} testResult={testResult}/>
        </div>
        </ResultContext.Provider>:<Error/>
    );
};

export default Quiz;