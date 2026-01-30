import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
export default function Topheader() {
    return (
        <div className="font-sans ">
            <div className='flex justify-between px-5 mt-3 gap-15'>
                <Link to="/" ><img className='w-20 sm:w-30' src="/img/logo.png" alt="logo" /></Link>
                <form action="" className='flex relative ' >
                    <input id='search' className='peer outline-none border-1 border-sky-600   bg-[#f5f5f5] p-3 h-9 sm:h-10 w-36 sm:w-50 md:w-80 rounded-l-full placeholder:text-sm text-sm placeholder:p-1' type="text" name='search' placeholder='search for products' />
                   
                    <button className='p-3  text-sm sm:h-10 h-9 w-10 text-white bg-sky-600 rounded-r-full hover:bg-sky-700' type='submit'><FaSearch  /></button>
                </form>
                <div className='flex gap-4 mt-2'>
                    <div className='relative'>
                        <span className='text-xl sm:text-2xl'><FaRegHeart /></span>
                        <span className='absolute -top-2 -right-2 text-white bg-sky-600 h-4 w-4 rounded-full flex items-center justify-center text-xs'>4</span>
                    </div>
                    <div className='relative'>
                        <span className='text-xl sm:text-2xl'><IoCartSharp /></span>
                        <span className='absolute -top-2 -right-2 text-white bg-sky-600 h-4 w-4 rounded-full flex items-center justify-center text-xs'>3</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
