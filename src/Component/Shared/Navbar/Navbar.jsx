import React from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../../../assets/Images/logo/logo.png'
import useAuth from '../../../Hook/useAuth';
import useUserRole from '../../../Hook/useUserRole';
import { FaSearch } from 'react-icons/fa';

import { useRef } from 'react';




const Navbar = () => {
    const { user, loading, setLoading, createUser, signIn, logOut, setSearchValue } = useAuth();
    const [userRole, isLoading] = useUserRole();
    const searchInputRef = useRef(null);
    const navigate = useNavigate();
    const handelSearch = (e) => {
        e.preventDefault();
        const searchTerm = (searchInputRef.current.value).toLowerCase();
        setSearchValue(searchTerm)
        navigate('/allCourse')
        searchInputRef.current.value = '';
    }
    if (isLoading || loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    const role = userRole.role;
    // const userStatus = userRole.role;
    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const pages = <>
        <li><NavLink to={'/'}>Home</NavLink></li>

        <li><NavLink to={'/allCourse'} onClick={() => setSearchValue('')} >All Course</NavLink></li>
        <li><NavLink to={'/teachOn'}>Teach On</NavLink></li>


    </>

    return (
        <div className="navbar text-xl font-bold sticky top-0 z-50 bg-opacity-70 bg-gradient-to-r from-violet-500 to-fuchsia-500  max-w-screen-xl px-2 sm:px-12 justify-between ">
            <div className="navbar-start grow">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {
                            pages
                        }
                        <div className="form-control relative w-48 h-10">
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search"
                                className="input input-bordered h-10 w-full pl-10 text-white"
                            />
                            <button onClick={handelSearch} className='bg-transparent absolute left-0'>
                                <FaSearch />
                            </button>
                        </div>
                    </ul>

                </div>

                <div className="normal-case text-xl p-2 flex items-center text-white">
                    <img className='w-12 h-12 sm:w-20 sm:h-20' src={logo} alt="" />
                    <h1 className='uppercase mx-2'>Skill Sync Hub</h1>

                </div>


            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <div className="form-control relative w-56 flex m-0 p-0 ">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search"
                        className="input input-bordered h-9 w-full m-0 pl-10 text-white"
                    />
                    <button onClick={handelSearch} className='bg-transparent m-0 absolute top-0 left-0 group'>
                        <FaSearch />
                    </button>
                </div>
                <ul className="menu menu-horizontal px-1 uppercase text-white">
                    {
                        pages
                    }

                </ul>
            </div>

            {
                user ? <div className="dropdown dropdown-end mx-4">
                    <label tabIndex={0}>
                        <div className="avatar">
                            <div className="w-8 sm:w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>

                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gradient-to-r from-black to-fuchsia-500 text-white rounded-box w-52">

                        <li className='p-2'>{user?.displayName}</li>
                        {
                            role === 'Admin' && <li >
                                <Link className='m-0 p-2' to={'/dashboard/request'}>Dashboard</Link>
                            </li>
                        }
                        {
                            role === 'Teacher' && <li >
                                <Link className='m-0 p-2' to={'/dashboard/addClass'}>Dashboard</Link>
                            </li>
                        }
                        {
                            role === 'Student' && <li >
                                <Link className='m-0 p-2' to={'/dashboard/enrollClass'}>Dashboard</Link>
                            </li>
                        }

                        <li><button className='btn btn-ghost m-0 p-2' onClick={handelLogout} >LogOut</button></li>
                    </ul>
                </div> :
                    <div className='text-white'> <NavLink to={'/login'}>Login</NavLink></div>

            }




        </div>
    );
};

export default Navbar;