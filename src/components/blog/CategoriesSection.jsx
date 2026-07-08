import { motion } from "framer-motion";
import {
  Wrench,
  Settings,
  Gauge,
  Trophy,
  Cpu,
  HeartHandshake,
  ArrowRight,
  Newspaper,
} from "lucide-react";

const categories = [
  {
    icon: Wrench,
    title: "Maintenance",
    count: "18 Articles",
    desc: "Routine servicing, oil changes, brake maintenance and factory schedules.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Settings,
    title: "Repair",
    count: "14 Articles",
    desc: "Diagnostics, IMS bearings, PDK transmission and cooling system repairs.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Gauge,
    title: "Performance",
    count: "22 Articles",
    desc: "GT3 & GT4 RS upgrades, suspension tuning and performance modifications.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Trophy,
    title: "Motorsport",
    count: "15 Articles",
    desc: "Track preparation, Porsche Cup cars and race engineering insights.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Cpu,
    title: "Engine Builds",
    count: "12 Articles",
    desc: "Behind-the-scenes Porsche engine rebuilding and precision assembly.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: HeartHandshake,
    title: "Faith & Business",
    count: "6 Articles",
    desc: "Integrity, stewardship and excellence through faith in every project.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80&auto=format&fit=crop",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Explore Topics
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[54px]">
            Porsche Knowledge Categories
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Browse expert insights covering every aspect of Porsche
            ownership, maintenance, repair, performance and motorsport.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-sm border border-[#1B1B1B]"
              >

                {/* Background */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/80 transition duration-500 group-hover:bg-black/70" />

                <div className="relative z-10 p-10">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C00000]/15 transition group-hover:bg-[#C00000]">

                      <Icon
                        size={30}
                        className="text-[#C00000] group-hover:text-white"
                      />

                    </div>

                    <Newspaper
                      size={22}
                      className="text-white/30"
                    />

                  </div>

                  <p className="mt-8 font-inter text-[12px] uppercase tracking-[0.25em] text-[#C00000]">
                    {item.count}
                  </p>

                  <h3 className="mt-4 font-oswald text-[32px] uppercase text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 font-inter text-[16px] leading-8 text-[#B5B5B5]">
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-3 font-oswald text-[14px] uppercase tracking-[0.15em] text-[#C00000]"
                  >
                    Explore Articles

                    <ArrowRight size={17} />

                  </a>

                  <div className="mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-full" />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}