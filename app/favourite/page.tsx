'use client';

import Image from "next/image";
import Link from "next/link";
import { Trash, Eye, ShoppingCart, MoveRight, Heart } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { toast } from "react-toastify";

const Page = () => {
    const favourite = useCartStore(state => state.favourite);
    const addToCart = useCartStore(state => state.addToCart);
    const deleteFromFavourite = useCartStore(state => state.deleteFromFavourite);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold">
                            My Wishlist
                        </h1>

                        <p className="text-gray-500 mt-2">
                            12 saved products
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="border flex gap-2 text-center border-gray-300 px-2 sm:px-6 py-3 rounded-md text-sm  hover:bg-black hover:text-white transition"
                    >
                        Continue Shopping<MoveRight className="hidden sm:block" />
                    </Link>
                </div>

                {/* Products */}

                {/* Card */}
                {
                    favourite.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {favourite.map((product) => (
                                <div className="group" key={product.id}>

                                    <div className="relative bg-gray-100 rounded-md overflow-hidden h-72 flex items-center justify-center">

                                        <span className="absolute top-4 left-4 bg-slate-500 text-white text-xs px-3 py-1 rounded">
                                            {product.discountPercentage?.toFixed(0)}%
                                        </span>

                                        <div className="absolute top-4 right-4 flex flex-col gap-2">

                                            <button onClick={() => deleteFromFavourite(product.id)} className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition cursor-pointer">
                                                <Trash size={18} />
                                            </button>

                                            <button className="bg-white  rounded-full shadow hover:bg-black hover:text-white transition cursor-pointer">
                                                <Link href={`/viewProduct?id=${product.id}`} className="w-full h-full block p-2">
                                                    <Eye size={18} />
                                                </Link>
                                            </button>

                                            <button onClick={() => {
                                                addToCart(product);
                                                toast.success('added to Cart')

                                            }} className="bg-white p-2 lg:hidden rounded-full shadow hover:bg-black hover:text-white transition cursor-pointer">
                                                <ShoppingCart size={18} />
                                            </button>


                                        </div>

                                        <Image
                                            src={product.thumbnail}
                                            alt="Product"
                                            width={180}
                                            height={180}
                                            className="object-contain group-hover:scale-105 transition duration-300"
                                        />

                                        <button onClick={() => {
                                            addToCart(product);
                                            toast.success('added to Cart')

                                        }} className="absolute cursor-pointer  bottom-0 left-0 w-full bg-black text-white py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition duration-300">
                                            <ShoppingCart size={18} />
                                            Add To Cart
                                        </button>

                                    </div>

                                    <div className="mt-4">

                                        <h2 className="font-semibold text-lg">
                                            {product.title}
                                        </h2>

                                        <div className="flex items-center gap-3 mt-2">

                                            <span className="text-red-500 font-semibold">
                                                {(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                                            </span>

                                            <span className="text-gray-400 line-through">
                                                {product.price}
                                            </span>

                                        </div>

                                        <div className="flex items-center gap-1 mt-2">

                                            ⭐⭐⭐⭐⭐
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
                            <Heart size={60} className="text-slate-300" />

                            <h2 className="mt-5 text-2xl font-semibold text-slate-700 text-center">
                                Your favorites list is empty
                            </h2>

                            <p className="mt-2 text-center text-slate-500">
                                Save products you love and they'll appear here.
                            </p>
                        </div>
                    )
                }

                {/* كرر نفس الـ Card حسب عدد المنتجات */}

            </div>
        </div>
    );
};

export default Page;