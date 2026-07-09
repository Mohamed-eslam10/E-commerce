'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const HeroSec = () => {
  const urls = [
    "/mackup.png",
    "/laptopp.png",
    "/furniture.png",
    "/sneakers.png",
  ];
  return (
    <div>
      <section className="mx-auto mt-8 flex max-w-7xl flex-col  md:gap-8 px-4 md:flex-row">
      {/* Categories */}
      <div className="lg:w-1/4">
        <CategoriesList />
      </div>

      {/* Hero Banner */}
      <div className="relative h-90 mb-5 w-full overflow-hidden rounded-lg lg:h-[380px] lg:w-3/4">
        <Swiper
          className="h-full w-full transition-all duration-500 ease-in-out"
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {
            urls.map((url, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={url}
                  width={800}
                  height={500}
                  className="rounded object-cover w-full h-full"
                  alt="Hero Banner" />
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>

    </section>
    </div>
  );
};

export default HeroSec;