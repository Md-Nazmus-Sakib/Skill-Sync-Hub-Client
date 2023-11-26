import React from 'react';
import { Link } from 'react-router-dom';

const AllCourseCard = ({ course }) => {
    const { _id, coursePhoto, title, details, price, teacherName, teacherPhoto } = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-[600px]">
                <figure><img className='h-[300px] w-full' src={coursePhoto} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details?.length > 100 ? <p>{details.slice(0, 100)} ...</p> : <p>{details}</p>
                    }

                    <div className="stats stats-vertical lg:stats-horizontal shadow">

                        <div className='flex items-center mx-auto flex-col'>

                            <img className='w-24 h-24 rounded-full' src={teacherPhoto} alt="" />
                            <h2 className='border border-secondary px-2 py-1 rounded-xl my-2'>Teacher: {teacherName} </h2>

                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Enroll</div>
                            <div className="stat-value">4,200</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Price</div>
                            <div className="stat-value">$ {price}</div>
                        </div>

                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/courseDetail/${_id}`} className="btn btn-primary">Enroll Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourseCard;


// coursePhoto
// :
// "https://www.pnjsharptech.com/blog/wp-content/uploads/2020/07/Web-Designing-vs-Web-Development.jpg"
// details
// :
// "Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development."
// price
// :
// 1999
// status
// :
// "approved"
// teacherEmail
// :
// "asd@asd.com"
// teacherName
// :
// "asd"
// teacherPhoto
// :
// "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/303100/303157.jpg"
// title
// :
// "Web design"
// _id
// :
// "6561f00912e034fc1c2a8055"