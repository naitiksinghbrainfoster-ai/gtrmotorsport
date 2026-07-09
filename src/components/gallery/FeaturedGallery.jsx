import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Images } from "lucide-react";
import Precision from "../../assets/img/gallery/Precision.jpeg";
import Precision1 from "../../assets/img/gallery/Precision1.jpeg";
import Precision2 from "../../assets/img/gallery/Precision2.jpeg";
import Precision3 from "../../assets/img/gallery/Precision3.jpeg";
import Precision4 from "../../assets/img/gallery/Precision4.jpeg";

const images = [
  Precision,
  Precision1,
  Precision2,
  Precision3,
  Precision4,
];

export default function FeaturedGallery() {
  return (
    <section className="overflow-hidden bg-[#050505] py-12 sm:py-14 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >

          <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3 sm:gap-4">

            <div className="h-px w-8 sm:w-12 bg-[#C00000]" />

            <span className="font-inter text-[10px] sm:text-[12px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C00000]">
              Featured Collection
            </span>

            <div className="h-px w-8 sm:w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[28px] sm:text-[38px] font-semibold uppercase leading-tight text-white md:text-[52px]">
            Behind Every Porsche
            <br />
            Is A Story.
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-[720px] font-inter text-[14px] sm:text-[17px] leading-7 sm:leading-8 text-[#A6A6A6]">
            Explore our favorite workshop moments, precision engine builds,
            motorsport preparation and customer Porsche projects.
          </p>

        </motion.div>

        {/* Layout */}

        <div className="grid gap-5 sm:gap-7 xl:grid-cols-[1.45fr_.8fr]">

          {/* Large Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-sm"
          >

            <img
              src={images[0]}
              alt=""
              className="h-[420px] sm:h-[480px] lg:h-[700px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Floating Glass Card */}

            <div className="absolute bottom-0 left-0 right-0 sm:bottom-10 sm:left-10 sm:right-auto max-w-full sm:max-w-[420px] border border-white/10 bg-black/40 p-4 sm:p-8 backdrop-blur-xl">

              <div className="mb-2 sm:mb-5 flex items-center gap-2 sm:gap-3">

                <Camera
                  size={14}
                  className="text-[#C00000] sm:w-[18px] sm:h-[18px]"
                />

                <span className="font-inter text-[9px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C00000]">
                  Featured Project
                </span>

              </div>

              <h3 className="font-oswald text-[18px] sm:text-[34px] uppercase leading-tight text-white">
                Precision. Passion. Porsche.
              </h3>

              <p className="mt-2 sm:mt-5 hidden sm:block font-inter text-[13px] sm:text-[16px] leading-6 sm:leading-8 text-[#D0D0D0]">
                Every vehicle that enters our workshop receives meticulous
                attention, uncompromising quality and engineering excellence.
              </p>

            </div>

          </motion.div>

          {/* Right Grid */}

          <div className="grid grid-cols-2 gap-5 sm:gap-7">

            {images.slice(1).map((image, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .12,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-sm"
              >

                <img
                  src={image}
                  alt=""
                  className="h-[150px] sm:h-[220px] lg:h-[335px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/45" />

                {/* Hover */}

                <div className="absolute inset-0 flex items-end justify-between p-3 sm:p-6 opacity-100 sm:opacity-0 transition duration-500 sm:group-hover:opacity-100">

                  <div>

                    <h4 className="font-oswald text-[14px] sm:text-[22px] uppercase text-white">
                      Porsche
                    </h4>

                    <p className="mt-1 sm:mt-2 font-inter text-[10px] sm:text-[13px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#CFCFCF]">
                      View Collection
                    </p>

                  </div>

                  <div className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#C00000]">

                    <ArrowUpRight
                      size={14}
                      className="text-white sm:w-[18px] sm:h-[18px]"
                    />

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 rounded-sm border border-[#1B1B1B] bg-[#080808]"
        >

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {[
              ["300+", "Workshop Photos"],
              ["100+", "Engine Builds"],
              ["50+", "Track Events"],
              ["500+", "Customer Cars"],
            ].map(([value, label], i) => (

              <div
                key={label}
                className={`border-[#1B1B1B] p-6 sm:p-10 text-center lg:border-r lg:last:border-r-0 ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b sm:border-b-0" : ""}`}
              >

                <Images
                  size={18}
                  className="mx-auto mb-3 sm:mb-5 text-[#C00000] sm:w-[22px] sm:h-[22px]"
                />

                <h3 className="font-oswald text-[26px] sm:text-[40px] text-white">
                  {value}
                </h3>

                <p className="mt-1 sm:mt-2 font-inter text-[11px] sm:text-[13px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#8E8E8E]">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}