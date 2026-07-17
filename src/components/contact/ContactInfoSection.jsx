import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Workshop",
    value: "2157 San Ramon Valley Blvd\nSan Ramon, CA 94583",
    description: "",
    href: "https://www.google.com/maps/place/GTR+Motorsport/@37.7824183,-121.9831118,17z/data=!3m1!4b1!4m6!3m5!1s0x808ff3704f88d6f5:0xca8ce46ef8b3febc!8m2!3d37.7824141!4d-121.9805369!16s%2Fg%2F11zc3jkh_1?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (925) 336-6470",
    description: "Speak directly with our Porsche specialists.",
    href: "tel:+19253366470",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@gracetorace.com",
    description: "We'll respond as soon as possible.",
    href: "mailto:info@gracetorace.com",
  },
];
export default function ContactInfoSection() {
  return (
    <section className="bg-[#050505] py-16 sm:py-20 lg:py-0">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">
      
        {/* <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 sm:gap-4">
            <div className="h-px w-10 bg-[#C00000] sm:w-12" />
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C00000] sm:text-[12px] sm:tracking-[0.35em]">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-[#C00000] sm:w-12" />
          </div>

          <h2 className="font-oswald text-[28px] font-semibold uppercase text-white sm:text-[34px] md:text-[42px]">
            Let's Talk About
            <br />
            Your Porsche
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] font-inter text-[14px] leading-7 text-[#A8A8A8] sm:mt-5 sm:text-[15px] sm:leading-8">
            Whether it's routine maintenance, diagnostics, performance
            upgrades or motorsport preparation, our team is ready to help.
          </p>
        </motion.div> */}

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
  href={item.href}
  target={item.title === "Visit Our Workshop" ? "_blank" : undefined}
  rel={item.title === "Visit Our Workshop" ? "noopener noreferrer" : undefined}
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col rounded-sm border border-[#1B1B1B] bg-[#080808] p-5 transition duration-500 hover:-translate-y-1.5 hover:border-[#C00000] sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C00000]/10 transition group-hover:bg-[#C00000] sm:h-12 sm:w-12">
                  <Icon
                    size={20}
                    className="text-[#C00000] group-hover:text-white sm:size-[22px]"
                  />
                </div>

                <h3 className="mt-5 font-oswald text-[18px] uppercase text-white sm:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-2.5 whitespace-pre-line font-inter text-[18px] font-medium leading-6 text-[#ECECEC] sm:text-[18px]">
                  {item.value}
                </p>

                {item.description && (
                  <p className="mt-2 font-inter text-[28px] leading-6 text-white sm:text-[18px]">
                    {item.description}
                  </p>
                )}

                <div className="mt-auto pt-5">
                  <div className="h-[2px] w-10 bg-[#C00000] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        {/* <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 rounded-sm border border-[#C00000]/20 bg-[#080808] p-6 sm:mt-12 sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-[#C00000] sm:text-[12px] sm:tracking-[0.35em]">
                Porsche Specialists
              </p>

              <h3 className="mt-3 font-oswald text-[24px] uppercase leading-tight text-white sm:text-[28px] md:text-[34px]">
                Have Questions About
                <br />
                Your Porsche?
              </h3>

              <p className="mt-4 max-w-[620px] font-inter text-[14px] leading-7 text-[#B5B5B5] sm:text-[15px] sm:leading-8">
                From scheduled maintenance and diagnostics to complete engine
                builds and track preparation, we're here to help you get the
                very best from your Porsche.
              </p>
            </div>

            <a
              href="tel:+15559119119"
              className="inline-flex items-center justify-center bg-[#C00000] px-7 py-3.5 font-oswald text-[13px] uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#980000] sm:px-8 sm:py-4 sm:text-[14px]"
            >
              Call Today
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
