import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/Images/Login/login.jpeg'

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data => {
        console.log(data);

    }
    console.log(errors);
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${loginImg})`, backgroundSize: "cover" }} className='h-[800px] flex justify-center items-center p-2'>
            <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto bg-black bg-opacity-40 p-2 sm:p-10 lg:p-20 border rounded-lg '>
                <h2 className='text-xl text-center text-white'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full my-4' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-2'>New to Please  <Link className='text-secondary' to="/signUp">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;