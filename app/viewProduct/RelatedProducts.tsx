import Image from "next/image";
import Link from "next/link";
const RelatedProducts = async ({ data }: any) => {
    const res = await fetch(`https://dummyjson.com/products/category/${data.category}`);
    const relatedProducts: { products: any[] } = await res.json();
    const filteredProducts = relatedProducts.products.filter(item => item.id !== data.id);
    console.log(filteredProducts);
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {filteredProducts.slice(0, 4).map((product) => (
                <div
                    key={product.id}
                    className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-lg transition"
                >
                    <div className="relative h-56 rounded-xl bg-gray-100">
                        <Image
                            src={product.thumbnail}
                            alt="product"
                            fill
                            className="object-contain p-5"
                        />
                    </div>

                    <h3 className="mt-5 font-semibold text-lg">
                        {product.title}
                    </h3>

                    <p className="mt-2 text-red-500 font-bold">
                        ${product.price.toFixed(2)}
                    </p>

                    <button className="mt-5 w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800 transition">
                        <Link href={`/viewProduct?id=${product.id}`} >
                            View Product
                        </Link>
                    </button>

                </div>
            ))}

        </div>
    )
}

export default RelatedProducts