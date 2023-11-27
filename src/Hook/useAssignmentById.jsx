import React from 'react';
import useAxiosSecret from './useAxiosSecret';
import { useQuery } from '@tanstack/react-query';

const useAssignmentById = (id) => {
    // console.log(id)
    const axiosSecure = useAxiosSecret();
    const { data: assignments = [], isPending: loading, refetch: assignmentRefetch } = useQuery({
        queryKey: ['assignments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assignment/${id}`);
            return res.data;
        }
    })

    return [assignments, loading, assignmentRefetch]
};

export default useAssignmentById;