'use client';
import Image from "next/image";
import { useCartStore } from "../store/cartStore"
import { Trash } from "lucide-react";

const page = () => {
    const cart = useCartStore(
        state => state.cart
    )
    const deleteProduct = useCartStore(
        state => state.deleteFromCart
    )
    
    // console.log(cart)
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">

            <h1 className="text-4xl font-bold mb-10">
                Shopping Cart
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Cart Items */}

                <div className="lg:col-span-2 space-y-5  lg:min-w-2xl">

                    <div className="hidden md:grid grid-cols-6 bg-white rounded-xl shadow p-5 font-semibold">
                        <p>Product</p>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p></p>
                    </div>

                    {/* Item */}


                    {cart.length > 0 ? (
                        <div className="bg-white rounded-2xl shadow  overflow-y-auto   max-h-80 border">
                            {cart.map((product,index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col
                                            md:grid
                                            md:grid-cols-[100px_1fr_120px_120px_120px_60px]
                                            items-center
                                            gap-5
                                            p-5
                                            border-b
                                            last:border-b-0`}
                                >
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        width={90}
                                        height={90}
                                        className="object-contain" />

                                    <div className="text-center md:text-left">
                                        <h2 className="font-semibold text-lg">
                                            {product.title}
                                        </h2>

                                        <p className="text-gray-500 text-sm">
                                            Product #{product.id}
                                        </p>
                                    </div>
                                    <p className="font-semibold text-lg">
                                        ${product.price}
                                    </p>

                                    <div className="border rounded-lg w-fit px-4 py-2">
                                        1
                                    </div>

                                    <p className="font-bold text-xl text-red-500">
                                        ${product.price}
                                    </p>

                                    <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-700 cursor-pointer hover:scale-110 hover:rotate-10  text-xl transition">
                                       <Trash />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-60">
                            <p className="text-2xl text-slate-500">Your cart is empty !</p>
                        </div>
                    )}


                </div>

                {/* Summary */}

                <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-9 lg:min-w-sm w-[95vw] md:w-auto">

                    <h2 className="text-2xl font-bold mb-8">
                        Order Summary
                    </h2>

                    <div className="space-y-5">

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Subtotal
                            </span>

                            <span className="font-semibold">
                                $0
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Shipping
                            </span>

                            <span className="text-green-600 font-medium">
                                Free
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Tax
                            </span>

                            <span>$0</span>
                        </div>

                        <hr />

                        <div className="flex justify-between text-2xl font-bold">
                            <span>Total</span>
                            <span>$0</span>
                        </div>

                    </div>

                    <button className="mt-8 w-full rounded-xl bg-black py-4 text-white font-semibold hover:bg-neutral-800 transition">
                        Proceed To Checkout
                    </button>

                </div>

            </div>

        </div>
    )
}

export default page