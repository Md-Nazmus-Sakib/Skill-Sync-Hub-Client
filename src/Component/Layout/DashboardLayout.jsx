import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import useUserRole from '../../Hook/useUserRole';


const DashboardLayout = () => {
    const [userRole, isLoading] = useUserRole();

    if (isLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    const userStatus = userRole.role;
    // console.log(userStatus)
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className="drawer lg:drawer-open w-60">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            userStatus === 'Admin' && <>

                                <li ><NavLink to={'/dashboard/request'}>Teacher Request</NavLink></li>
                                <li ><NavLink to={'/dashboard/users'}>All User</NavLink></li>
                                <li ><NavLink to={'/dashboard/classes'}>All Class</NavLink></li>
                                <li ><NavLink to={'/dashboard/profile'}>Profile</NavLink></li></>
                        }
                        {
                            userStatus === 'Teacher' && <>
                                <li><NavLink to={'/dashboard/addClass'}>Add Class</NavLink></li>
                                <li><NavLink to={'/dashboard/myClass'}>My Class</NavLink></li>
                                <li><NavLink to={'/dashboard/profile'}>Profile</NavLink></li>
                            </>
                        }
                        {
                            userStatus === 'Student' && <>
                                <li><NavLink to={'/dashboard/enrollClass'}>My Enroll Class</NavLink></li>
                                <li><NavLink to={'/dashboard/myOrder'}>My Order</NavLink></li>
                                <li><NavLink to={'/dashboard/profile'}>Profile</NavLink></li>

                            </>
                        }


                        <div className="divider"></div>
                        <li>
                            <NavLink to="/"> <FaHome></FaHome>Home</NavLink>
                        </li>
                    </ul>

                </div>

            </div>
            <div className='flex-1 px-4 overflow-x-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;