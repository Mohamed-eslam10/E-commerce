'use client';
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
interface FavProduct {
    product: Product
}
import { Heart } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { toast } from "react-toastify";

const AddToFavourite = ({ product }: FavProduct) => {
    const addToFavourite = useCartStore(state => state.addToFavourite)
    const isFavourite = useCartStore(state => state.favourite.some(item => item.id === product.id))
    return (
        <button onClick={() => {
            addToFavourite(product);
            toast.error('❤️ added to favourites', {
                icon: false,
            })
        }} className="h-12 w-12 border rounded-lg flex items-center justify-center cursor-pointer" >
            <Heart className={isFavourite ? 'fill-red-600 text-white' : ''} size={30} />
        </button>
    )
}

export default AddToFavourite