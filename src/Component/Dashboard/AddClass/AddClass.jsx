import React from 'react';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
import img from '../../../assets/Images/Login/login.jpeg'
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecret();

    const handleAddClass = (data) => {
        const classDetail = {
            teacherName: user?.displayName,
            teacherEmail: user?.email,
            teacherPhoto: user?.photoURL,
            title: data.title,
            coursePhoto: data.photo,
            price: parseInt(data.price),
            details: data.details,
            status: 'pending'
        }
        axiosSecure.post('/class', classDetail)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {

                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => console.log(error.message))

    }
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${img})`, backgroundSize: "cover" }} className='min-h-[800px] flex justify-center items-center px-4 py-20'>
            <div className='w-full sm:w-2/3 mx-auto bg-black bg-opacity-40 p-2 sm:p-10 lg:p-20 border rounded-lg'>
                <h2 className='text-5xl text-center text-white'>Add Class</h2>

                <form onSubmit={handleSubmit(handleAddClass)}>
                    <div className="form-control w-full">
                        <label htmlFor="name11" className="text-xl my-2">Teacher Name</label>
                        <input id='name11' autoComplete="name" disabled placeholder={user?.displayName} type="text" {...register("name", {
                        })} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label htmlFor="email11" className="text-xl my-2">Teacher Email</label>
                        <input id='email11' autoComplete="email" disabled placeholder={user?.email} type="text" {...register("email", {
                        })} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label htmlFor="title22" className="text-xl my-2">Title</label>
                        <input id='title22' autoComplete="title" type="text" {...register("title", {
                            required: "Title is Required"
                        })} className="input input-bordered w-full" />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="photo2" className="text-xl my-2">Courses Photo Url</label>
                        <input id='photo2' type="text" {...register("photo", {
                            required: "Photo url is Required"
                        })} className="input input-bordered w-full" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="price" className="text-xl my-2">Price</label>
                        <input id='price' type="number" {...register("price", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="details" className="text-xl my-2">Details</label>
                        <textarea id='details' type="textarea" {...register("details", {
                            required: "Details is Required"
                        })} className="input input-bordered h-36 w-full" />

                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>


                    <div className='flex justify-center'><Button name={'Add Class'}> <input type="submit" /></Button></div>

                </form>

            </div>
        </div>
    );
};

export default AddClass;