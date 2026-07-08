import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const filters = [
  "All",
  "Workshop",
  "Engine",
  "Performance",
  "Track",
  "Customer",
];

const gallery = [
  {
    id: 1,
    category: "Workshop",
    title: "Workshop Interior",
    height: "h-[520px]",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Engine",
    title: "Engine Assembly",
    height: "h-[340px]",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Performance",
    title: "GT3 Performance",
    height: "h-[430px]",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Track",
    title: "Track Day",
    height: "h-[300px]",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Customer",
    title: "Customer Delivery",
    height: "h-[470px]",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Workshop",
    title: "Precision Work",
    height: "h-[360px]",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Engine",
    title: "Performance Engine",
    height: "h-[520px]",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Track",
    title: "Race Weekend",
    height: "h-[360px]",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80&auto=format&fit=crop",
  },
];

export default function MasonryGallery() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? gallery
      : gallery.filter((item) => item.category === active);

  return (
    <section className="bg-[#050505] py-14 lg:py-12">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Porsche Portfolio
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[52px]">
            Every Porsche
            <br />
            Has A Story.
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Browse our latest workshop projects, engine builds,
            customer cars and motorsport moments.
          </p>

        </motion.div>

        {/* Filter Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-7 py-3 font-inter text-[13px] uppercase tracking-[0.18em] transition duration-300 ${
                active === filter
                  ? "border-[#C00000] bg-[#C00000] text-white"
                  : "border-[#2B2B2B] text-[#B8B8B8] hover:border-[#C00000]"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-16 columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4"
          >

            {filtered.map((item, index) => (

              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group mb-6 break-inside-avoid overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#080808]"
              >

                {/* Image */}

                <div className={`relative overflow-hidden ${item.height}`}>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition duration-500 group-hover:from-black group-hover:via-black/40" />

                  {/* Hover Content */}

                  <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 transition-all duration-500 group-hover:opacity-100">

                    <span className="font-inter text-[11px] uppercase tracking-[0.3em] text-[#C00000]">
                      {item.category}
                    </span>

                    <h3 className="mt-3 font-oswald text-[24px] font-medium uppercase text-white">
                      {item.title}
                    </h3>

                    <div className="mt-6 flex items-center justify-between">

                      <div className="h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-24" />

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition duration-300 group-hover:border-[#C00000] group-hover:bg-[#C00000]">

                        <ArrowUpRight
                          size={18}
                          className="text-white"
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </AnimatePresence>

                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#080808]"
        >
          {/* Background Glow */}

          <div className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#C00000]/20 blur-[120px]" />

          <div className="relative z-10 grid gap-12 px-8 py-14 lg:grid-cols-[1fr_auto] lg:px-16">

            {/* Left */}

            <div>

              <div className="mb-4 flex items-center gap-4">

                <div className="h-px w-12 bg-[#C00000]" />

                <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                  Premium Porsche Gallery
                </span>

              </div>

              <h3 className="font-oswald text-[34px] font-semibold uppercase leading-tight text-white md:text-[46px]">
                Every Project
                <br />
                Tells A Story.
              </h3>

              <p className="mt-6 max-w-[650px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
                From routine maintenance to championship-winning race cars,
                every Porsche that enters our workshop receives the same
                commitment to craftsmanship, precision engineering and
                attention to detail.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col justify-center">

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#C00000] px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
              >
                Start Your Project

                <ArrowUpRight size={18} />

              </a>

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="border-t border-[#1B1B1B]">

            <div className="grid grid-cols-2 lg:grid-cols-4">

              {[
                {
                  value: "300+",
                  label: "Workshop Photos",
                },
                {
                  value: "120+",
                  label: "Engine Builds",
                },
                {
                  value: "75+",
                  label: "Track Events",
                },
                {
                  value: "500+",
                  label: "Customer Cars",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="border-r border-[#1B1B1B] p-10 text-center last:border-r-0"
                >

                  <h4 className="font-oswald text-[40px] text-[#C00000]">
                    {item.value}
                  </h4>

                  <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}