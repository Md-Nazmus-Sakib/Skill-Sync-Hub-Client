import React from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import totalImg from '../../../../assets/Images/all/total.png'

const TotalCount = () => {
    const axiosPublic = useAxiosPublic();
    const { data: totalCount = {} } = useQuery({
        queryKey: ['totalCount'],
        queryFn: async () => {
            const res = await axiosPublic.get('/total-count');
            return res.data;
        }
    })
    // console.log(totalCount.totalUsers)
    return (
        <div className='mockup-window border bg-base-300 my-12'>

            <div className='md:flex rounded-xl overflow-hidden'>
                <div className='flex-1' >  <img className='w-full h-full object-cover' src={totalImg} alt="" /></div>

                <div className='flex-1 '>
                    <div className="stats stats-vertical shadow w-full text-center">

                        <div className="stat">
                            <div className="stat-title">Total User</div>
                            <div className="stat-value">{totalCount.totalUsers}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Class</div>
                            <div className="stat-value">{totalCount.totalClass}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Student</div>
                            <div className="stat-value">{totalCount.totalStudent}</div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TotalCount;