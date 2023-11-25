import React from 'react';
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useAllTeacher = () => {
    const axiosSecure = useAxiosSecret();
    const { data: teachers = [], isPending: loading, refetch: teacherRefetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/teacher');
            return res.data;
        }
    })

    return [teachers, loading, teacherRefetch]
};


export default useAllTeacher;