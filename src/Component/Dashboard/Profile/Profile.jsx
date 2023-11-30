import React from 'react';
import useSingleUser from '../../../Hook/useSingleUser';
import { Tilt } from 'react-tilt';

const Profile = () => {
    const [eachUser, loading, userRefetch] = useSingleUser();
    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    // console.log(eachUser)
    return (
        <div className='my-12 flex justify-center p-4'>
            <Tilt>
                <div className="card w-72 sm:w-96 bg-base-100 shadow-xl py-10 bg-opacity-40">
                    <figure><img src={eachUser?.photo} alt="user Photo" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl">Name: <span className='text-3xl font-semibold'>{eachUser.name}</span></h2>
                        <p className="text-xl">Email: <span className='font-semibold'>{eachUser?.email}</span></p>
                        <p className="text-xl"> Role: <span className='font-semibold'>{eachUser?.role}</span></p>
                        <p className="text-xl">Phone: <span className='font-semibold'>{eachUser?.phone}</span></p>

                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default Profile;