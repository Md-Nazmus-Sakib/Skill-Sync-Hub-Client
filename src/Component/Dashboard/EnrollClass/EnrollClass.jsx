import React from 'react';
import useEnrollClass from '../../../Hook/useEnrollClass';
import { FaArrowRight } from 'react-icons/fa';
import useAuth from '../../../Hook/useAuth';
import { Link } from 'react-router-dom';

const EnrollClass = () => {
    const { user } = useAuth();
    const [enrollCourse] = useEnrollClass();
    // console.log(enrollCourse)
    return (
        <div className='my-12 '>
            <h1 className='text-5xl text-center'>Welcome <span className='text-orange-600 font-extrabold'>{user?.displayName}</span> </h1>

            {
                enrollCourse.map((course, index) => <div key={index} className=" relative card w-full md:w-2/3 mx-auto bg-neutral text-neutral-content my-4">
                    <div className="card-body flex sm:flex-row justify-around">
                        <div className='w-36 h-36 rounded-lg overflow-hidden mx-auto'>
                            <img className='w-36 h-36' src={course.coursePhoto} alt="" />
                        </div>
                        <div className='mx-auto'>
                            <h2 className="card-title">{course.title}</h2>
                            <h2 className="text-sm text-slate-300 my-4">Teacher Info</h2>
                            <div className='flex justify-center items-center gap-6'>

                                <img className='w-12 h-12 rounded-full' src={course.teacherPhoto} />
                                <p className="text-sm text-slate-300">{course.teacherName}</p>
                            </div>

                            <div className="absolute bottom-2 right-2 ">
                                <Link to={`/dashboard/my-class/${course._id}`}> <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button></Link>
                            </div>


                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default EnrollClass;