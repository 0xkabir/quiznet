import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data
    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 md:mx-20 lg:mx-10'>
            {topics.map(topic=><Topic key={topic.id} topic={topic}></Topic>)}
            </div>
        </div>
    );
};

export default Topics;