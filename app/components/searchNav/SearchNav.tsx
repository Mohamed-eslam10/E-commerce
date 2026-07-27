import { useCartStore } from "@/app/store/cartStore";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchOnly from "./SearchOnly";

const SearchNav = () => {
    const cartLength = useCartStore(state => state.cart.length);
    const favouriteLength = useCartStore(state => state.favourite.length);
    return (
        <div className="flex sm:items-center gap-1 sm:gap-10">
            <div className=" sm:flex-1">

                <SearchOnly />
            </div>

            <div className="flex items-center gap-2  sm:gap-3 mr-1 sm:mr-0">
                <Link
                    href="/favourite"
                    className="relative">
                    <Heart
                        size={22}
                        className="cursor-pointer transition hover:scale-110"
                    />
                    <span className="absolute -top-1 p-2 -right-2 flex h-1 w-1 items-center justify-center rounded-full bg-slate-500 text-xs text-white">{favouriteLength}</span>
                </Link>
                <Link href="/cart" className="relative">
                    <ShoppingCart
                        size={22}
                        className="cursor-pointer transition hover:scale-110"
                    />
                    <span className="absolute -top-1 p-2 -right-2 flex h-1 w-1 items-center justify-center rounded-full bg-slate-500 text-xs text-white">{cartLength}</span>
                </Link>
            </div>
        </div>
    );
};

export default SearchNav;