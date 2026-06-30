import Image from "next/image";
import CategoriesList from "../CategoriesList/CategoriesList";

const HeroSec = () => {
  return (
    <section className="mx-auto mt-8 flex max-w-7xl flex-col gap-8 px-4 md:flex-row">
      {/* Categories */}
      <div className="lg:w-1/4">
        <CategoriesList />
      </div>

      {/* Hero Banner */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg lg:h-[380px] lg:w-3/4">
        <Image
          src="/Frame 560.png"
          alt="Hero Banner"
          fill
          className="object-center"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSec;