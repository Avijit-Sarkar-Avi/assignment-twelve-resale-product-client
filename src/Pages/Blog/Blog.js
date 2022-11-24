import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='m-20'>
            <div>
                <h1 className='text-3xl text-red-600'>1. What are the different ways to manage a state in a React application?</h1>
                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <p>Local state, Global state, Server state, URL state</p>
                <p>Local state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</p>
                <p>Global state: Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p>Server state: Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                <p>URL state: Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL.</p>
            </div>
            <div>
                <h1 className='text-3xl text-red-600'>2. How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            </div>
            <div>
                <h1 className='text-3xl text-red-600'>3. What is a unit test? Why should we write unit tests?</h1>
                <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                <p>To catch bugs early in the development process.
                    Automated unit tests help a great deal with regression testing. Detect code smells in your codebase. For example, if a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
            </div>
            <div>
                <h1 className='text-3xl text-red-600'>4. Difference between React vs. Angular vs. Vue?</h1>
                <p>React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.</p>
            </div>
        </div>
    );
};

export default Blog;