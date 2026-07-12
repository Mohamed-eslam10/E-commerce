interface Props {
    searchParams: Promise<{
        id?: string
    }>
}
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
    images: string[];
}
import Image from "next/image";
import { Heart, Star, Truck, RotateCcw } from "lucide-react";
import RelatedProducts from "./RelatedProducts";

const Page = async ({ searchParams }: Props) => {
    const { id } = await searchParams;
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data: Product = await res.json();
    // console.log(data);
    return (
        <main className="max-w-7xl mx-auto px-5 py-10">

            {/* Breadcrumb */}
            <div className="mb-10 text-sm text-gray-500">
                Home / Electronics / <span className="text-black">{data.title}</span>
            </div>

            {/* Product Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Thumbnails */}
                <div className="order-2 lg:order-1 lg:col-span-2 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
                    {data.images.map((item) => (
                        <div
                            key={item}
                            className="relative h-24 w-24 rounded-xl bg-gray-100 overflow-hidden cursor-pointer border hover:border-black transition"
                        >
                            <Image
                                src={item}
                                alt="thumb"
                                fill
                                sizes="96px"
                                className="object-contain p-2"
                            />
                        </div>
                    ))}
                </div>

                {/* Main Image */}
                <div className="order-1 lg:order-2 lg:col-span-5">
                    <div className="relative h-[260px] sm:h-[420px] lg:h-[550px] rounded-2xl bg-gray-100 overflow-hidden">                        <Image
                        src={data.thumbnail}
                        alt="Product"
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"

                        className="object-contain p-8"
                    />
                    </div>
                </div>

                {/* Product Details */}
                <div className="order-3 lg:col-span-5">

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                        {data.title}
                    </h1>

                    {/* Rating */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">

                        <div className="flex text-yellow-500 justify-around items-center gap-1">
                            <span>{data.rating.toFixed(1)}</span>
                            <Star className="fill-yellow-500" size={18} />
                        </div>


                        <span className="text-green-600 font-medium">
                            In Stock
                        </span>

                    </div>

                    {/* Price */}
                    <h2 className="mt-6 text-3xl lg:text-4xl font-bold">
                        {(data.price-(data.price*data.discountPercentage)/100).toFixed(2)}$
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-sm sm:text-base leading-7 text-gray-600">
                        {data.description}
                    </p>

                    <hr className="my-8" />


                    {/* Quantity */}
                    <div className="mt-8 flex flex-wrap gap-4 items-center">
                        <div className="flex items-center justify-center border rounded-lg overflow-hidden">

                            <button className="px-5 py-3 hover:bg-gray-100">
                                -
                            </button>

                            <span className="px-6">
                                1
                            </span>

                            <button className="px-5 py-3 hover:bg-gray-100">
                                +
                            </button>

                        </div>

                        <button className="bg-slate-500 text-white sm:w-auto py-3 rounded-lg hover:bg-red-600 transition flex-1 min-w-[180px]">
                            Buy Now
                        </button>

                        <button className="h-12 w-12 border rounded-lg flex items-center justify-center">
                            <Heart />
                        </button>

                    </div>

                    {/* Add Cart */}
                    <button className="mt-6 w-full rounded-lg border border-black py-4 font-semibold hover:bg-black hover:text-white transition">
                        Add To Cart
                    </button>

                    {/* Delivery */}
                    <div className="mt-10 rounded-xl border">

                        <div className="flex items-start sm:flex-row gap-4 p-5">

                            <Truck size={30} />

                            <div>

                                <h3 className="font-semibold">
                                    Free Delivery
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Enter your postal code for Delivery Availability
                                </p>

                            </div>

                        </div>

                        <hr />

                        <div className="flex items-start sm:flex-row gap-4 p-5">

                            <RotateCcw size={30} />

                            <div>

                                <h3 className="font-semibold">
                                    Return Delivery
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Free 30 Days Delivery Returns.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Related Products */}
            <section className="mt-24">

                <h2 className="text-3xl font-bold mb-8">
                    Related Products
                </h2>

                <RelatedProducts data={data} />

            </section>

        </main>
    );
};

export default Page;