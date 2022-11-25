import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))
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
                        <input type="text"
                            {...register("name",
                                { required: "Write your full name" })}
                            placeholder="Enter Full Name"
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                { required: 'Email is required' })}
                            placeholder="Enter Email" className="input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: "Password must be six characters long" }
                                })}
                            placeholder="Enter Password" className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select User Type</span>
                        </label>
                        <select
                            {...register("category", { required: true })} className="input input-bordered">
                            <option value='buyer'>Buyer</option>
                            <option value='saler'>Saler</option>
                        </select>
                    </div> */}

                    <br />
                    <input className='btn w-full' value="signup" type="submit" />
                </form>
                <br />
                <p>Have An Account? <Link className='text-cyan-400'
                    to="/login">LogIn</Link> </p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignUp} className='btn btn-outline w-full'>Continue With GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;