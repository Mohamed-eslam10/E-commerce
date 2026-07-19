import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
    id: number;
    title: string;
    price: number;
    total?: number;
    quantity?: number;
    thumbnail: string;
}

interface CartStore {
    cart: Product[];
    addToCart: (product: Product) => void;
    deleteFromCart: (id: number) => void;
}


export const useCartStore = create<CartStore>()(
    persist((set) => ({
        cart: [],
        addToCart: (product) =>
            set((state) => ({
                cart: [...state.cart, product]
            })),
        deleteFromCart: (id) => set(
            (state) => ({
                cart: state.cart.filter((item) => item.id !== id)
            })
        )

    }),
        {
            name: "cart-storage"
        }
    ))