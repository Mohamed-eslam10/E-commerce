import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <section className="flex min-h-screen max-w-7xl items-center justify-between gap-10 px-6 py-5 mb-15">

      <div className="hidden  lg:block">
        <Image
          src="/side_image.png"
          width={500}
          height={500}
          alt="Register"
          className="w-full"
        />
      </div>

      <div className="mx-auto w-full max-w-md ">
        <h1 className="mb-3 text-4xl font-semibold">
          Log in to Exclusive
        </h1>

        <p className="mb-10 text-gray-500">
          Enter your details below
        </p>

        <form className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 py-3 outline-none transition focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 py-3 outline-none transition focus:border-black"
          />

          <div className="flex justify-between w-full items-center">
            <button
              className="min-w-30 rounded bg-slate-500 py-3 cursor-pointer font-medium text-white transition hover:bg-slate-600"
            >
              Log in
            </button>


            <Link className="text-slate-600 transition-all duration-200 hover:border-b " href="/">Forget password?</Link>

          </div>
        </form>

        
      </div>

    </section>
  )
}

export default page