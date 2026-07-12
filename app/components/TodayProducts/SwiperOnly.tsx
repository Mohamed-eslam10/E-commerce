'use client';
import { ChevronLeft, ChevronRight, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


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
interface Props {
    products: Product[];
}
const SwiperOnly = ({ products }: Props) => {
    return (
        <div>
            <div className="flex justify-end gap-3 mb-6">

                <button className="prev p-3 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200">
                    <ChevronLeft />
                </button>

                <button className="next p-3 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200">
                    <ChevronRight />
                </button>

            </div>

            <Swiper
                className="h-full w-full transition-all duration-500 ease-in-out"
                spaceBetween={30}
                modules={[Navigation]}
                navigation={
                    {
                        prevEl:".prev",
                        nextEl:".next"
                    }
                }
                pagination={{ clickable: true }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}


            >
                {
                    products.map((product: Product) => (
                        <SwiperSlide key={product.id}>
                            <div className="w-full rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">


                                <div>
                                    <div className="relative h-56 sm:h-64 bg-[#F5F5F5] overflow-hidden">

                                        {/* Discount */}
                                        <span className="absolute top-3 left-3 z-10 rounded bg-slate-500 px-3 py-1 text-xs text-white">
                                            {product.discountPercentage.toFixed(0)}%
                                        </span>

                                        {/* Actions */}
                                        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">

                                            <button className="rounded-full bg-white p-2 shadow transition hover:bg-gray-100">
                                                <Heart size={18} />
                                            </button>

                                            <button className="rounded-full bg-white p-2 shadow transition hover:bg-gray-100">
                                                <Link href={`/viewProduct?id=${product.id}`} className="w-full block h-full">
                                                    <Eye size={18} />
                                                </Link>
                                            </button>

                                            {/* يظهر في الموبايل */}
                                            <button className="rounded-full bg-white p-2 shadow transition hover:bg-gray-100 lg:hidden">
                                                <ShoppingCart size={18} />
                                            </button>

                                        </div>

                                        <Image
                                            src={product.thumbnail}
                                            alt="Laptop"
                                            fill
                                            sizes="(max-width:640px) 100vw,
               (max-width:1024px) 50vw,
               25vw"
                                            className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                                        />

                                        {/* Add To Cart */}
                                        <button
                                            className="
          absolute
          bottom-0
          left-0
          w-full
          bg-black
          h-10
          rounded
          cursor-pointer
          py-3
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          lg:translate-y-full
          lg:group-hover:translate-y-0
          hidden
          lg:block

        "
                                        >
                                            Add To Cart
                                        </button>

                                    </div>

                                    {/* Details */}
                                    <div className="p-4">

                                        <h3 className="line-clamp-2 text-base font-semibold">
                                            {product.title}
                                        </h3>

                                        <div className="mt-2 flex items-center gap-3">
                                            <span className="font-bold text-red-500">${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</span>

                                            <span className="text-gray-400 line-through">
                                                ${product.price}
                                            </span>
                                        </div>

                                        <div className="mt-3 flex items-center gap-2">

                                            <div className="flex">
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                                <Star size={16} className="text-gray-300" />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>

        </div>
    )
}

export default SwiperOnly