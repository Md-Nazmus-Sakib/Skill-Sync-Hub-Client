
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import useAllClass from '../../../Hook/useAllClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AllClass = () => {
    const [courses, loading, coursesRefetch] = useAllClass();
    const axiosSecure = useAxiosSecret();

    const handelCourseApproved = (course) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${course?.title} Is Approved!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Approved!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/class/${course._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            coursesRefetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${course?.title} is Approved Successfully!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }

    const handelCourseRejected = (course) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${course?.title} Is Rejected!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Rejected!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/class/reject/${course._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            coursesRefetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${course?.title} is Rejected Successfully!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })
                    .catch(error => console.log(error))
            }

        })

    }
    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }

    return (
        <div>
            <div className='  text-center uppercase text-3xl font-semibold px-4 my-12'>
                <h1>All Class</h1>
                <h2 className='text-xl my-4'>Total Classes: {courses.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto my-12">
                    <table className="table md:text-2xl">
                        {/* head */}
                        <thead>
                            <tr className='md:text-2xl text-white'>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Teacher Email</th>
                                <th>Description</th>
                                <th>Action</th>
                                <th>Action</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody className='text-slate-200'>
                            {courses.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>{index + 1} </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course?.coursePhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{course?.title} </td>
                                <td>{course?.teacherEmail}</td>
                                {
                                    course?.details.length > 20 ? <td>{course?.details.slice(0, 20)}...</td> :
                                        <td>{course?.details}</td>
                                }
                                {
                                    course?.status === 'pending' ? <td><button onClick={() => handelCourseApproved(course)} className='btn btn-primary text-white'>Approved</button></td> :
                                        <td><button disabled className='btn btn-primary text-white'>Approved</button></td>
                                }
                                {
                                    course?.status === 'pending' ? <td><button onClick={() => handelCourseRejected(course)} className='btn btn-warning text-white'>Reject</button></td> :
                                        <td><button disabled className='btn btn-warning text-white'>Reject</button></td>
                                }
                                {
                                    course?.status === 'approved' ? <td>
                                        <Link to={`/dashboard/myClass/${course?._id}`}> <button className='btn btn-secondary text-white'>SeeProgress</button>  </Link>
                                    </td> :
                                        <td><button disabled className='btn btn-secondary text-white'>SeeProgress</button>

                                        </td>
                                }


                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default AllClass;

// _id
// 6561f00912e034fc1c2a8055
// teacherName
// "asd"
// teacherEmail
// "asd@asd.com"
// teacherPhoto
// "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/3031…"
// title
// "Web design"
// coursePhoto
// "https://www.pnjsharptech.com/blog/wp-content/uploads/2020/07/Web-Desig…"
// price
// "1998"
// details
// "Web design refers to the design of websites. It usually refers to the …"
// status
// "pending"