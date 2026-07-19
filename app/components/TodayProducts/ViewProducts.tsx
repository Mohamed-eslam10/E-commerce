'use client';
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;

}
import Card from "@/app/category/Card";
import { useEffect, useState } from "react";

const ViewProducts = () => {
const [products,setProducts]=useState([]);
const [open , setOpen]= useState(false)
    useEffect(() => {
        const respond = async ()=>{
            const res = await fetch('https://dummyjson.com/products?limit=200');
            const data = await res.json();
            // console.log(data.products)
            const discountProducts = data.products.sort((a:Product,b:Product)=>
                b.discountPercentage-a.discountPercentage
            ).slice(0,25)
            setProducts(discountProducts) 
        }
        respond();
}, [])
return (
    <div>
        <div onClick={()=>{setOpen(!open)}} className="flex justify-center w-[90vw] ">
            <button className="p-2 bg-slate-500 hover:bg-slate-600 text-white cursor-pointer rounded px-7 py-3 mt-5 mb-12">View All Products</button>
        </div>
        {/* products */}
        <section>
            
                <div className={open?"max-h-auto w-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6 transition-all duration-500 ":" max-h-0 w-0 overflow-hidden  transition-all duration-300"}>
                {products.map((product: any) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            

        </section>
    </div>
)
}

export default ViewProducts