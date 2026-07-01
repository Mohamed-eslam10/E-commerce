import { Heart, Search, ShoppingCart } from "lucide-react";

const SearchNav = () => {
    return (
        <div className="flex items-center gap-1 sm:gap-4 md:gap-5">
            <div className="relative">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-54 sm:w-64 rounded-md bg-gray-100 py-2 pl-4 pr-10 text-sm outline-none"
                />

                <Search
                    type="submit"
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                />
            </div>

            <Heart
                size={22}
                className="cursor-pointer transition hover:scale-110"
            />

            <ShoppingCart
                size={22}
                className="cursor-pointer transition hover:scale-110"
            />
        </div>
    );
};

export default SearchNav;