import Link from "next/link"

const page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">

                    <div>
                        <h1 className="text-4xl font-bold">
                            My Wishlist
                        </h1>

                        <p className="text-gray-500 mt-2">
                            12 saved products
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="font-medium hover:underline"
                    >
                        Continue Shopping →
                    </Link>

                </div>

                {/* Products */}

            </div>
        </div>
    )
}

export default page