import React from 'react';
import useAllUser from '../../../Hook/useAllUser';
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import Swal from 'sweetalert2';

const AllUser = () => {
    const [users, , userRefetch] = useAllUser();
    const axiosSecure = useAxiosSecret();
    const handelMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.name} Is Admin!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            userRefetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is an Admin Now!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => console.log(error))
            }
        });



    }


    return (
        <div>
            <div className='  text-center uppercase text-3xl font-semibold px-4 my-12'>
                <h1>All User</h1>
                <h2 className='text-xl my-4'>Total User: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-scroll my-12">
                    <table className="table md:text-2xl">
                        {/* head */}
                        <thead>
                            <tr className='md:text-2xl text-white'>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-200'>
                            {users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>{index + 1} </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user?.name} </td>
                                <td>{user?.email}</td>
                                {
                                    user.role ? <td>{user?.role}</td> : <td>user</td>
                                }

                                <td>
                                    {user?.role === 'Admin' ? <p className='text-slate-500' disabled>Admin</p> : <button className='btn btn-primary' onClick={() => handelMakeAdmin(user)}>Admin</button>}
                                </td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllUser;