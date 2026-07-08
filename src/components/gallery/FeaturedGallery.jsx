import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Images } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80&auto=format&fit=crop",
];

export default function FeaturedGallery() {
  return (
    <section className="overflow-hidden bg-[#050505] py-14 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Featured Collection
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[52px]">
            Behind Every Porsche
            <br />
            Is A Story.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] font-inter text-[17px] leading-8 text-[#A6A6A6]">
            Explore our favorite workshop moments, precision engine builds,
            motorsport preparation and customer Porsche projects.
          </p>

        </motion.div>

        {/* Layout */}

        <div className="grid gap-7 xl:grid-cols-[1.45fr_.8fr]">

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
              className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Floating Glass Card */}

            <div className="absolute bottom-10 left-10 max-w-[420px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl">

              <div className="mb-5 flex items-center gap-3">

                <Camera
                  size={18}
                  className="text-[#C00000]"
                />

                <span className="font-inter text-[12px] uppercase tracking-[0.3em] text-[#C00000]">
                  Featured Project
                </span>

              </div>

              <h3 className="font-oswald text-[34px] uppercase leading-tight text-white">
                Precision.
                <br />
                Passion.
                <br />
                Porsche.
              </h3>

              <p className="mt-5 font-inter text-[16px] leading-8 text-[#D0D0D0]">
                Every vehicle that enters our workshop receives meticulous
                attention, uncompromising quality and engineering excellence.
              </p>

            </div>

          </motion.div>

          {/* Right Grid */}

          <div className="grid grid-cols-2 gap-7">

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
                  className="h-[335px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/45" />

                {/* Hover */}

                <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div>

                    <h4 className="font-oswald text-[22px] uppercase text-white">
                      Porsche
                    </h4>

                    <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.2em] text-[#CFCFCF]">
                      View Collection
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C00000]">

                    <ArrowUpRight
                      size={18}
                      className="text-white"
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
          className="mt-16 rounded-sm border border-[#1B1B1B] bg-[#080808]"
        >

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {[
              ["300+", "Workshop Photos"],
              ["100+", "Engine Builds"],
              ["50+", "Track Events"],
              ["500+", "Customer Cars"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="border-[#1B1B1B] p-10 text-center odd:border-r lg:border-r last:border-r-0"
              >

                <Images
                  size={22}
                  className="mx-auto mb-5 text-[#C00000]"
                />

                <h3 className="font-oswald text-[40px] text-white">
                  {value}
                </h3>

                <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.18em] text-[#8E8E8E]">
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