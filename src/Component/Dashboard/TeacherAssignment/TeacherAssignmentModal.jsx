import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';
import { useParams } from 'react-router-dom';
import useSingleClass from '../../../Hook/useSingleClass';
import Swal from 'sweetalert2';
import useAxiosSecret from '../../../Hook/useAxiosSecret';

const TeacherAssignmentModal = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const axiosSecure = useAxiosSecret();
    // console.log(id)
    const [singleCourse, loading, singleCourseRefetch] = useSingleClass(id)
    const { _id, teacherEmail } = singleCourse;

    const handelAssignmentSave = (data) => {
        const assignmentData = {
            courseId: _id,
            teacherEmail,
            title: data.title,
            description: data.description,
            deadline: data.deadline
        }
        // console.log(assignmentData)

        axiosSecure.post('/assignment', assignmentData)
            .then(res => {

                if (res.data.insertedId) {

                    reset()
                    document.getElementById('my_modal_8').close()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Assignment Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => console.log(error.message))

    }

    const handelAssignmentClose = () => {
        document.getElementById('my_modal_8').close()
    }

    return (
        <>
            <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-[95%] md:w-1/2 max-w-5xl bg-opacity-80">
                    <h1 className='text-3xl font-semibold text-center my-8'>Add Assignment</h1>

                    <form onSubmit={handleSubmit(handelAssignmentSave)}>
                        <div className="form-control w-full">
                            <label htmlFor="title22" className="text-xl my-2">Title</label>
                            <input id='title22' autoComplete="title" type="text" {...register("title", {
                                required: "Title is Required"
                            })} className="input input-bordered w-full" />
                            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label htmlFor="description" className="text-xl my-2">Description</label>
                            <textarea id='description' type="textarea" {...register("description", {
                                required: "description is Required"
                            })} className="input input-bordered h-36 w-full" />

                            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="deadline" className="text-xl my-2">Deadline</label>
                            <input id='deadline' type="date" {...register("deadline", {
                                required: "deadline is Required"
                            })} className="input input-bordered w-full" />
                            {errors.deadline && <p className='text-red-500'>{errors.deadline.message}</p>}
                        </div>


                        <div className='flex justify-center'><Button name={'Add Class'}> <input type="submit" /></Button></div>

                    </form>
                    <button onClick={handelAssignmentClose} className="btn bg-orange-500 text-white">Close!</button>
                </div>
            </dialog>
        </>
    );
};

export default TeacherAssignmentModal;