import React from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
const FeedbackSection = () => {
    const axiosPublic = useAxiosPublic();
    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feedback');
            return res.data;
        }
    })

    return (
        <section className='my-12'>
            <h1 className='text-3xl font-semibold text-center'>What Our Student Said About Us.</h1>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },

                    }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,

                    }}

                    // slidesPerView={1}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}

                    className="mySwiper">

                    {
                        feedbacks.map(feedback => <SwiperSlide
                            key={feedback._id}
                        >
                            <div className='min-h-[400px] my-12 w-full pt-6 bg-black text-center bg-opacity-40 '>

                                <img className='w-24 h-24 rounded-full mx-auto' src={feedback?.userImg} alt="" />

                                <h1>{feedback?.userName}</h1>

                                <div className='w-1/2 mx-auto my-6'>
                                    <Rating
                                        value={feedback?.rating}
                                        readOnly

                                    />
                                </div>
                                <p>{feedback?.description}</p>
                            </div>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </section>
    );
};

export default FeedbackSection;


