import React from 'react';
import logo1 from '../../../../assets/Images/logo/logo (1).png'
import logo2 from '../../../../assets/Images/logo/logo (2).png'
import logo3 from '../../../../assets/Images/logo/logo (3).png'
import logo4 from '../../../../assets/Images/logo/logo (4).png'
import logo5 from '../../../../assets/Images/logo/logo (5).png'
import logo6 from '../../../../assets/Images/logo/logo (6).png'
import logo7 from '../../../../assets/Images/logo/logo (7).png'
import logo8 from '../../../../assets/Images/logo/logo (8).png'
import Marquee from 'react-fast-marquee';


const Partner = () => {
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h3 className='text-2xl'>Our Partners</h3>
                <h1 className='text-5xl'>Institutions Work With Us</h1>
            </div>

            <Marquee>
                <div className='flex gap-6 my-12'>


                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo1} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Lorem Ipsum</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo2} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Youth Foundation</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo3} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Youth Foundation</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo4} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Bay City School</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo5} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Digital School</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo6} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Company</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo7} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Education</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img className='w-60 h-60 cursor-pointer relative' src={logo8} alt="" />
                        <div className='hidden group-hover:absolute top-1/2 group-hover:block bg-black text-white p-4 rounded-xl bg-opacity-40'>
                            <h1 className='text-2xl'>Education</h1>
                            <p>Together, we collaborate with esteemed partners, enriching our academic journey.</p>
                        </div>
                    </div>

                </div>
            </Marquee>

        </div>
    );
};

export default Partner;