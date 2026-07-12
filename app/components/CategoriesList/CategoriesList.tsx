'use client';
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";


const CategoriesList =  () => {
    const [open, setOpen] = useState(false);
    const [list, setList] = useState<string[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios('https://dummyjson.com/products/category-list');
            const list: string[] = await res.data;
            setList(list);
        }

        fetchCategories();
    }, []);
    
        return (
        <div>
            <aside className="hidden md:block w-full max-w-64 rounded-lg border-r bg-white p-4  overflow-y-auto max-h-80 ">
                <ul className="space-y-2">
                    {list.map((category, index) => (
                        <li
                            key={index}
                            className="cursor-pointer rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-black"
                        >
                            <Link href={`/category/${category}`}  className="w-full block">
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            {/* for the small screen */}
            <div className="md:hidden flex flex-col items-center justify-center mb-7">
                <div className="flex items-center justify-between w-full p-2 ">
                    <h2 className="text-lg font-semibold md:hidden text-center">Categories</h2>
                    <button onClick={() => { setOpen(!open) }} className="p-2 ml-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-all duration-500 ease-in-out">
                        <IoIosArrowUp className={open ? 'transition-transform rotate-180' : ''} />
                    </button>
                </div>
               
                        <aside className={`${open? "shadow border border-slate-200  p-4 max-h-80 opacity-100 mt-3":" max-h-0 opacity-0 p-0 border-0 overflow-hidden"} w-full overflow-y-auto  rounded-lg border-r bg-white   transition-all duration-500 ease-in-out`}>
                            <ul className="space-y-2">
                                {list.map((category, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-black"
                                    >
                                        <Link href={`/category/${category}`}  className="w-full">
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    
               
            </div>
        </div>
    );
};

export default CategoriesList;