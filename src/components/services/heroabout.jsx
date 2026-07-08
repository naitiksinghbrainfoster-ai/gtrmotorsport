import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[65vh] sm:min-h-[72vh] lg:min-h-[78vh] items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.76) 42%, rgba(0,0,0,.45) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] items-center px-6 py-20 sm:py-24 lg:px-8 lg:py-28">

        <div className="max-w-[680px]">

          {/* Label */}

          <div className="mb-5 flex items-center gap-4">

            <div className="h-[2px] w-12 bg-[#C00000]" />

            <span className="font-inter text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Porsche Specialists
            </span>

          </div>

          {/* Heading */}

          <h1 className="font-oswald font-bold uppercase leading-[1.05] tracking-[0.01em] text-white text-[40px] sm:text-[52px] md:text-[42px] lg:text-[45px] xl:text-[50px]">

            Service

            Performance

            <br />

            Motorsport

          </h1>

          {/* Description */}

          <p className="mt-6 max-w-[600px] font-inter text-[15px] leading-7 text-[#B5B5B5] sm:text-[16px] lg:text-[17px] lg:leading-8">
            From factory maintenance to championship-level engine
            building, GTR Motorsport delivers dealership precision,
            race-proven experience, and craftsmanship built around
            Porsche excellence.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C00000] px-7 py-3.5 font-oswald text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#9D0000]"
            >
              Schedule Service
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 font-oswald text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5"
            >
              Explore Services
              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-10">

            <div>

              <h3 className="font-oswald text-[28px] sm:text-[34px] text-[#C00000]">
                30+
              </h3>

              <p className="mt-1 font-inter text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                Years Experience
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[28px] sm:text-[34px] text-[#C00000]">
                100%
              </h3>

              <p className="mt-1 font-inter text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                Porsche Focused
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[28px] sm:text-[34px] text-[#C00000]">
                PIWIS
              </h3>

              <p className="mt-1 font-inter text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                Factory Diagnostics
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}