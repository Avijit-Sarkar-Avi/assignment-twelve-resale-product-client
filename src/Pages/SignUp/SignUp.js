import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    const { register, formState: { errors }, handleSubmit } = useForm();

    // const [createdUserEmail, setCreatedUserEmail] = useState('');

    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = data => {
        console.log(data.category)
        createUser(data.email, data.password, data.category)
            .then(result => {
                const user = result.user;
                toast('SignUp successfully');

                const userInfo = { displayName: data.name }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.category)
                    })
                    .catch(error => console.log(error))

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

    const saveUser = (name, email, category) => {
        const user = { name, email, category };
        fetch('https://server-phi-three.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                getUserToken(email);

                // setCreatedUserEmail(email);

            })
    }

    const getUserToken = email => {
        fetch(`https://server-phi-three.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/');
                }
            })
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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select User Type</span>
                        </label>
                        <select
                            {...register("category", { required: true })} className="input input-bordered">
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
                <button onClick={handleGoogleSignUp} className='btn btn-outline w-full'>Continue With GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;