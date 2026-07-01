import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <section className="flex min-h-screen max-w-7xl items-center justify-between gap-10 px-6  py-5 mb-15">

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
          Create an account
        </h1>

        <p className="mb-10 text-gray-500">
          Enter your details below
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 py-3 outline-none transition focus:border-black"
          />

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

          <button
            className="w-full rounded-md bg-slate-500 py-3 font-medium text-white transition hover:bg-slate-600"
          >
            Create Account
          </button>

          <button
            className="flex w-full items-center justify-center rounded-md border py-3 transition hover:bg-gray-100"
          >
            <Link href="/" className="flex justify-center items-center gap-3"><FcGoogle size={25}/> Sign up with Google</Link>
          </button>

        </form>

        <p className="mt-8 text-center text-gray-500">
          Already have an account?
          <Link
            href="/register"
            className="ml-2 font-medium text-black underline"
          >
            Log in
          </Link>
        </p>
      </div>

    </section>
  );
};

export default page;