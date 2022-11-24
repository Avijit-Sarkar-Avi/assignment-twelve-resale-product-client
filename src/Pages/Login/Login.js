import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    useTitle('Login')
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signInUser } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            })
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
                        <input type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Enter Email"
                            className="input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "password is required",
                                    minLength: { value: 6, message: "Password must be six characters long" }
                                })}
                            placeholder="Enter Password"
                            className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
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