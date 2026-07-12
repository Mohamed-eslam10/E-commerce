'use client';
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const Card = ({ product }: any) => {
    const [clicked, setClicked] = useState(false);
    return (
        <Link href={`/viewProduct?id=${product.id}`} >
            <div className=" group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <span className="absolute top-4 w-1/8 right-2 bg-slate-500 rounded text-center text-white text-xs  px-2 py-1 ">
                   {product.discountPercentage.toFixed(0)}%
                </span>
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="space-y-3 p-5"  >
                    <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
                        {product.title}
                    </h2>

                    <p className="line-clamp-2 text-sm text-gray-500">
                        {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-between" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <span className="flex items-center gap-1 text-yellow-500">
                            ⭐ {product.rating}
                        </span>

                        <span className="rounded-full bg-slate-100 cursor-pointer px-3 py-1 text-xs font-medium text-slate-700">
                            <Heart onClick={() => { setClicked(!clicked) }} className={clicked ? "fill-red-500 text-red-500" : ""} />
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                        </span>

                        <button className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;