import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 lg:py-40">
      {/* Center Gradient */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(192,0,0,0.16) 0%, rgba(192,0,0,0.05) 45%, rgba(0,0,0,0) 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">

          {/* Left: Text Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-left"
          >

            {/* Label */}

            <div className="mb-6 flex items-center gap-4">

              <div className="h-px w-14 bg-[#C00000]" />

              <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                Ready To Begin?
              </span>

            </div>

            {/* Heading */}

            <h2 className="max-w-[600px] font-oswald text-[34px] font-semibold uppercase leading-[1.02] text-white sm:text-[34px] lg:text-[40px] xl:text-[40px]">
              Your Porsche
              <br />
              Deserves
              <span className="text-[#C00000]"> Excellence.</span>
            </h2>

            {/* Description */}

            <p className="mt-10 max-w-[560px] font-inter text-[18px] leading-9 text-white lg:text-[20px]">
              Whether you're looking for routine maintenance, a complete
              engine rebuild, performance upgrades or race preparation,
              GTR Motorsport is committed to delivering uncompromising
              craftsmanship and engineering excellence.
            </p>

            {/* Buttons */}

            <div className="mt-14 flex flex-wrap gap-6">

              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#C00000] px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#980000]"
              >
                Schedule Service

                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+19253366470"
                className="inline-flex items-center gap-3 border border-white/20 px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5"
              >
                <Phone size={18} />

                Call Now
              </a>

            </div>

          </motion.div>

          {/* Right: Photo */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative aspect-[4/3] w-full overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80&auto=format&fit=crop"
                alt="Porsche in the shop"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#C00000]/40" />

          </motion.div>

        </div>

      </div>
    </section>
  );
}
