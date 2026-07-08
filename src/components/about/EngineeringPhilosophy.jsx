import Engine from "../../assets/img/about/engin.avif";

import {
  Cpu,
  Gauge,
  Wrench,
  Trophy,
  ArrowRight,
} from "lucide-react";

const philosophy = [
  {
    icon: Cpu,
    title: "Factory Diagnostics",
    text: "Using Porsche PIWIS factory diagnostic equipment and advanced testing procedures to identify problems accurately.",
  },
  {
    icon: Wrench,
    title: "Precision Engine Building",
    text: "Every engine is assembled with meticulous attention to detail, using proven engineering practices and premium components.",
  },
  {
    icon: Gauge,
    title: "Performance Development",
    text: "Suspension, braking, chassis setup and performance upgrades designed for both road and track applications.",
  },
  {
    icon: Trophy,
    title: "Motorsport Preparation",
    text: "Track inspections, race preparation, corner balancing and setup tailored to maximize confidence and performance.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section className="bg-[#050505] py-14 lg:py-14">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div className="relative overflow-hidden rounded-sm">

          <img
            src={Engine}
            alt="Engineering"
            className="h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 border border-white/10 bg-black/80 p-6 backdrop-blur-md">

            <p className="font-inter text-[11px] uppercase tracking-[0.35em] text-[#C00000]">
              Engineering Philosophy
            </p>

            <h3 className="mt-3 font-oswald text-[34px] uppercase leading-none text-white">
              Precision.
              <br />
              Passion.
              <br />
              Performance.
            </h3>

          </div>

        </div>

        {/* Right */}
        <div className="max-w-[680px]">

          <div className="mb-6 flex items-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Engineering Philosophy
            </span>

          </div>

          <h2 className="font-oswald text-[36px] md:text-[38px] font-bold uppercase leading-[1.1] text-white">
            Every Porsche Deserves Excellence.
          </h2>

          <p className="mt-5 font-inter text-[16px] leading-7 text-[#A5A5A5]">
            Every project at GTR Motorsport follows the same philosophy:
            diagnose accurately, engineer carefully, build meticulously and
            never compromise on quality. Our approach combines decades of
            European automotive experience with a passion for Porsche
            performance and motorsport.
          </p>

          <div className="mt-8 space-y-5">

            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex gap-4 rounded-sm border border-[#1A1A1A] bg-[#0A0A0A] p-4 transition-all duration-300 hover:border-[#C00000]"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C00000]/10 transition group-hover:bg-[#C00000]">

                    <Icon
                      size={20}
                      className="text-[#C00000] transition group-hover:text-white"
                    />

                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between">

                      <h3 className="font-oswald text-[18px] uppercase text-white">
                        {item.title}
                      </h3>

                      <ArrowRight
                        size={18}
                        className="text-[#C00000] transition duration-300 group-hover:translate-x-2"
                      />

                    </div>

                    <p className="mt-2 font-inter text-[15px] leading-7 text-[#A8A8A8]">
                      {item.text}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}