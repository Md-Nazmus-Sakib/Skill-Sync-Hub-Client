import React from 'react';

import TeacherAssignmentModal from './TeacherAssignmentModal';
import { useParams } from 'react-router-dom';
import useSingleClass from '../../../Hook/useSingleClass';
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import { useQuery } from '@tanstack/react-query';
import useUserRole from '../../../Hook/useUserRole';


const TeacherAssignment = () => {
    const [userRole, isLoading] = useUserRole();
    const userStatus = userRole.role;
    const { id } = useParams();
    const axiosSecure = useAxiosSecret();
    const { data: progress = [], isLoading: progressLoading, refetch: progressRefetch } = useQuery({
        queryKey: ['progress'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/teacher-progress/${id}`);
            return res.data;
        }
    })
    if (isLoading || progressLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }


    return (
        <section >
            <div className='flex justify-center flex-col my-12 gap-6'>
                <div className="stats stats-vertical sm:stats-horizontal shadow text-center">

                    <div className="stat">
                        <div className="stat-title">Total Enrollment</div>
                        <div className="stat-value">{progress.totalEnroll}</div>

                    </div>

                    <div className="stat">
                        <div className="stat-title">Total Assignment</div>
                        <div className="stat-value">{progress.totalAssignment}</div>

                    </div>

                    <div className="stat">
                        <div className="stat-title">Assignment Submit</div>
                        <div className="stat-value">{progress.assignmentSubmit}</div>

                    </div>

                </div>
                {
                    userStatus === 'Teacher' && <button onClick={() => document.getElementById('my_modal_8').showModal()} className="btn w-72 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Add Assignment
                    </button>
                }

            </div>
            <TeacherAssignmentModal

                progressRefetch={progressRefetch}
            ></TeacherAssignmentModal>
        </section>
    );
};

export default TeacherAssignment;