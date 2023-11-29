import React from 'react';
import newsImg from '../../../../assets/Images/all/newsImg.jpg'

const LatestNews = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${newsImg})`, backgroundSize: "cover" }} className='my-12 lg:flex justify-center items-center gap-12 py-4 text-center'>
            <div>
                <h1 className='text-2xl font-bold my-4'>Get The Latest News From Skill Sync Hub.</h1>
                <p>Join our newsletter now</p>
            </div>
            <div className='mt-16'>
                <form>
                    <input className='mx-auto' type="text" placeholder='Enter Your Email Here' />
                    <input className='btn btn-outline btn-accent' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default LatestNews;