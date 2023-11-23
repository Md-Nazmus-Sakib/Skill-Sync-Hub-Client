import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signUpImg from '../../../assets/Images/Login/register.jpg'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signUpError, setSignUPError] = useState('');

    const handleSignUp = (data) => {
        console.log(data)
    }
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${signUpImg})`, backgroundSize: "cover" }} className='min-h-[800px] flex justify-center items-center px-4 py-20'>
            <div className='w-full sm:w-2/3 lg:w-1/2 mx-auto bg-black bg-opacity-40 p-2 sm:p-10 lg:p-20 border rounded-lg'>
                <h2 className='text-3xl text-center text-white'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label htmlFor="name" className="text-xl my-2">Name</label>
                        <input id='name' autoComplete="name" type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="photo" className="text-xl my-2">Photo Url</label>
                        <input id='photo' type="text" {...register("photo", {
                            required: "Photo url is Required"
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="email" className="text-xl my-2">Email</label>
                        <input id='email' autoComplete="email" type="email" {...register("email", {
                            required: "Email is Required"
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="password" className="text-xl my-2">Password</label>
                        <input id='password' type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*%^])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full mt-4 text-xl text-white' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='my-4'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;