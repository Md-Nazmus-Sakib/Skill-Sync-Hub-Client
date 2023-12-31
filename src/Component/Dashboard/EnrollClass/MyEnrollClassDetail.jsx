import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import useAssignmentById from '../../../Hook/useAssignmentById';

import { Rating } from '@smastrom/react-rating'
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import Swal from 'sweetalert2';



const MyEnrollClassDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const axiosSecure = useAxiosSecret();
    const [assignments, loading, assignmentRefetch] = useAssignmentById(id)

    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const handelFeedback = (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const feedback = { description, rating, userName: user?.displayName, userEmail: user?.email, userImg: user?.photoURL }
        axiosSecure.post('/feedback', feedback)
            .then(res => {

                if (res.data.insertedId) {


                    setIsOpen(false)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => console.log(error.message))
    }
    const handelAssignmentComplete = (assignment) => {
        const { _id, ...newAssignment } = assignment;
        const submitAssignmentData = {
            userEmail: user?.email,
            assignmentId: _id,
            ...newAssignment,
        }
        axiosSecure.post('/submitAssignment', submitAssignmentData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Assignment Submit Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className='my-12'>
            <h1 className='text-5xl text-center'>Welcome <span className='text-orange-600 font-extrabold my-8'>{user?.displayName} </span>Continue Your Class </h1>
            <div>
                <div className="dropdown">
                    <div onClick={() => setIsOpen(!isOpen)} tabIndex={0} role="button" className="btn m-1">Feedback</div>
                    {
                        isOpen && <div tabIndex={0} className="relative dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <form onSubmit={handelFeedback} className="m-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea name='description' className="textarea textarea-bordered text-white h-24" placeholder="Description"></textarea>

                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>

                                    <Rating
                                        value={rating}
                                        onChange={setRating}
                                    />
                                </div>
                                <input className='btn btn-secondary' type="submit" value="Submit" />
                            </form>
                        </div>
                    }
                </div>
            </div>
            <div>
                {
                    assignments?.length > 0 ? <div className="overflow-x-auto my-12">
                        <table className="table md:text-2xl">
                            {/* head */}
                            <thead>
                                <tr className='md:text-2xl text-white'>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Deadline</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-slate-200'>
                                {assignments?.map((assignment, index) => <tr
                                    key={assignment._id}
                                >
                                    <td>{index + 1} </td>
                                    <td>{assignment?.title}</td>
                                    <td>{assignment?.description} </td>
                                    <td>{assignment?.deadline}</td>


                                    <td>
                                        <button onClick={() => handelAssignmentComplete(assignment)} className='btn btn-primary'>Submit</button>
                                    </td>
                                </tr>)}

                            </tbody>

                        </table>
                    </div> : <h1 className='text-3xl font-extrabold text-center my-24'>No Assignment Added Yet !!</h1>
                }
            </div>
        </div>
    );
};

export default MyEnrollClassDetail;