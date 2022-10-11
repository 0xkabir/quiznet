import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data
    console.log(topics)
    return (
        <div className='grid md:grid-cols-4 mx-10 gap-10'>
            {topics.map(topic=><Topic key={topic.id} topic={topic}></Topic>)}
        </div>
    );
};

export default Topics;