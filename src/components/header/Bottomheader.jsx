import React from 'react'
import { useEffect, useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, Link } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";



export default function Bottomheader() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      
      })
  }, []);
  const nav_list = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Accessories', link: '/accessories' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' }
  ]
  return (
    <div>
      <div className='bg-sky-600 flex justify-around mt-4 h-10 items-center'>
        <nav className=' flex gap-18 '>

          {/* //categories nav list// */}
          <div
            className='flex items-center relative cursor-pointer gap-2 text-white'
            onClick={() => { setOpen(!open) }}>

            <IoMdMenu />
            <p>Browse Category</p>
            <IoMdArrowDropdown className={`transition-transform ${open ? `rotate-180 transition` : ``}`} />

            <div className={`
            absolute top-full  mt-3 flex flex-col left-0 bg-white text-gray-700 border-1 border-gray-400 
            transition-all w-44 rounded duration-200 shadow-lg z-100 overflow-y-auto max-h-75 
            ${open ? `block ` : `hidden`}
            `}


            >
              {open && (

                categories.map((category) => {
                  return <Link className='border-b border-gray-300 text-sm px-2 py-2 hover:bg-gray-100 w-full' to={category.slug} key={category.url} >{category.name}</Link>
                })
              )}

            </div>
          </div>
          {/* //nav list// */}
          <div className=' flex  text-white items-center justify-center'>
            {
              nav_list.map((item) => {
                return (
                  <NavLink to={item.link} key={item.title} className={({ isActive }) => `
                  ${isActive ? `bg-sky-700` : `hover:bg-sky-700 ` } 
                 flex items-center h-10 px-2 transition duration-100
                  `} >{item.title}</NavLink>
                )
              })
            }

          </div>


        </nav>
        <div className=' flex text-white items-center justify-center text-xl ' >
          <Link className='hover:bg-sky-700 px-2 h-10 flex items-center transition duration-100  ' to="/login" ><PiSignInBold /></Link>
          <Link className='hover:bg-sky-700 px-2 h-10 flex items-center transition duration-100' to="/add" ><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  )
}
