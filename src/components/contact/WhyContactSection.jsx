import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Gauge, Trophy, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    text: "Honest recommendations and transparent communication on every Porsche service.",
  },
  {
    icon: Wrench,
    title: "30+ Years Experience",
    text: "Decades of experience servicing, repairing and restoring European vehicles with a Porsche focus.",
  },
  {
    icon: Gauge,
    title: "Factory-Level Diagnostics",
    text: "Advanced diagnostic equipment and precise testing for accurate results.",
  },
  {
    icon: Trophy,
    title: "Track & Performance",
    text: "From daily drivers to GT3 RS track cars, we prepare every Porsche with precision.",
  },
];

// Slowly rotating certification seal — the section's signature element.
function CertifiedSeal() {
  return (
    <div className="absolute -right-6 -top-6 h-28 w-28 sm:h-32 sm:w-32">
      <motion.svg
        viewBox="0 0 140 140"
        className="h-full w-full animate-[spin_22s_linear_infinite] motion-reduce:animate-none"
      >
        <path
          id="sealPath"
          d="M70,12 a58,58 0 1,1 -0.1,0"
          fill="none"
        />
        <text className="fill-white/70">
          <textPath
            href="#sealPath"
            startOffset="0%"
            className="font-inter text-[9.5px] uppercase tracking-[0.25em]"
          >
         
          </textPath>
        </text>
      </motion.svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C00000] bg-black/70 backdrop-blur-sm sm:h-14 sm:w-14">
          <ShieldCheck size={20} className="text-[#C00000]" />
        </div>
      </div>
    </div>
  );
}

export default function WhyContactSection() {
  return (
    <section className="bg-[#050505] py-10 lg:py-5">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — editorial image panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm border border-[#1B1B1B]">
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1800&q=80&auto=format&fit=crop"
                alt="Porsche Workshop"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* Slim editorial caption */}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/40 px-7 py-6 backdrop-blur-md sm:px-9 sm:py-7">
                <p className="font-inter text-[11px] uppercase tracking-[0.35em] text-[#C00000]">
                  GTR Motorsport
                </p>
                <h3 className="mt-2 font-oswald text-[24px] uppercase leading-tight text-white sm:text-[30px]">
                  Precision. Passion. Porsche.
                </h3>
              </div>
            </div>

            <CertifiedSeal />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-[#C00000]" />
              <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                Why Choose GTR
              </span>
            </div>

            <h2 className="font-oswald text-[36px] uppercase leading-[1.05] text-white sm:text-[46px] lg:text-[58px]">
              Trusted By
              Porsche
              <br />
              Enthusiasts
            </h2>

            <p className="mt-6 max-w-[520px] font-inter text-[15px] leading-7 text-[#B5B5B5] sm:text-[16px] sm:leading-8">
              Every Porsche deserves specialist care — craftsmanship,
              factory-level diagnostics and honest advice, trusted by
              enthusiasts and collectors alike.
            </p>

            {/* Credentials list — compact 2-column grid, replaces the boxed icon-card grid */}
            <div className="mt-9 grid gap-x-6 border-t border-[#1B1B1B] sm:grid-cols-2">
              {reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-4 border-b border-[#1B1B1B] py-5"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#232323] bg-[#0A0A0A] transition-all duration-500 group-hover:border-[#C00000] group-hover:bg-[#C00000]"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      <Icon
                        size={17}
                        className="text-[#C00000] transition-colors duration-500 group-hover:text-white"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-oswald text-[16px] uppercase tracking-wide text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 font-inter text-[13px] leading-6 text-[#9A9A9A] transition-colors duration-500 group-hover:text-[#B5B5B5]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA — slim integrated bar instead of a heavy boxed card */}
            <div className="relative mt-8 flex flex-col gap-5 border-l-2 border-[#C00000] pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="font-oswald text-[19px] uppercase leading-tight text-white sm:text-[22px]">
                  Experience The GTR Difference.
                </p>
                <p className="mt-2 max-w-[380px] font-inter text-[13px] leading-6 text-[#9E9E9E] sm:text-[14px]">
                  Routine maintenance to complete engine builds — every step
                  covered.
                </p>
              </div>

              <a
                href="#appointment"
                className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#C00000] px-7 py-3.5 font-oswald text-[13px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
              >
                Book Now
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
