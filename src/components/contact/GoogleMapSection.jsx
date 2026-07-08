import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock3, Navigation } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "Autowerks European Inc., Porsche Division",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 911-9119",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gtrmotorsport.com",
  },
  {
    icon: Clock3,
    label: "Hours",
    value: "Mon – Fri, 8:00 AM – 6:00 PM",
  },
];

export default function GoogleMapSection() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#C00000]" />
            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Visit Our Workshop
            </span>
            <div className="h-px w-12 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[32px] uppercase text-white sm:text-[40px] md:text-[56px]">
            Find GTR Motorsport
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] font-inter text-[15px] leading-7 text-[#A8A8A8] sm:text-[17px] sm:leading-8">
            Visit our Porsche workshop for maintenance, diagnostics,
            performance upgrades, engine building and motorsport services.
          </p>
        </motion.div>

        {/* Map + Card */}
        <div className="relative flex flex-col lg:block">
          <div className="overflow-hidden rounded-sm border border-[#1B1B1B]">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Toronto&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[380px] w-full sm:h-[480px] lg:h-[620px]"
              loading="lazy"
            />
          </div>

          {/* Floating Card — stacked below the map on mobile, overlaid on desktop
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="static mt-6 w-full rounded-sm border border-[#C00000]/20 bg-[#080808] p-6 shadow-2xl sm:p-7 lg:absolute lg:left-8 lg:top-8 lg:mt-0 lg:w-[360px] lg:bg-[#080808]/95 lg:backdrop-blur-xl"
          >
            <span className="font-inter text-[11px] uppercase tracking-[0.35em] text-[#C00000]">
              GTR Motorsport
            </span>

            <h3 className="mt-3 font-oswald text-[24px] uppercase leading-tight text-white sm:text-[26px]">
              Porsche Performance Workshop
            </h3>

            <div className="mt-6 border-t border-[#1B1B1B]">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 border-b border-[#1B1B1B] py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C00000]/10">
                      <Icon size={16} className="text-[#C00000]" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-inter text-[10.5px] uppercase tracking-[0.2em] text-[#8F8F8F]">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate font-inter text-[14px] text-[#ECECEC]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#C00000] px-6 py-3.5 font-oswald text-[13px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
