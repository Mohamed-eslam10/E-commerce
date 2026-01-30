import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';

export default function HeroSlider() {
    return (
        <div>
            <div>
                <Swiper
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        clickable: true,
                    }}
                    modules={[Pagination,Navigation,Autoplay]}
                    className="mySwiper w-250 h-[420px] mt-5"
                >
                    <SwiperSlide className='relative'>
                        <div className='absolute top-20 left-14' >
                            <h4 className='font-mono'>Introducing The New</h4>
                            <h3 className='text-sky-600 text-4xl font-bold'>Microsoft Xbox </h3>
                            <h3 className='text-sky-600 text-4xl font-bold mb-8'>360 Controller </h3>
                            <p className='text-gray-500 mb-8'>Windows Xp/10/7/8 Ps3, TV Box</p>
                            <Link className='bg-sky-600 p-2 font-sans rounded-4xl text-white hover:bg-sky-700' to={'/'} >Shop Now</Link>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='w-250' src="../img/banner_Hero1.jpg" alt="Loading" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'>
                        <div className='absolute top-20 left-14' >
                            <h4 className='font-mono'>NEW ARRIVAL</h4>
                            <h3 className='text-sky-600 text-4xl font-bold'>Xiaomi Air 75 </h3>
                            <h3 className='text-sky-600 text-4xl font-bold mb-8'>Earbuds</h3>
                            <p className='text-gray-500 mb-8'>AAC HD Sound Quality</p>
                            <Link className='bg-sky-600 p-2 font-sans rounded-4xl text-white hover:bg-sky-700' to={'/'} >Shop Now</Link>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='w-250' src="../img/banner_Hero2.jpg" alt="Loading" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'>
                        <div className='absolute top-20 left-14' >
                            <h4 className='font-mono'>MINI-X6U SPEAKER</h4>
                            <h3 className='text-sky-600 text-4xl font-bold'>Led Bluetooth </h3>
                            <h3 className='text-sky-600 text-4xl font-bold mb-8'>Speaker Lamp</h3>
                            <p className='text-gray-500 mb-8'>upport 3.5 mm jack audio input</p>
                            <Link className='bg-sky-600 p-2 font-sans rounded-4xl text-white hover:bg-sky-700' to={'/'} >Shop Now</Link>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='w-250' src="../img/banner_Hero3.jpg" alt="Loading" />
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div >
    )
}
