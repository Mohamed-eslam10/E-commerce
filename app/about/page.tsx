import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="mb-8 text-5xl font-semibold tracking-tight">
            Our Story
          </h1>

          <div className="space-y-6 text-gray-600 leading-7">
            <p>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>

            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[55%]">
          <Image
            src="/clothes.png"
            alt="About Us"
            width={700}
            height={600}
            className="h-auto w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;