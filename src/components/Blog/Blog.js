import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = useLoaderData()
    return (
        <div className='mt-8'>
            <h1 className='text-3xl text-center font-medium'>Common JavaScript Interiew Questions</h1>
            {blogs.map((blog, index) => <SingleBlog key={index} blog={blog}></SingleBlog>)}
        </div>
    );
};

export default Blog;