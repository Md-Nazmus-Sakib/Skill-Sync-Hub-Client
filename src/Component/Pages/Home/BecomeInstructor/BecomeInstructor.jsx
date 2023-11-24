import React from 'react';
import Button from '../../../Button/Button';
import instructorImg from '../../../../assets/Images/all/becomeInstructor.png'
import { Link } from 'react-router-dom';

const BecomeInstructor = () => {
    return (
        <div className='flex justify-between flex-col md:flex-row my-12'>
            <img className='flex-1 w-full md:w-1/2 lg:full' src={instructorImg} alt="" />
            <div className='flex-1 w-full lg:w-1/2 mx-auto mt-12 p-4 md:pr-12 text-justify'>
                <h1 className='text-3xl font-extrabold my-4 text-center'>Do you want to be an instructor?</h1>
                <p className='text-slate-200'>Join the team of expert instructors at our Academy if you are interested in building skilled manpower in the world. Embrace the opportunity to share your expertise, inspire learners, and shape the future generation through comprehensive teaching methodologies and innovative approaches.</p>
                <div className='flex justify-center'>

                    <Link to={'/teachOn'}>  <Button name={'Start Teaching'}>  </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;