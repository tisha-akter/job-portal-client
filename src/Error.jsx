import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='px-10 py-10'>
            <h1 className='text-center text-5xl text-red-800 mb-4 md:mt-28'>404 not found!</h1>
            <h3 className='text-center text-2xl text-red-500 mb-4'>Sorry, this page doesn't exit!!!!</h3>
            <div className='text-center text-3xl font-bold text-indigo-500'>
            <Link to="/">Go Home</Link>
            </div>
        </div>
    );
};

export default Error;