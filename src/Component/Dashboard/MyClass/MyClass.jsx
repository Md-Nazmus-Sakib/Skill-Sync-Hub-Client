
import { useState } from 'react';
import useTeacherClass from '../../../Hook/useTeacherClass';
import Button from '../../Button/Button';
import MyClassModal from './MyClassModal';

import useAxiosSecret from '../../../Hook/useAxiosSecret';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyClass = () => {
    const [teacherClasses, , classRefetch] = useTeacherClass();
    const [updateClass, setUpdateClass] = useState({});
    const axiosSecure = useAxiosSecret();

    const handelModal = (teacherClass) => {
        document.getElementById('my_modal_5').showModal()
        setUpdateClass(teacherClass)
    }
    const handleUpdateCourse = (data) => {
        const classUpdateDetail = {
            title: data.title,
            coursePhoto: data.photo,
            price: parseInt(data.price),
            details: data.details,
        }

        axiosSecure.put(`/class/${updateClass._id}`, classUpdateDetail)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    classRefetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Modify Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    document.getElementById('my_modal_5').close()
                    setUpdateClass({})
                }
            })
    }

    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/class/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            classRefetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Course has been deleted.',
                                'success'
                            )
                        }

                    })
                    .catch(error => console.log(error))
            }
        })
    }



    const handelClose = () => {
        document.getElementById('my_modal_5').close()
        setUpdateClass({})
    }

    return (
        <div className='my-12'>
            <h1 className='text-5xl font-extrabold text-center my-8'>My Class</h1>

            {
                teacherClasses?.map(teacherClass => <div key={teacherClass._id} className="card mx-auto w-full sm:w-2/3 bg-base-100 shadow-xl my-6 bg-opacity-40">
                    <figure><img src={teacherClass?.coursePhoto} alt="course" /></figure>

                    <div className="p-4 sm:card-body">
                        <h2 className="card-title text-3xl sm:text-5xl font-extrabold">
                            {teacherClass?.title}

                        </h2>
                        <div className='flex justify-between items-center'>

                            <p>Status: {teacherClass?.status === 'pending' ? <span className='text-xl text-orange-300 font-semibold'>{teacherClass?.status}</span> : <span>{teacherClass?.status}</span>}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handelModal(teacherClass)} className="badge badge-outline bg-indigo-500 ">Update</button>
                                <button onClick={() => handelDelete(teacherClass?._id)} className="badge badge-outline bg-orange-500 ">Delete</button>
                            </div>
                        </div>
                        <p>Details: <span className='text-slate-200'>{teacherClass?.details}</span></p>

                        <div className='sm:flex justify-between'>
                            <div className='flex items-center flex-col sm:w-24'>

                                <img className='w-24 h-24 rounded-full' src={teacherClass?.teacherPhoto} alt="" />
                                <h2>{teacherClass?.teacherName} </h2>

                            </div>
                            {
                                teacherClass?.status === 'approved' ? <div className='flex justify-center'><Link to={`/dashboard/myClass/${teacherClass?._id}`}> <Button name={'See Details'}></Button></Link>  </div>
                                    :
                                    <div className='flex justify-center'><button className='btn'>SEE DETAILS </button>
                                    </div>
                            }


                        </div>

                    </div>
                </div>)
            }
            <MyClassModal updateClass={updateClass} handleUpdateCourse={handleUpdateCourse} handelClose={handelClose}></MyClassModal>
        </div>
    );
};

export default MyClass;



