import { ArrowUpRight } from "lucide-react";
import ShopGallery from "../../assets/img/gallery/ShopGallery.jpeg";
import Enginebuilds from "../../assets/img/gallery/Enginebuilds.jpeg";
import Performancebuilds from "../../assets/img/gallery/Performancebuilds.jpeg";
import Trackevents from "../../assets/img/gallery/Trackevents.jpeg";
import Customercars from "../../assets/img/gallery/Customercars.jpeg";
import Before from "../../assets/img/gallery/Before.jpeg";
import Motorsport1 from "../../assets/img/gallery/Motorsport1.jpeg";


const categories = [
  {
    title: "Shop Gallery",
    count: "48 Photos",
    image:
      ShopGallery,
  },
  {
    title: "Engine Builds",
    count: "36 Photos",
    image:
      Enginebuilds,
  },
  {
    title: "Performance Builds",
    count: "52 Photos",
    image:
      Performancebuilds,
  },
  {
    title: "Track Events",
    count: "24 Photos",
    image:
      Trackevents,
  },
  {
    title: "Customer Cars",
    count: "65 Photos",
    image:
     Customercars,
  },
  {
    title: "Before & After",
    count: "18 Projects",
    image:
      Before,
  },
  {
    title: "Motorsport",
    count: "31 Photos",
    image:
     Motorsport1,
  },
];

export default function GalleryCategories() {
  return (
    <section
      id="gallery"
      className="bg-black py-14 lg:py-12"
    >
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Browse Collections
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[36px] font-semibold uppercase text-white md:text-[52px]">
            Explore Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Browse our workshop, engine builds, customer projects and
            motorsport highlights.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((item, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#080808]
              ${
                index === 0
                  ? "xl:col-span-2 xl:row-span-2"
                  : ""
              }`}
            >

              {/* Image */}

              <div
                className={`overflow-hidden ${
                  index === 0
                    ? "h-[620px]"
                    : "h-[300px]"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <p className="font-inter text-[12px] uppercase tracking-[0.25em] text-[#D4D4D4]">
                  {item.count}
                </p>

                <h3 className="mt-3 font-oswald text-[28px] font-medium uppercase text-white lg:text-[32px]">
                  {item.title}
                </h3>

                <div className="mt-6 flex items-center justify-between">

                  <div className="h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-24" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition duration-300 group-hover:border-[#C00000] group-hover:bg-[#C00000]">

                    <ArrowUpRight
                      size={18}
                      className="text-white"
                    />

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}