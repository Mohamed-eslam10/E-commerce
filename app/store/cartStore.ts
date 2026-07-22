import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
    id: number;
    title: string;
    price: number;
    total?: number;
    quantity?: number;
    thumbnail: string;
    discountPercentage: number;
}

interface CartStore {
    cart: Product[];
    favourite: Product[];
    addToCart: (product: Product) => void;
    deleteFromCart: (id: number) => void;
    addToFavourite: (product: Product) => void;
    deleteFromFavourite: (id: number) => void;
}


export const useCartStore = create<CartStore>()(
    persist((set) => ({
        cart: [],
        favourite: [],
        addToCart: (product) =>
            set((state) => {
                if(state.cart.some(item=>item.id===product.id)){return state}
                return {cart: [...state.cart, product]}
            }),
        deleteFromCart: (id) => set(
            (state) => ({
                cart: state.cart.filter((item) => item.id !== id)
            })),
        addToFavourite: (product) => set(
            (state) => {
                if (state.favourite.some(item => item.id === product.id)) { return state; };
                return { favourite: [...state.favourite, product] }
            }),
        deleteFromFavourite: (id) => set((state) => ({
            favourite: state.favourite.filter((item) => item.id !== id)
        })),

    }),
        {
            name: "cart-storage"
        }
    ))