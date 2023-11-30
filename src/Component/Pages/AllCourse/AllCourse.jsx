import React, { useEffect } from 'react';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import AllCourseCard from './AllCourseCard';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import useAllCourse from '../../../Hook/useAllCourse';



const AllCourse = () => {
    const [allCourse, loading, allCourseRefetch] = useAllCourse();
    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    return (
        <div>
            {
                allCourse.length === 0 ? <h1 className='text-5xl text-center my-24'>Oops !!!!! No Data Found</h1> :

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
                        {
                            allCourse?.map(course =>
                                <AllCourseCard

                                    key={course._id}
                                    course={course}
                                ></AllCourseCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllCourse;