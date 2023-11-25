import React from 'react';
import useAllTeacher from '../../../Hook/useAllTeacher';
import Swal from 'sweetalert2';
import useAllUser from '../../../Hook/useAllUser';
import useAxiosSecret from '../../../Hook/useAxiosSecret';

const TeacherRequest = () => {
    const [teachers, , teacherRefetch] = useAllTeacher();
    const [users, , userRefetch] = useAllUser();
    const axiosSecure = useAxiosSecret();
    // console.log(teachers)
    const handelRequestApproved = (teacher) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${teacher?.teacherName} Is Teacher!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Teacher!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/teacher/${teacher._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            teacherRefetch();
                            axiosSecure.patch(`/users/role/${teacher?.teacherEmail}`)
                                .then(res => {
                                    // console.log(res.data)
                                    if (res.data.modifiedCount > 0) {
                                        userRefetch();
                                    }
                                })
                                .catch(error => console.log(error))

                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${teacher?.teacherName} is Teacher Now!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    const handelRequestRejected = (teacher) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${teacher?.teacherName} Is Rejected as Teacher!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Rejected!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/teacher/reject/${teacher._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            teacherRefetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${teacher?.teacherName} is Rejected as a Teacher Now!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })
                    .catch(error => console.log(error))
            }

        })

    }


    return (
        <div>
            <div className='  text-center uppercase text-3xl font-semibold px-4 my-12'>
                <h1>All Teacher</h1>
                <h2 className='text-xl my-4'>Total Teacher: {teachers.length}</h2>
            </div>

            <div className="overflow-x-auto my-12">
                <table className="table md:text-2xl">
                    {/* head */}
                    <thead>
                        <tr className='md:text-2xl text-white'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Experience</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-200'>
                        {teachers.map((teacher, index) => <tr
                            key={teacher._id}
                        >
                            <td>{index + 1} </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={teacher?.teacherImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{teacher?.teacherName} </td>
                            <td>{teacher?.title}</td>
                            <td>{teacher?.experience}</td>
                            <td>{teacher?.category}</td>

                            {
                                teacher.status ? <td>{teacher?.status}</td> : <td>user</td>
                            }
                            {
                                teacher.status === 'pending' ? <td><button onClick={() => handelRequestApproved(teacher)} className='btn btn-primary'>Approved</button></td> : <td><button disabled className='btn btn-primary'>Approved</button></td>

                            }
                            {
                                teacher.status === 'pending' ?
                                    <td><button onClick={() => handelRequestRejected(teacher)} className='btn btn-warning'>Reject</button></td> : <td><button className='btn btn-warning text-white' disabled>Reject</button></td>

                            }
                        </tr>)}

                    </tbody>

                </table>

            </div>


        </div>
    );
};

export default TeacherRequest;