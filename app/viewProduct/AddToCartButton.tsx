'use client';
import { toast } from "react-toastify";
import { useCartStore } from "../store/cartStore";

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
interface ButtonProduct {
    product: Product
}
const AddToCartButton = ({ product }: ButtonProduct) => {
    // console.log(props.product)
    const addToCart = useCartStore(
        state => state.addToCart
    )
    return (
        <button onClick={() => {
            addToCart(product);
            toast.success('added to Cart')

        }} className="mt-6 w-full rounded-lg border border-black py-4 font-semibold hover:bg-black hover:text-white transition">
            Add To Cart
        </button>

    )
}

export default AddToCartButton