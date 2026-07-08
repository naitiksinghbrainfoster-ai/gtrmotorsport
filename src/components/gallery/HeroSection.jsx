import { Wrench, Gauge, Flag, Trophy, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}

       <div className="absolute inset-0 bg-black/30" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(0,0,0,.96)0%,rgba(0,0,0,.82)40%,rgba(0,0,0,.45)100%)",
        }}
      />

      {/* Red Glow */}

      <div className="absolute -left-40 top-32 h-[520px] w-[520px] rounded-full bg-[#C00000]/20 blur-[180px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1550px] px-5 lg:px-8">

        <div className="mt-10 max-w-[780px]">

          {/* Label */}

          <div className=" mb-5 flex items-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Porsche Gallery
            </span>

          </div>

          {/* Heading */}

          <h1 className="font-oswald text-[44px] font-bold uppercase leading-[0.95] text-white sm:text-[42px] lg:text-[42px]">

            Porsche Passion


            Performance

          </h1>

          {/* Description */}

          <p className="mt-5 max-w-[700px] font-inter text-[16px] leading-7 text-[#B8B8B8] lg:text-[18px]">
            Discover our collection of Porsche maintenance, engine
            rebuilding, GT3 & GT4 RS projects, classic 911 restorations,
            performance upgrades, Cup cars and motorsport preparation.
            Every image represents our commitment to precision,
            craftsmanship and engineering excellence.
          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap gap-5">

            <a
              href="#gallery"
              className="inline-flex items-center gap-3 bg-[#C00000] px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
            >
              Explore Porsche Builds
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 px-5 py-5 font-oswald text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5"
            >
              Schedule Porsche Service

              <ArrowRight size={18} />

            </a>

          </div>

          {/* Stats */}

          <div className="mt-20 grid max-w-[760px] grid-cols-2 gap-8 md:grid-cols-4">

            <div>

              <Wrench
                size={28}
                className="mb-4 text-[#C00000]"
              />

              <h3 className="font-oswald text-[32px] text-white">
                30+
              </h3>

              <p className="font-inter text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Years Experience
              </p>

            </div>

            <div>

              <Gauge
                size={28}
                className="mb-4 text-[#C00000]"
              />

              <h3 className="font-oswald text-[32px] text-white">
                100+
              </h3>

              <p className="font-inter text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Engine Builds
              </p>

            </div>

            <div>

              <Flag
                size={28}
                className="mb-4 text-[#C00000]"
              />

              <h3 className="font-oswald text-[32px] text-white">
                GT
              </h3>

              <p className="font-inter text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Motorsport
              </p>

            </div>

            <div>

              <Trophy
                size={28}
                className="mb-4 text-[#C00000]"
              />

              <h3 className="font-oswald text-[32px] text-white">
                100%
              </h3>

              <p className="font-inter text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Porsche Focus
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}