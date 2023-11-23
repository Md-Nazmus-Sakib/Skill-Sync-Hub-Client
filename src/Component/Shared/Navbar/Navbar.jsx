import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Images/logo/logo.png'

const Navbar = () => {
    const user = 'sakib';
    const pages = <>
        <li><NavLink to={'/'}>Home</NavLink></li>

        <li><NavLink to={'/allClass'}>All Class</NavLink></li>
        <li><NavLink to={'/teachOn'}>Teach On</NavLink></li>


    </>

    return (
        <div className="navbar text-xl font-bold sticky z-20 bg-opacity-70 bg-gradient-to-r from-violet-500 to-fuchsia-500  max-w-screen-xl px-2 sm:px-12 justify-between ">
            <div className="navbar-start grow">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {
                            pages
                        }
                    </ul>
                </div>

                <div className="normal-case text-xl p-2 flex items-center text-white">
                    <img className='w-12 h-12 sm:w-20 sm:h-20' src={logo} alt="" />
                    <h1 className='uppercase mx-2'>Skill Sync Hub</h1>

                </div>

            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 uppercase text-white">
                    {
                        pages
                    }
                </ul>
            </div>

            {
                user ? <div className="dropdown dropdown-end border">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                        <li>{user?.displayName}</li>
                        <li>
                            <a className="justify-between">
                                Dashboard
                            </a>
                        </li>
                        <li><Link >LogOut</Link></li>
                    </ul>
                </div> :
                    <div className='text-white'> <NavLink to={'/login'}>Login</NavLink></div>

            }


        </div>
    );
};

export default Navbar;