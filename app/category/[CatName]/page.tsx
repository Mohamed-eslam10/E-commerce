import Card from "../Card";

interface CatProps {
    params: Promise<{
        CatName: string
    }>
}
const page = async ({ params }: CatProps) => {
    const { CatName } = await params;
    // console.log(CatName);
    const res = await fetch(`https://dummyjson.com/products/category/${CatName}`);
    const data = await res.json();
    // console.log(data);
    return (
        <div>
            <h1 className="text-2xl text-center font-bold mb-2 mt-5"> {CatName}</h1>
            <p className="text-center text-gray-600 mb-5">Welcome to the {CatName} category</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
                {data.products.map((product: any) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default page