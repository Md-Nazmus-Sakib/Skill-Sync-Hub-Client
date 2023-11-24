import React from 'react';
import bannerImg from '../../../../assets/Images/all/banner.png'
import Button from '../../../Button/Button';

const Banner = () => {
    return (
        <div className='min-h-[600px] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-between items-center flex-col md:flex-row'>
            <div className='text-center md:w-1/2 md:mx-auto flex-1 mx-4 md:ml-14 lg:ml-24'>
                <h1 className='text-5xl font-extrabold text-white my-8 '>Learn without limits</h1>
                <p className='text-white text-xl my-4'>Give yourself an upgrade with our inspiring online courses and join a global community of learners.</p>
                <Button name={'All Course'}></Button>
            </div>
            <div className='flex-1'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;