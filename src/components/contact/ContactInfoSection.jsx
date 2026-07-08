import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock3, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Workshop",
    value: "Autowerks European Inc.\nPorsche Division",
    description: "Visit our dedicated Porsche workshop.",
  },
  {
    icon: Phone,
    title: "Call or Text",
    value: "(555) 911-9119",
    description: "Speak directly with our Porsche specialists.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@gtrmotorsport.com",
    description: "We'll respond as soon as possible.",
  },
  {
    icon: Clock3,
    title: "Hours",
    value: "Mon – Fri\n8:00 AM – 6:00 PM",
    description: "Weekend appointments by request.",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="bg-[#050505] py-16 sm:py-20 lg:py-8">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">
        {/* Heading */}
        <motion.div
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
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-sm border border-[#1B1B1B] bg-[#080808] p-5 transition duration-500 hover:-translate-y-1.5 hover:border-[#C00000] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C00000]/10 transition group-hover:bg-[#C00000] sm:h-12 sm:w-12">
                    <Icon
                      size={20}
                      className="text-[#C00000] group-hover:text-white sm:size-[22px]"
                    />
                  </div>

                  <ArrowUpRight size={16} className="text-[#C00000]" />
                </div>

                <h3 className="mt-5 font-oswald text-[18px] uppercase text-white sm:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-2.5 whitespace-pre-line font-inter text-[14px] font-medium leading-6 text-[#ECECEC] sm:text-[15px]">
                  {item.value}
                </p>

                <p className="mt-2 font-inter text-[12.5px] leading-6 text-[#9A9A9A] sm:text-[13px]">
                  {item.description}
                </p>

                <div className="mt-5 h-[2px] w-10 bg-[#C00000] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
