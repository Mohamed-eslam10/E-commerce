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

}
interface SearchResponse {
    products: Product[];
    skip?: number;
    total?: number;
    limit?: number;
}
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import Card from "../category/Card";
import { Search } from "lucide-react";

const page = () => {
    const result = useSearchParams().get('result');
    console.log(result)


    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        if (!result) return;
        const getResult = () => {
            fetch(`https://dummyjson.com/products/search?q=${result}`)
                .then(res => res.json())
                .then((data: SearchResponse) => { setProducts(data.products) })
        }
        getResult();
    }, [result]);
    return (
        <main className="mx-auto max-w-7xl px-4 py-10">

            {/* Header */}

            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Search Results
                </h1>

                <p className="mt-2 text-gray-500">
                    Results for
                    <span className="ml-2 font-semibold text-black">
                        "{result}"
                    </span>
                </p>

                <p className="mt-1 text-sm text-gray-400">
                    {products?.length} Products Found
                </p>
            </div>

            {/* Products */}

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {
                    products.length > 0 ? (products.map((product: Product) => (

                        <Card
                            key={product.id}
                            product={product}
                        />

                    ))) : (<div className="col-span-full flex flex-col items-center py-20">
                        <Search size={60} className="text-gray-300" />

                        <h2 className="mt-4 text-2xl font-semibold">
                            No products found
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Try searching with another keyword.
                        </p>
                    </div>)
                }

            </div>

        </main>
    )
}

export default page