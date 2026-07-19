'use client';
import { useState } from "react"
const Quantity = () => {
    const [num, setNum] = useState<number>(1);
    return (
        <div className="flex items-center justify-center border rounded-lg overflow-hidden max-w-40">

            <button onClick={() => setNum(prev => Math.max(1, prev - 1))} className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                -
            </button>

            <span className="px-6">
                {num}
            </span>

            <button onClick={() => setNum(prev => prev + 1)} className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                +
            </button>

        </div>

    )
}

export default Quantity