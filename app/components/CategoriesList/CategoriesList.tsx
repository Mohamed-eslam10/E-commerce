import axios from "axios";


const CategoriesList = async () => {
    const res = await axios('https://dummyjson.com/products/category-list');
    const list: string[] = await res.data;
    // console.log(list)
    return (
        <aside className="hidden md:block w-full max-w-64 rounded-lg border-r bg-white p-4  overflow-y-auto max-h-80 ">
            <ul className="space-y-2">
                {list.map((category, index) => (
                    <li
                        key={index}
                        className="cursor-pointer rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-black"
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default CategoriesList;