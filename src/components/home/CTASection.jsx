import { Phone, ArrowUpRight } from "lucide-react";
import ctaBg from "../../assets/img/home/shop-Du0aRixe.jpg";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-[#1B1B1B] ">
      {/* Background */}
      <img
        src={ctaBg}
        alt="GTR Workshop"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1550px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="max-w-[900px]">
          {/* Heading */}
          <h2 className="font-oswald text-[38px] font-bold uppercase leading-[1.2] tracking-[0.5px] text-white md:text-[52px] xl:text-[42px]">
            HAVE QUESTIONS ABOUT
            <br />
            YOUR <span className="text-[#D50000]">PORSCHE?</span>
          </h2>

          {/* Paragraph */}
         

          {/* Buttons */}
          <div className="mt-14 flex flex-col gap-5 sm:flex-row">
            {/* Phone Button */}
            <a
              href="tel:+15559119119"
              className="inline-flex h-[52px] items-center justify-center gap-4 bg-[#D50000] px-6 font-inter text-[14px] font-semibold text-white transition hover:bg-[#B30000]"
            >
              <Phone size={20} />
              (555) 911-9119
            </a>

            {/* Appointment */}
            <a
              href="/contact"
              className="group inline-flex h-[52px] items-center justify-center gap-4 border border-[#5A5A5A] bg-black/20 px-6 font-inter text-[14px] font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#D50000] hover:bg-[#D50000]"
            >
              Schedule Appointment

              <ArrowUpRight
                size={20}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}