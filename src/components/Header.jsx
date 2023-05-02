/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex  justify-between px-8 py-4 bg-red-500'>
            <h4 className='tex-2xl font-bold uppercase'> <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>chef's Choice</span></h4>
            <div className='mr-2'>
            <Link className='mr-2' to='/'>Home</Link>
            <Link className='mr-2' to='/blog'>Blog</Link>
            <Link className='mr-2' to='/'>Profilepicture</Link>
            </div>
        </div>
    );
};

export default Header;