import { CheckCircle2 } from "lucide-react";

const features = [
  "Factory Scheduled Maintenance",
  "PIWIS Factory Diagnostics",
  "Performance & Engine Building",
  "Track Preparation & Race Support",
];

export default function IntroSection() {
  return (
    <section className="bg-[#050505] py-14 lg:py-12">
      <div className="mx-auto grid max-w-[1550px] items-center gap-20 px-5 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div>

          {/* Label */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[16px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-oswald text-[42px] font-bold uppercase leading-[1.08] text-white md:text-[58px] xl:text-[72px]">
            EXPERTISE FOR 
            <br />
            EVERY PORSCHE
          </h2>

          {/* Description */}
          <p className="mt-10 max-w-[640px] font-inter text-[18px] leading-9 text-white">
            Whether your Porsche needs routine maintenance, advanced diagnostics, suspension tuning, or a complete engine build, our team provides specialized service designed around one marque, and the people who love driving it.
          </p>

        </div>

        {/* Right */}
        <div>

          <div className="rounded-sm border border-white/10 bg-[#0A0A0A] p-10 lg:p-14">

            <h3 className="font-oswald text-[34px] font-bold uppercase text-white">
              WHY GTR Motorsport
            </h3>

            <p className="mt-6 font-inter text-[17px] leading-8 text-white">
              Every Porsche deserves an approach as refined as the engineering behind it. From factory maintenance and diagnostics to engine building and track preparation, our work is guided by careful inspection, transparent recommendations, and meticulous attention to detail.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#C00000]"
                  />

                  <span className="font-inter text-[17px] text-white">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* Bottom */}
            {/* <div className="mt-12 border-t border-white/10 pt-8">

              <div className="grid grid-cols-3 gap-8 text-center">

                <div>
                  <h4 className="font-oswald text-[36px] text-[#C00000]">
                    30+
                  </h4>

                  <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.15em] text-[#8A8A8A]">
                    Years
                  </p>
                </div>

                <div>
                  <h4 className="font-oswald text-[36px] text-[#C00000]">
                    100%
                  </h4>

                  <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.15em] text-[#8A8A8A]">
                    Porsche
                  </p>
                </div>

                <div>
                  <h4 className="font-oswald text-[36px] text-[#C00000]">
                    PIWIS
                  </h4>

                  <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.15em] text-[#8A8A8A]">
                    Factory Tools
                  </p>
                </div>

              </div>

            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}