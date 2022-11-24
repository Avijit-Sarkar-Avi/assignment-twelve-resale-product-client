import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    useTitle('Login')
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-cyan-400 font-bold text-center'>LogIn</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Enter Email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Enter Password" className="input input-bordered" />
                    </div>
                    <br />
                    <input className='btn w-full' value="LogIn" type="submit" />
                </form>
                <br />
                <p>Create An Account? <Link className='text-cyan-400' to="/signup">SignUp</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>Continue With GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;