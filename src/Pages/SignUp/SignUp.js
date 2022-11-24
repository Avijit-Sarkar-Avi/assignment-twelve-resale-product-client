import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('Login')
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-cyan-400 font-bold text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Enter Full Name" className="input input-bordered" />
                    </div>

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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select User Type</span>
                        </label>
                        <select {...register("category", { required: true })} className="input input-bordered">
                            <option value='buyer'>Buyer</option>
                            <option value='saler'>Saler</option>
                        </select>
                    </div>

                    <br />
                    <input className='btn w-full' value="signup" type="submit" />
                </form>
                <br />
                <p>Have An Account? <Link className='text-cyan-400'
                    to="/login">LogIn</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>Continue With GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;