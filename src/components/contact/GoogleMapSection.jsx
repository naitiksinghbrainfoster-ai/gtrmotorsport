import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GoogleMapSection() {
  return (
    <section className="bg-black py-10 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        <div className="relative overflow-hidden rounded-sm border border-[#1B1B1B]">

          <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.325363193839!2d-121.98053689999999!3d37.78241409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff3704f88d6f5%3A0xca8ce46ef8b3febc!2sGTR%20Motorsport!5e0!3m2!1sen!2sin!4v1784290472138!5m2!1sen!2sin"
  className="h-[380px] w-full sm:h-[480px] lg:h-[520px]"
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>

          {/* Light dark overlay across the whole map */}
          <div className="pointer-events-none absolute inset-0 bg-black/25" />

          {/* Left content with black shadow behind it */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="pointer-events-none absolute inset-0 flex items-center bg-gradient-to-r from-black via-black/75 to-transparent lg:w-[60%]"
          >

            <div className="pointer-events-auto px-6 py-8 sm:px-10 lg:px-14">

              <span className="font-inter text-[28px] font-semibold uppercase tracking-[0.3em] text-[#C00000]">
                Our Location
              </span>

              <h2 className="mt-3 font-oswald text-[24px] font-semibold uppercase leading-tight text-white sm:text-[24px] md:text-[24px]">
                Find GTR Motorsport
              </h2>

              <p className="mt-5 max-w-[380px] font-inter text-[15px] leading-7 text-white">
                Conveniently located in San Ramon, CA, serving Porsche
                owners throughout the Bay Area and beyond.
              </p>

              <a
                href="https://www.google.com/maps/place/GTR+Motorsport/@37.7824141,-121.9805369,17z/data=!3m1!4b1!4m6!3m5!1s0x808ff3704f88d6f5:0xca8ce46ef8b3febc!8m2!3d37.7824141!4d-121.9805369!16s%2Fg%2F11zc3jkh_1?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-white/20 px-6 py-4 font-oswald text-[13px] uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5"
              >
                Get Directions

                <ArrowRight size={16} />
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
