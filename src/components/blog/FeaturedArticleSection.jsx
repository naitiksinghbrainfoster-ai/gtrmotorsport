import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

export default function FeaturedArticleSection() {
  return (
    <section className="overflow-hidden bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Featured Story
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[54px]">
            Latest From
            <br />
            GTR Motorsport
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Technical insights, Porsche maintenance knowledge and
            behind-the-scenes stories from our workshop.
          </p>
        </motion.div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#080808]"
        >

          <div className="grid items-center lg:grid-cols-[1.2fr_.8fr]">

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=80&auto=format&fit=crop"
                alt="Porsche GT3 RS"
                className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            {/* Content */}

            <div className="p-8 md:p-12 lg:p-16">

              <span className="inline-block rounded-full border border-[#C00000]/40 bg-[#C00000]/10 px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C00000]">
                Engine Building
              </span>

              {/* Meta */}

              <div className="mt-8 flex flex-wrap items-center gap-6">

                <div className="flex items-center gap-2 font-inter text-[13px] text-[#8D8D8D]">
                  <CalendarDays size={16} />
                  July 2026
                </div>

                <div className="flex items-center gap-2 font-inter text-[13px] text-[#8D8D8D]">
                  <Clock3 size={16} />
                  8 Min Read
                </div>

              </div>

              {/* Title */}

              <h3 className="mt-8 font-oswald text-[34px] font-semibold uppercase leading-[1.15] text-white md:text-[44px]">
                Behind The Scenes Of A Porsche GT3 Engine Rebuild
              </h3>

              {/* Description */}

              <p className="mt-8 font-inter text-[17px] leading-8 text-[#A8A8A8]">
                Take a closer look inside our workshop as we rebuild a
                Porsche GT3 engine from the ground up. Discover the
                precision, craftsmanship and engineering standards that
                define every GTR Motorsport project.
              </p>

              {/* Features */}

              <div className="mt-10 space-y-4">

                {[
                  "Complete engine teardown",
                  "Precision measurements & inspection",
                  "OEM & performance components",
                  "Final assembly & testing",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="h-2 w-2 rounded-full bg-[#C00000]" />

                    <span className="font-inter text-[15px] text-[#CFCFCF]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* CTA */}

              <a
                href="#"
                className="mt-12 inline-flex items-center gap-3 bg-[#C00000] px-8 py-4 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
              >
                Read Full Article

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}