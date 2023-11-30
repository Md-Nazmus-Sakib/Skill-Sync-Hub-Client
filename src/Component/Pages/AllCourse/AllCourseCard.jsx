import React from 'react';
import { Link } from 'react-router-dom';

const AllCourseCard = ({ course }) => {

    const { _id, coursePhoto, title, details, price, teacherName, teacherPhoto, numberOfStudents } = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-[600px]">
                <figure><img className='h-[300px] w-full' src={coursePhoto} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details?.length > 100 ? <p>{details.slice(0, 100)} ...</p> : <p>{details}</p>
                    }

                    <div className="stats stats-vertical lg:stats-horizontal shadow">

                        <div className='flex items-center mx-auto flex-col'>

                            <img className='w-24 h-24 rounded-full' src={teacherPhoto} alt="" />
                            <h2 className='border border-secondary px-2 py-1 rounded-xl my-2'>Teacher: {teacherName} </h2>

                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Enroll</div>
                            <div className="stat-value">{numberOfStudents}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Price</div>
                            <div className="stat-value">$ {price}</div>
                        </div>

                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/courseDetail/${_id}`} className="btn btn-primary">Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourseCard;