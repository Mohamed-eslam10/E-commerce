
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
interface SearchParams {
    searchParams: Promise<{
        result?: string;
    }>
}
interface SearchResponse {
    products: Product[];
    skip?: number;
    total?: number;
    limit?: number;
}
import Card from "../category/Card";
import { Search } from "lucide-react";

const page = async ({ searchParams }: SearchParams) => {
    // console.log((await searchParams).result);
    const { result = ""} = await searchParams;
    // console.log(result)



    //fetching//
    const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(result)}`,{
        cache:"no-store",
    });
    const data : SearchResponse= await res.json();
    // console.log(data)



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
                    {data.products.length} Products Found
                </p>
            </div>

            {/* Products */}

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {
                    data.products.length > 0 ? (data.products.map((product: Product) => (

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