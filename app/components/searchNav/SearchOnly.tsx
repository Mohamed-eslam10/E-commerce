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
import { Search } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react"

const SearchOnly = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState<Product[] | null>(null)
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    useEffect((
        () => {
            if (!text.trim()) {
                setResult(null);
                return;
            }
            const timer = setTimeout(() => {
                fetch(`https://dummyjson.com/products/search?q=${text}`)
                    .then(res => res.json())
                    .then((data: SearchResponse) => {
                        setResult(data.products);
                        setIsOpen(true);
                        // setText('')

                        // console.log(data)
                    })


            }, 200)


            return () => clearTimeout(timer)
        }
    ), [text]);


    // click listener
    useEffect(() => {
        const clicked = (e: MouseEvent) => {
            if (!searchRef.current?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click", clicked);

        return () => {
            document.removeEventListener("click", clicked)
        }
    }, []);


    const submitResult = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        router.push(`/results?result=${encodeURIComponent(text)}`);
        setIsOpen(false);
    }
    // console.log(text);
    return (
        <div className="relative" ref={searchRef}>
            <form className="relative flex justify-between" onSubmit={submitResult}>
                <input
                    type="text"
                    onFocus={()=>{
                        if(result&&result.length>0){
                            setIsOpen(true);
                        }
                    }}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full rounded-md bg-gray-100 py-2 pl-4 pr-10 text-sm outline-none focus:ring-1 focus:ring-slate-300"
                />

                <button
                    type="submit"

                    className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 rounded-md p-2 px-3 transition hover:bg-gray-200"
                >
                    <Search size={18} />
                </button>
            </form>
            {/* drop down */}
            <div>
                {
                    result && result.length > 0 && isOpen && (
                        <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl z-50 animate-in fade-in zoom-in-95
                                        duration-150">
                            {result.slice(0, 4).map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/viewProduct?id=${product.id}`}
                                    className="flex items-center gap-3 p-3 transition hover:bg-gray-100"
                                >
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        width={55}
                                        height={55}
                                        className="h-14 w-14 rounded-md object-contain bg-gray-100 p-1"
                                    />

                                    <div className="flex-1 overflow-hidden">
                                        <h3 className="truncate text-sm font-medium">
                                            {product.title}
                                        </h3>

                                        <p className="mt-1 text-xs text-gray-500">
                                            {product.category}
                                        </p>
                                    </div>

                                    <span className="font-semibold text-red-500">
                                        ${product.price}
                                    </span>
                                </Link>
                            ))}

                            <Link
                                href={`/results?result=${encodeURIComponent(text)}`}
                                className="block border-t py-3 text-center text-sm font-medium text-slate-500 hover:bg-gray-50"
                            >
                                View all results
                            </Link>
                        </div>
                    )
                }
                <div>
                    {result?.length === 0 && (
                        <p className="absolute left-0 top-full mt-2 p-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl z-50 animate-in fade-in zoom-in-95
                                        duration-150 text-slate-500">No Result</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchOnly