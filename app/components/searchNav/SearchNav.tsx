import { Heart, Search, ShoppingCart } from "lucide-react";

const SearchNav = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full rounded-md bg-gray-100 py-2 pl-4 pr-10 text-sm outline-none"
                />

                <Search

                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                />
            </div>

            <div className="flex items-center gap-2 sm:gap-4 ">
                <div className="relative">
                    <Heart
                        size={22}
                        className="cursor-pointer transition hover:scale-110"
                    />
                    <span className="absolute -top-1 p-2 -right-2 flex h-1 w-1 items-center justify-center rounded-full bg-slate-500 text-xs text-white">5</span>
                </div>
                <div className="relative">
                    <ShoppingCart
                        size={22}
                        className="cursor-pointer transition hover:scale-110"
                    />
                    <span className="absolute -top-1 p-2 -right-2 flex h-1 w-1 items-center justify-center rounded-full bg-slate-500 text-xs text-white">5</span>
                </div>
            </div>
        </div>
    );
};

export default SearchNav;