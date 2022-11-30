import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import errorImage from '../../../asset/errorImage.jpg'

const DisplayError = () => {

    const { logOut } = useContext(AuthContext)

    const error = useRouteError();

    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='grid grid-cols-1 gap-11'>
            <img src={errorImage} alt="" className='w-56 h-56' />
            <p className='text-red-500'>Something went wrong!!!</p>

            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogout}>LogOut</button> and Log back in.</h4>
        </div>
    );
};

export default DisplayError;