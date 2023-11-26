import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleClass from '../../../Hook/useSingleClass';
import Button from '../../Button/Button';

const CourseDetails = () => {
    const { id } = useParams();
    const [singleCourse, loading, singleCourseRefetch] = useSingleClass(id)
    const { _id, coursePhoto, title, details, price, teacherName, teacherPhoto, teacherEmail } = singleCourse;
    // console.log(singleCourse)
    return (
        <div className='my-12 px-4 md:flex'>
            <div className='flex-1'>
                <div className='rounded-xl overflow-hidden'>
                    <img src={coursePhoto} alt="" />
                </div>
                <h1 className='text-5xl font-extrabold my-4 text-center'>{title}</h1>
                <p>{details}</p>
            </div>
            <div className="divider hidden md:block divider-horizontal border-4 border-dashed"></div>
            <div className='w-full flex-1 my-6 md:my-0'>
                <div className="grid h-full card bg-base-300 rounded-box place-items-center pb-4">
                    <h1 className='text-5xl w-full font-extrabold my-4 text-center border-b-2 border-dashed pb-4'>{title}</h1>
                    <p className='text-xl w-full font-extrabold my-4 text-center border-b-2 border-dashed pb-4'>Teacher Name: <span className='text-lg text-orange-300'> {teacherName}</span></p>
                    <p className='text-xl w-full font-extrabold my-4 text-center border-b-2 border-dashed pb-4'>Teacher Email: <span className='text-lg text-orange-300'> {teacherEmail}</span></p>
                    <p className='text-xl w-full font-extrabold my-4 text-center border-b-2 border-dashed pb-4'>Total Cost: <span className='text-lg text-orange-300'>$ {price}</span></p>
                    <Link to={`/courseDetail/pay/${_id}`}><Button name={'Pay'}></Button></Link>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;
