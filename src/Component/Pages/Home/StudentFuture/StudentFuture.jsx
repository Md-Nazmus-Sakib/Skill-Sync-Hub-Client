import React from 'react';
import empowerImg from '../../../../assets/Images/logo/empower.png';
import engageImg from '../../../../assets/Images/logo/engage.png';
import awardImg from '../../../../assets/Images/logo/awarding.png';
const StudentFuture = () => {
    return (
        <div className='my-12 p-4'>
            <div className='w-full md:w-2/3 mx-auto'>
                <h1 className='text-3xl font-extrabold my-4'>WE HAVE FAITH IN OUR STUDENT FUTURE</h1>
                <p>Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-6 p-4'>
                <div>
                    <img className='w-24 h-24 mx-auto' src={empowerImg} alt="" />
                    <h1 className='text-2xl font-extrabold my-4'>Empower</h1>
                    <p className='text-slate-200 text-justify'>with the knowledge, skills, resources, and confidence to take control of their education and lives. </p>
                </div>
                <div>
                    <img className='w-24 h-24 mx-auto' src={engageImg} alt="" />
                    <h1 className='text-2xl font-extrabold my-4'>Engage</h1>
                    <p className='text-slate-200 text-justify'> It enhances their motivation, encourages deeper understanding, and fosters a positive attitude towards learning, </p>
                </div>

                <div>
                    <img className='w-24 h-24 mx-auto' src={awardImg} alt="" />
                    <h1 className='text-2xl font-extrabold my-4'>Awarding</h1>
                    <p className='text-slate-200 text-justify'>Honors, scholarships, certificates, or prizes to students in acknowledgment of their achievements</p>
                </div>
            </div>
        </div>
    );
};

export default StudentFuture;