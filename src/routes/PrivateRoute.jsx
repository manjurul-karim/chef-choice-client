/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user , loading} =useContext(AuthContext)
    const location = useLocation();
    console.log(location);
        
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }


    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from :location}} replace ></Navigate>
};

export default PrivateRoute;