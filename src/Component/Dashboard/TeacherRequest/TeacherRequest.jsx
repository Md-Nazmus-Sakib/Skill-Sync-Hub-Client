import React from 'react';
import useAllTeacher from '../../../Hook/useAllTeacher';

const TeacherRequest = () => {
    const [teachers] = useAllTeacher();
    console.log(teachers)
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
                            <td><button>Approved</button></td>

                            <td><button>Reject</button></td>
                        </tr>)}

                    </tbody>

                </table>

            </div>


        </div>
    );
};

export default TeacherRequest;