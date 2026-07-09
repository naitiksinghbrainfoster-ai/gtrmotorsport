import {
  Wrench,
  Gauge,
  Flag,
  Trophy,
  ArrowRight,
} from "lucide-react";
import Galleryhero from "../../assets/img/gallery/galleryhero.jpeg";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[75vh] sm:min-h-[82vh] lg:min-h-screen overflow-hidden"
    style={{
  backgroundImage: `url(${Galleryhero})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Left Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.97) 0%, rgba(0,0,0,.88) 30%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.15) 100%)",
        }}
      />

      {/* Red Glow */}
      <div className="absolute -left-40 top-32 h-[520px] w-[520px] rounded-full bg-[#C00000]/20 blur-[180px]" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1550px]
          items-end
          px-5
          sm:px-8
          lg:px-10
          pt-28
          sm:pt-36
          lg:pt-44
          pb-12
          sm:pb-16
          lg:pb-24
        "
      >
        <div className="max-w-[780px]">
          {/* Label */}
          <div className="mb-5 flex items-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-14 bg-[#C00000]" />

            <span className="font-inter text-[10px] sm:text-[12px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C00000]">
              Porsche Gallery
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-oswald
              font-bold
              uppercase
              leading-[1.05]
              text-white

              text-[30px]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[56px]
              xl:text-[62px]
            "
          >
            Porsche Passion
            <br />
            Performance
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-full
              sm:max-w-[620px]
              lg:max-w-[700px]
              font-inter
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]
              leading-[1.8]
              text-[#B8B8B8]
            "
          >
            Discover our collection of Porsche maintenance, engine
            rebuilding, GT3 & GT4 RS projects, classic 911 restorations,
            performance upgrades, Cup cars and motorsport preparation.
            Every image represents our commitment to precision,
            craftsmanship and engineering excellence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#gallery"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#C00000]
                px-8
                py-4
                font-oswald
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-300
                hover:bg-[#980000]
                hover:scale-[1.03]
              "
            >
              Explore Porsche Builds
            </a>

            <a
              href="/contact"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-3
                border
                border-white/20
                px-8
                py-4
                font-oswald
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-300
                hover:border-[#C00000]
                hover:bg-[#C00000]
                hover:scale-[1.03]
              "
            >
              Schedule Porsche Service
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 max-w-[760px]">
            <div>
              <Wrench size={28} className="mb-4 text-[#C00000]" />

              <h3 className="font-oswald text-[28px] sm:text-[32px] text-white">
                30+
              </h3>

              <p className="font-inter text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Years Experience
              </p>
            </div>

            <div>
              <Gauge size={28} className="mb-4 text-[#C00000]" />

              <h3 className="font-oswald text-[28px] sm:text-[32px] text-white">
                100+
              </h3>

              <p className="font-inter text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Engine Builds
              </p>
            </div>

            <div>
              <Flag size={28} className="mb-4 text-[#C00000]" />

              <h3 className="font-oswald text-[28px] sm:text-[32px] text-white">
                GT
              </h3>

              <p className="font-inter text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
                Motorsport
              </p>
            </div>

            <div>
              <Trophy size={28} className="mb-4 text-[#C00000]" />

              <h3 className="font-oswald text-[28px] sm:text-[32px] text-white">
                100%
              </h3>

              <p className="font-inter text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-[#8F8F8F]">
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