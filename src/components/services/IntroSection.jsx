import { CheckCircle2 } from "lucide-react";

const features = [
  "Factory Scheduled Maintenance",
  "Porsche PIWIS Diagnostics",
  "Performance & Motorsport Specialists",
  "Track & Race Preparation",
];

export default function IntroSection() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1550px] items-center gap-20 px-5 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div>

          {/* Label */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-oswald text-[42px] font-bold uppercase leading-[1.08] text-white md:text-[58px] xl:text-[72px]">
            Everything Your
            <br />
            Porsche Needs.
          </h2>

          {/* Description */}
          <p className="mt-10 max-w-[640px] font-inter text-[18px] leading-9 text-[#A8A8A8]">
            Whether it's routine maintenance, advanced diagnostics,
            complete engine rebuilding, or race-day preparation,
            GTR Motorsport provides dealership-level precision with
            motorsport experience built over more than three decades.
          </p>

        </div>

        {/* Right */}
        <div>

          <div className="rounded-sm border border-white/10 bg-[#0A0A0A] p-10 lg:p-14">

            <h3 className="font-oswald text-[34px] font-bold uppercase text-white">
              Why Drivers Choose GTR
            </h3>

            <p className="mt-6 font-inter text-[17px] leading-8 text-[#A8A8A8]">
              We don't simply repair Porsche vehicles—we preserve,
              improve and prepare them for the street, the canyon,
              and the race circuit with uncompromising attention to detail.
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
            <div className="mt-12 border-t border-white/10 pt-8">

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

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}