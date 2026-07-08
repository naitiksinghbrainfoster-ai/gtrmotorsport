import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Cog,
  Gauge,
  ArrowRight,
} from "lucide-react";

const features = [
  "Complete engine teardown & inspection",
  "Precision measurements to factory tolerances",
  "OEM & performance component selection",
  "Professional assembly & quality control",
];

const stats = [
  {
    icon: Cpu,
    value: "30+",
    label: "Years Experience",
  },
  {
    icon: Cog,
    value: "500+",
    label: "Engine Projects",
  },
  {
    icon: Gauge,
    value: "100%",
    label: "Porsche Focus",
  },
];

export default function EngineBuildSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">

      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#C00000]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_.9fr]">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-sm border border-[#1B1B1B]"
          >

            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1800&q=80&auto=format&fit=crop"
              alt="Porsche Engine Build"
              className="h-[760px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-[420px] rounded-sm border border-white/10 bg-black/50 p-8 backdrop-blur-xl">

              <p className="font-inter text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
                Porsche Engine Build
              </p>

              <h3 className="mt-4 font-oswald text-[36px] uppercase text-white">
                Precision
                <br />
                Begins
                <br />
                Inside.
              </h3>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="mb-6 flex items-center gap-4">

              <div className="h-px w-12 bg-[#C00000]" />

              <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                Engine Building
              </span>

            </div>

            <h2 className="font-oswald text-[42px] font-semibold uppercase leading-[1.05] text-white md:text-[60px]">
              Behind Every
              <br />
              Great Porsche
              <br />
              Is Precision.
            </h2>

            <p className="mt-8 font-inter text-[17px] leading-9 text-[#B5B5B5]">
              Every Porsche engine is treated with the highest level of
              craftsmanship. From complete inspections and precision
              measurements to careful assembly and final testing, our
              approach is built around reliability, performance and
              attention to detail.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <CheckCircle2
                    size={20}
                    className="mt-1 text-[#C00000]"
                  />

                  <span className="font-inter text-[16px] leading-7 text-[#D0D0D0]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-5">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.label}
                    className="rounded-sm border border-[#1B1B1B] bg-[#080808] p-6 text-center transition duration-300 hover:border-[#C00000]"
                  >

                    <Icon
                      size={26}
                      className="mx-auto text-[#C00000]"
                    />

                    <h3 className="mt-4 font-oswald text-[34px] text-white">
                      {item.value}
                    </h3>

                    <p className="mt-2 font-inter text-[12px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                      {item.label}
                    </p>

                  </div>

                );

              })}

            </div>

            {/* CTA */}

            <a
              href="#"
              className="mt-12 inline-flex items-center gap-3 bg-[#C00000] px-8 py-4 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
            >
              Explore Engine Builds

              <ArrowRight size={18} />

            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}