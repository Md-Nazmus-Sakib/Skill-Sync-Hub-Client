import { useQuery } from '@tanstack/react-query';
import useAxiosSecret from '../../../Hook/useAxiosSecret';
import useAllClass from '../../../Hook/useAllClass';

const AllClass = () => {
    const [courses, loading, coursesRefetch] = useAllClass();

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
                                <td>{course?.details}</td>
                                {
                                    course?.status === 'pending' ? <td><button>Approved</button></td> :
                                        <td><button>Approved</button></td>
                                }
                                {
                                    course?.status === 'pending' ? <td><button>Reject</button></td> :
                                        <td><button>Approved</button></td>
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