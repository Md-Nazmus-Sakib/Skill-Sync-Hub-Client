import React from 'react';
import { useForm } from 'react-hook-form';
import teachImg from "../../../assets/Images/Login/register.jpg"
import Button from '../../Button/Button';
import useAuth from '../../../Hook/useAuth';
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import Swal from 'sweetalert2';


const TeachOn = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecret();
    const handleTeachOn = async (data) => {

        const teacherInfo = {
            teacherName: user?.displayName,
            teacherEmail: user?.email,
            teacherImage: user?.photoURL,
            title: data.title,
            experience: data.experience,
            category: data.category,
            status: 'pending'
        }
        axiosSecure.post('/teacher', teacherInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    // console.log('user added to the database')
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully submit!! Please Wait for Review .',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Please Wait for Review .',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${teachImg})`, backgroundSize: "cover" }} className='min-h-[800px] flex justify-center items-center px-4 py-20'>
            <div className='w-full sm:w-2/3 mx-auto bg-black bg-opacity-40 p-2 sm:p-10 lg:p-20 border rounded-lg'>
                <h2 className='text-5xl text-center text-white'>Join to Our Teacher's Community</h2>
                <div className='flex flex-col justify-center items-center my-8'>
                    <div className="w-36 rounded-xl ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                    <h1>{user?.displayName}</h1>
                </div>
                <form onSubmit={handleSubmit(handleTeachOn)}>
                    <div className="form-control w-full">
                        <label htmlFor="title" className="text-xl my-2">Title</label>
                        <input id='title' autoComplete="title" type="text" {...register("title", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className="form-control w-full my-6">
                        <label htmlFor="experience" className="text-xl my-2">Experience</label>
                        <select id='experience' defaultValue="" {...register('experience', { required: 'Experience field is required' })}
                            className="select select-bordered w-full">
                            <option value='' disabled hidden>Choose Experience</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Experienced">Experienced</option>
                            <option value="SomeIdea">Some Idea</option>
                        </select>
                        {errors.experience && <p className='text-red-500'>{errors.experience.message}</p>}
                    </div>
                    <div className="form-control w-full my-6">
                        <label htmlFor="category" className="text-xl my-2">Category</label>
                        <select id='category' defaultValue="" {...register('category', { required: 'Category must Required' })}
                            className="select select-bordered w-full">
                            <option value='' disabled hidden>Choose Category</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="SEO">Search Engine Optimization</option>
                            <option value="Programming">Programming</option>
                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>
                    <div className='flex justify-center'><Button name={'Submit'}> <input type="submit" /></Button></div>
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>

            </div>
        </div>
    );
};

export default TeachOn;