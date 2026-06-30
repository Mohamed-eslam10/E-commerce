import  Link  from "next/link"

const NotFound = () => {
    return (
        <div className="bg-[#f9f9f9] font-inter">
            <section className="w-full px-4 pt-3 pb-3 sm:px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white shadow-sm p-6 sm:p-8 md:p-12 lg:p-16 text-center">

                        {/* 404 */}
                        <div className="mb-8">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black">
                                404
                            </h1>

                            <div className="w-20 sm:w-24 h-1 bg-black mx-auto mt-4 mb-6"></div>
                        </div>

                        {/* Content */}
                        <div className="mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                                Page Not Found
                            </h2>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                The page you are looking for might have been removed, had its name
                                changed, or is temporarily unavailable.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#DB4444] text-white font-medium rounded hover:bg-[#c63b3b] transition-colors">
                               <Link href={`/`}> Go Back Home</Link>
                            </button>
                        </div>

                        

                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotFound