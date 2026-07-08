import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Gauge,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export default function CustomerBuildSection() {
  return (
    <section className="overflow-hidden bg-black py-24 lg:py-32">
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
              Customer Spotlight
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[54px]">
            Featured Porsche Build
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Every Porsche has a story. Follow one of our recent customer
            projects from inspection and planning through to the finished
            performance build.
          </p>

        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#080808]"
        >

          <div className="grid lg:grid-cols-[1.1fr_.9fr]">

            {/* Image */}

            <div className="group overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1800&q=80&auto=format&fit=crop"
                alt="Porsche GT3 RS"
                className="h-full min-h-[620px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

              <span className="inline-block w-fit rounded-full border border-[#C00000]/40 bg-[#C00000]/10 px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C00000]">
                Customer Build
              </span>

              <h3 className="mt-8 font-oswald text-[36px] uppercase leading-tight text-white md:text-[48px]">
                992 Porsche
                <br />
                GT3 RS
                <br />
                Performance Package
              </h3>

              <p className="mt-8 font-inter text-[17px] leading-8 text-[#B5B5B5]">
                This customer wanted a track-focused Porsche while
                maintaining everyday reliability. Our team completed a
                comprehensive performance package with precision tuning,
                chassis setup and detailed inspection throughout the build.
              </p>

              {/* Highlights */}

              <div className="mt-10 grid gap-5">

                {[
                  "Comprehensive vehicle inspection",
                  "Performance suspension setup",
                  "Track-ready brake preparation",
                  "Final road & track testing",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-[#C00000]"
                    />

                    <span className="font-inter text-[16px] text-[#D0D0D0]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* Stats */}

              <div className="mt-12 grid grid-cols-3 gap-6">

                <div className="rounded-sm border border-[#1B1B1B] bg-[#0E0E0E] p-5 text-center">

                  <Wrench
                    size={24}
                    className="mx-auto text-[#C00000]"
                  />

                  <h4 className="mt-4 font-oswald text-[28px] text-white">
                    40+
                  </h4>

                  <p className="mt-1 font-inter text-[12px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                    Hours
                  </p>

                </div>

                <div className="rounded-sm border border-[#1B1B1B] bg-[#0E0E0E] p-5 text-center">

                  <Gauge
                    size={24}
                    className="mx-auto text-[#C00000]"
                  />

                  <h4 className="mt-4 font-oswald text-[28px] text-white">
                    GT
                  </h4>

                  <p className="mt-1 font-inter text-[12px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                    Performance
                  </p>

                </div>

                <div className="rounded-sm border border-[#1B1B1B] bg-[#0E0E0E] p-5 text-center">

                  <Trophy
                    size={24}
                    className="mx-auto text-[#C00000]"
                  />

                  <h4 className="mt-4 font-oswald text-[28px] text-white">
                    100%
                  </h4>

                  <p className="mt-1 font-inter text-[12px] uppercase tracking-[0.18em] text-[#8A8A8A]">
                    Porsche
                  </p>

                </div>

              </div>

              {/* CTA */}

              <a
                href="#"
                className="mt-12 inline-flex w-fit items-center gap-3 bg-[#C00000] px-8 py-4 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
              >
                Read Full Build Story

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}