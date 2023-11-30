import React from 'react';
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hook/useAuth';


const MyOrder = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecret();

    const { data: orders } = useQuery({
        queryKey: ['myOrder'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myOrder/${user?.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <div className='  text-center uppercase text-3xl font-semibold px-4 my-12'>
                <h1 className='text-5xl font-extrabold my-6'>{user?.displayName} Order</h1>
                <h2 className='text-xl my-4'>Total Order: {orders?.length}</h2>
            </div>
            <div>
                <div className="overflow-x-scroll my-12">
                    <table className="table md:text-2xl">
                        {/* head */}
                        <thead>
                            <tr className='md:text-2xl text-white'>
                                <th>#</th>
                                <th>Teacher Email</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Transaction id</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-200'>
                            {orders?.map((order, index) => <tr
                                key={order._id}
                            >
                                <td>{index + 1} </td>
                                <td>{order?.teacherEmail} </td>
                                <td>{order?.title} </td>
                                <td>{order?.price}</td>
                                <td>{order?.transactionId}</td>


                            </tr>)}

                        </tbody>

                    </table>

                </div>
            </div>


        </div>
    );
};

export default MyOrder;

