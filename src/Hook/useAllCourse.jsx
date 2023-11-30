import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAllCourse = () => {
    const { searchValue, setSearchValue } = useAuth();
    // console.log(searchValue)
    const axiosPublic = useAxiosPublic();

    const { data: allCourse = [], isLoading: loading, refetch: allCourseRefetch } = useQuery({
        queryKey: ['allCourse', searchValue], // Include 'query' in the query key
        queryFn: async () => {
            try {
                if (searchValue) {
                    const res = await axiosPublic.get(`/allCourse?search=${searchValue}`);
                    return res.data;
                } else {
                    const res = await axiosPublic.get('/allCourse');
                    return res.data;
                }
            } catch (error) {
                throw new Error('Error fetching data:', error);
            }
        }
    })

    return [allCourse, loading, allCourseRefetch]

};

export default useAllCourse;