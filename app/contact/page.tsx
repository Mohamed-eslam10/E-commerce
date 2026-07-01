import { FiMail, FiPhone } from "react-icons/fi";

const page = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Contact Info */}
        <div className="w-full rounded-lg bg-white p-5 shadow-md md:p-8 lg:w-1/3">
          <section className="border-b pb-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-slate-500 p-3 text-white">
                <FiPhone size={20} />
              </div>

              <h2 className="text-lg font-semibold">Call To Us</h2>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </section>

          <section className="pt-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-full bg-slate-500 p-3 text-white">
                <FiMail size={20} />
              </div>

              <h2 className="text-lg font-semibold">Write To Us</h2>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <p>Email: info@example.com</p>
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <div className="w-full rounded-lg bg-white p-5 shadow-md md:p-8 lg:w-2/3">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-md bg-gray-100 p-4 outline-none transition focus:ring-2 focus:ring-slate-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-md bg-gray-100 p-4 outline-none transition focus:ring-2 focus:ring-slate-500"
              />

              <input
                type="text"
                placeholder="Your Phone"
                className="rounded-md bg-gray-100 p-4 outline-none transition focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={8}
              className="w-full resize-none rounded-md bg-gray-100 p-4 outline-none transition focus:ring-2 focus:ring-slate-500"
            />

            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                className="w-full rounded-md bg-slate-500 px-8 py-3 font-medium text-white transition hover:bg-slate-600 lg:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;