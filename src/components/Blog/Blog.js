import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = [
        {
            question:"What is the purpose of React-Router?",
            answer:"The main purpose of React-Router is to develop single page web applications. React-Router is used to define multiple routes in the application. When the url typed in the address-bar matches with any routes, a user is directed to that route without reloading the application. Thus React-Router significantly improves the UI of the application."
        },
        {
            question:"How does Context API work?",
            answer: "Context API is a way to create and pass global variables that avoids props drilling in a React App. A context can be created with createContext(), which returns a provider. Provider acts as the parent of the children where the variables needs to be passed. The variables can be grabbed on the children by useContext and thus the variables can be used on the children elements without props drilling."
        },
        {
            question:"Write details about useRef()",
            answer:"useRef() is a hook that allows to create a reference to DOM elemnt in the functional component. This hook returns a mutuable object which stores a variable in its .current property. The value of the variable is passed as an argument during creating the reference using useRef(). The returned object exists during the full lifetime of the component. The created reference object can be passed to an element using the ref attribute. React changes the .current property of that reference object whenever the DOM node changes. However useRef() doesn't cause React to re-render even if the value of the .current property is changed."
        }
    ]
    return (
        <div className='mt-8'>
            <h1 className='text-3xl text-center font-medium'>Common JavaScript Interiew Questions</h1>
            {blogs.map((blog, index) => <SingleBlog key={index} blog={blog}></SingleBlog>)}
        </div>
    );
};

export default Blog;