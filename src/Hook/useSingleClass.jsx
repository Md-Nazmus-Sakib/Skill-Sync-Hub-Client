import React from 'react';
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useSingleClass = (id) => {
    const axiosSecure = useAxiosSecret();
    const { data: singleCourse = [], isPending: loading, refetch: singleCourseRefetch } = useQuery({
        queryKey: ['singleCourse'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/${id}`);
            return res.data;
        }
    })

    return [singleCourse, loading, singleCourseRefetch]
};

export default useSingleClass;