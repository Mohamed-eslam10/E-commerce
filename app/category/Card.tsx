'use client';
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";
import { toast } from "react-toastify";
const Card = ({ product }: any) => {

    const addToCart = useCartStore(
        state => state.addToCart
    )
    const isFavourite = useCartStore(state => state.favourite.some(item => item.id === product.id))
    // console.log(useCartStore(state=>state.favourite))
    // console.log(isFavourite)

    const addToFavourite = useCartStore(state => state.addToFavourite)
    return (
        <Link href={`/viewProduct?id=${product.id}`} >
            <div className=" group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <span className="absolute top-4 w-1/8 right-2 bg-slate-500 rounded text-center text-white text-xs  px-2 py-1 flex justify-center items-center">
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
                        <span className="flex items-center gap-1 text-yellow-500 fill-red-400">
                            <span><Star className="fill-yellow-500" /></span> {product.rating}
                        </span>

                        <span className="rounded-full bg-slate-100 cursor-pointer px-3 py-1 text-xs font-medium text-slate-700">
                            <Heart onClick={() => {
                                addToFavourite(product);
                                toast.error('❤️ added to favourites', {
                                    icon: false,
                                })
                            }
                            } className={isFavourite ? "fill-red-500 text-red-500" : ""} />
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                        </span>

                        <button onClick={() => {
                            addToCart(product);
                            toast.success('added to Cart')

                        }} className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;