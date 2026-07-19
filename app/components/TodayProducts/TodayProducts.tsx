import Link from "next/link"
import FlashSales from "./FlashSales"
import ProductsSwiper from "./ProductsSwiper"
import ViewProducts from "./ViewProducts"

const TodayProducts = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 border-b mb-20">
            <div className="flex items-center gap-2 mb-5">
                <span className="w-4 bg-slate-600 rounded h-8"></span>
                <h2 className="text-xl font-bold text-slate-800">Today's</h2>
            </div>
            <FlashSales />
            <ProductsSwiper/>
            <ViewProducts/>
            
        </div>
    )
}

export default TodayProducts