import React from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    document.title="Blogs"

    const blogs = [
        {
            question: 'When should you use context API?',
            answer: "Managing state is an essential part of developing applications in React. A common way to manage state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application. But it can be annoying to pass props when components are far away from each other. This situation is called props drilling. This can make an application slower and harder to work with. To avoid this context api should be used as well as when too many components using same state."
        },
        {
            question: 'What is a custom hook?',
            answer: "Hooks are reusable function and custom hooks are the reusable function that aren't built in like useState, useEffect. Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other react components. It allows us to reuse some piece of code in several parts of our app."
        },
        {
            question: 'What is useRef?',
            answer: "The useRef hook in React is used to create a mutable ref object that can be used to hold a reference to a DOM element or to persist values across renders without causing re-renders. It allows to interact with the DOM directly and access or modify the properties of DOM elements. Using useRef, we can interact with the DOM element without directly manipulating the DOM. This is particularly useful for managing input focus, working with animations, integrating third-party libraries, and more. It's also handy for persisting values across renders when we don't want those values to trigger re-renders of a component."
        },
        {
            question: 'What is useMemo?',
            answer: "useMemo() is a React hook, which returns a memoized value. What kind of value is that? In computing, memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Function is considered expensive, when it synchronously calculates a value which is computationally expensive to calculate or has a long for loop. Expensive operations can be costly in either time, memory, or processing. In addition to potential technical issues, this may lead to poor user experience. So, this hooks returns a cached value of an expensive function. useRef has two parameters first one is the expensive function and the second one is the array of dependency based on which the function reruns."
        },
    ]

    return (
        <div className='mt-28'>
            {
                blogs.map((blog, index)=> <Blog key={index} blog={blog}/>)
            }
        </div>
    );
};

export default Blogs;