import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-32 lg:py-40"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2200&q=80&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(0,0,0,.96)0%,rgba(0,0,0,.70)45%,rgba(0,0,0,.96)100%)",
        }}
      />

      {/* Red Glow */}

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C00000]/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 text-center lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* Label */}

          <div className="mb-6 flex items-center justify-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Ready To Begin?
            </span>

            <div className="h-px w-14 bg-[#C00000]" />

          </div>

          {/* Heading */}

          <h2 className="mx-auto max-w-[1100px] font-oswald text-[34px] font-semibold uppercase leading-[1.02] text-white sm:text-[34px] lg:text-[40px] xl:text-[40px]">
            Your Porsche
            <br />
            Deserves
            <span className="text-[#C00000]"> Excellence.</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-10 max-w-[820px] font-inter text-[18px] leading-9 text-[#C8C8C8] lg:text-[20px]">
            Whether you're looking for routine maintenance, a complete
            engine rebuild, performance upgrades or race preparation,
            GTR Motorsport is committed to delivering uncompromising
            craftsmanship and engineering excellence.
          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C00000] px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#980000]"
            >
              Schedule Service

              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+15559119119"
              className="inline-flex items-center gap-3 border border-white/20 px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5"
            >
              <Phone size={18} />

              Call Now
            </a>

          </div>

        </motion.div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-[1200px]"
        >

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

            {[
              {
                value: "30+",
                label: "Years Experience",
              },
              {
                value: "100%",
                label: "Porsche Focus",
              },
              {
                value: "500+",
                label: "Projects Completed",
              },
              {
                value: "PIWIS",
                label: "Factory Diagnostics",
              },
            ].map((item) => (

              <div
                key={item.label}
                className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:border-[#C00000]"
              >

                <h3 className="font-oswald text-[42px] text-[#C00000]">
                  {item.value}
                </h3>

                <p className="mt-3 font-inter text-[13px] uppercase tracking-[0.18em] text-[#B5B5B5]">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}