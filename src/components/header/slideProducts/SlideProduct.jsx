import React from 'react'
import Product from './Product.jsx'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export default function SlideProduct() {
    return (
        <div>
            <div>
                <div className='relative flex flex-col w-250 mt-10 mx-auto border-b border-slate-300'>
                    <h2 className='font-semibold text-sky-600 font-sans mb-2 text-2xl'>smartphones</h2>
                    <p className='text-slate-500 mb-3  text-sm'>Add bestselling products to weekly line up</p>
                    <span className='absolute bottom-0 w-20 h-0.5 bg-cyan-600' ></span>
                </div>
                <Swiper
                    slidesPerView={5}
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={20}
                    className="mySwiper w-250 relative
                 [&_.swiper-button-next]:-right-12
                 [&_.swiper-button-prev]:-left-12
                 [&_.swiper-button-next]:text-sky-600
                [&_.swiper-button-prev]:text-sky-600">
                    <SwiperSlide ><Product /></SwiperSlide>
                    <SwiperSlide><Product /></SwiperSlide>
                    <SwiperSlide><Product /></SwiperSlide>
                    <SwiperSlide><Product /></SwiperSlide>
                    <SwiperSlide><Product /></SwiperSlide>
                    <SwiperSlide><Product /></SwiperSlide>
                    <SwiperSlide><Product /></SwiperSlide>
                </Swiper>


            </div>


        </div>
    )
}
