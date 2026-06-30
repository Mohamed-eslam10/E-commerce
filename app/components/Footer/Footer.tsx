import Link from "next/link";
import { IoSendSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

                <section className="space-y-5">
                    <h2 className="text-2xl font-bold">Exclusive</h2>

                    <div>
                        <h3 className="font-semibold">Subscribe</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Get 10% off your first order
                        </p>
                    </div>

                    <div className="flex items-center rounded-md border border-gray-500 px-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent py-3 outline-none placeholder:text-gray-500"
                        />

                        <button className="text-xl">
                            <IoSendSharp />
                        </button>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Support</h2>

                    <p className="text-gray-400">
                        111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh
                    </p>

                    <p className="text-gray-400">
                        exclusive@gmail.com
                    </p>

                    <p className="text-gray-400">
                        +88015-88888-9999
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Account</h2>

                    <div className="flex flex-col gap-3 text-gray-400">
                        <Link href="/account">My Account</Link>
                        <Link href="/login">Login / Register</Link>
                        <Link href="/cart">Cart</Link>
                        <Link href="/wishlist">Wishlist</Link>
                        <Link href="/">Shop</Link>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Quick Link</h2>

                    <div className="flex flex-col gap-3 text-gray-400">
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms Of Use</Link>
                        <Link href="/">FAQ</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </section>

            </div>

            <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                © Copyright Rimel 2026. All rights reserved.
            </div>
        </div>
    )
}

export default Footer