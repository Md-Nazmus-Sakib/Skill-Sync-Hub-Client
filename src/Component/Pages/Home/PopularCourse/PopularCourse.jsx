import React from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';

import { EffectCreative, Pagination, Autoplay, Navigation } from 'swiper/modules';

const PopularCourse = () => {
    const axiosPublic = useAxiosPublic()
    const { data: popularCourses = [] } = useQuery({
        queryKey: ['popularCourses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/popular-courses');
            return res.data;
        }
    })

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[EffectCreative, Pagination, Autoplay, Navigation]}
                loop={true}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-125%', 0, -800],
                        rotate: [0, 0, -90],
                    },
                    next: {
                        shadow: true,
                        translate: ['125%', 0, -800],
                        rotate: [0, 0, 90],
                    },
                }}

                className="mySwiper"
            >
                {
                    popularCourses?.map(course => <SwiperSlide key={course?._id} >  <div className="card card-compact bg-base-100 shadow-xl w-full md:w-3/5 mx-auto min-h-[600px]">
                        <figure><img className='h-[300px] w-full' src={course?.coursePhoto} alt="course" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course?.title}</h2>
                            {
                                course?.details?.length > 100 ? <p>{course?.details.slice(0, 100)} ...</p> : <p>{course?.details}</p>
                            }

                            <div className="stats stats-vertical lg:stats-horizontal shadow">

                                <div className='flex items-center mx-auto flex-col'>

                                    <img className='w-24 h-24 rounded-full' src={course?.teacherPhoto} alt="" />
                                    <h2 className='border border-secondary px-2 py-1 rounded-xl my-2'>Teacher: {course?.teacherName} </h2>

                                </div>

                                <div className="stat">
                                    <div className="stat-title">Total Enroll</div>
                                    <div className="stat-value">{course?.numberOfStudents}</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">Price</div>
                                    <div className="stat-value">$ {course?.price}</div>
                                </div>

                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/courseDetail/${course?._id}`} className="btn btn-primary">Enroll Now</Link>
                            </div>
                        </div>
                    </div>  </SwiperSlide>)
                }


            </Swiper>
        </>


        // <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>

        // </div>
    );
};

export default PopularCourse;