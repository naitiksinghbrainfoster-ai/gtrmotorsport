import { Quote } from "lucide-react";
import Engine from "../../assets/img/about/engin.jpg";

export default function BibleVerseSection() {
  return (
    <section
      className="relative overflow-hidden py-10 lg:py-10"
      style={{
         backgroundImage: `url(${Engine})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.88) 0%, rgba(0,0,0,.55) 40%, rgba(0,0,0,.88) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">

        {/* Quote Icon */}

        <div className="flex justify-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C00000]/20 bg-[#C00000]/10 backdrop-blur-sm">

            <Quote
              size={22}
              strokeWidth={2}
              className="text-[#C00000]"
            />

          </div>

        </div>

        {/* Small Label */}

        <p className="mt-8 font-inter text-[16px] font-semi uppercase tracking-[0.45em] text-[#C00000]">
          OUR FOUNDATION
        </p>

        {/* Verse */}

        <h2 className="mt-10 font-oswald text-[30px] font-bold leading-[1.35] text-white md:text-[38px] lg:text-[38px]">
          "Whatever you do, work at it with all your heart, as working for the Lord."
        </h2>

        {/* Divider */}

        <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C00000]" />

        {/* Scripture */}

        <p className="mt-8 font-inter text-[20px] italic tracking-[0.25em] text-white">
Colossians 3:23        </p>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-[820px] font-inter text-[18px] leading-9 text-white">
          Our faith shapes how we work, how we serve, and how we treat the people who 
place their trust in us.
        </p>

        {/* Button */}

        <div className="mt-10">

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#C00000] px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#E00000]"
          >
            schedule appointment 
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}