import React from 'react';
import useAxiosPublic from '../../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import AllCourseCard from './AllCourseCard';

const AllCourse = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allCourse = [] } = useQuery({
        queryKey: ['allCourse'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allCourse');
            return res.data;
        }
    })
    // console.log(allCourse)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-12'>
            {
                allCourse.map(course => <AllCourseCard
                    key={course._id}
                    course={course}
                ></AllCourseCard>)
            }
        </div>
    );
};

export default AllCourse;