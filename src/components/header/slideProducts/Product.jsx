import React from 'react'
import { Rating, RatingStar } from 'flowbite-react';
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart,FaShare  } from "react-icons/fa";



export default function Product() {
    return (
        <div className='flex w-250 mx-auto  '>
            <div className='border w-[180px] group overflow-hidden transition-all rounded hover:shadow-lg border-slate-300 hover:border-sky-600 p-3 w-50 mt-4 mb-4 relative'>
                <img className='w-40 h-35 mx-auto object-contain mb-4' src="https://i.ebayimg.com/images/g/nKAAAeSwrxJpcITW/s-l960.jpg" alt="Loading" />
                <p className='text-sm text-slate-800 line-clamp-1 mb-1' >Lorem ipsum dolor sit amet. Ab commodi possimus quos!</p>
                <div className='mb-1'>
                    <Rating className='text-amber-300'>
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar />
                        <RatingStar filled={false} />
                    </Rating>

                </div>
                <p className='text-sky-600 font-semibold mb-2' >$1000</p>
                <div className='absolute top-15 -right-10 transition-all duration-200 group-hover:right-2 flex flex-col  items-center justify-center gap-2'>
                    <IoCartSharp className=' text-sky-600 rounded-full bg-gray-200 text-lg w-8 h-8 p-2 cursor-pointer' />
                    <FaShare className=' text-sky-600 rounded-full bg-gray-200 text-lg w-8 h-8 p-2 cursor-pointer' />
                    <FaRegHeart className=' text-sky-600 rounded-full bg-gray-200 text-lg w-8 h-8 p-2 cursor-pointer' />



                </div>
            </div>
        </div>
    )
}
