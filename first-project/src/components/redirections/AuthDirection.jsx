import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AuthDirection = () => {

    const router = useNavigate();
    const { state } = useContext(AuthContext);
    console.log(state, state.user === null)
  

    useEffect(() => {
        if(state && state?.user === null) {
            toast.error("please login to access this page");
            router("/login")
        }
    }, [])
}

export default AuthDirection
l