import "swiper/css";
import "swiper/css/pagination";
import SwiperOnly from "./SwiperOnly";
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
const ProductsSwiper = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=220');
    const data = await res.json();
    const flashSales = data.products.sort((a :Product,b:Product)=>b.discountPercentage-a.discountPercentage).slice(20);
        // console.log(data.products[0]);
    return (

        <div className="w-full">
           <SwiperOnly products={flashSales}/>


        </div>
    )
}

export default ProductsSwiper