import {
  ShieldCheck,
  Gauge,
  Wrench,
  Trophy,
  HeartHandshake,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "30+ Years Experience",
    description:
      "More than three decades specializing in European automobiles and Porsche engineering.",
  },
  {
    icon: Cpu,
    title: "Factory PIWIS Diagnostics",
    description:
      "Advanced factory-level Porsche diagnostic equipment for accurate fault detection.",
  },
  {
    icon: Gauge,
    title: "Porsche Specialists",
    description:
      "Our workshop focuses exclusively on Porsche service, performance and motorsport.",
  },
  {
    icon: Trophy,
    title: "Track Proven",
    description:
      "From track preparation to race support, every setup is engineered for performance.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity First",
    description:
      "Honest recommendations, transparent communication and craftsmanship you can trust.",
  },
  {
    icon: Wrench,
    title: "Performance Engineering",
    description:
      "Engine builds, suspension tuning and performance upgrades tailored to your Porsche.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-black py-14 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <div className="mb-6 flex items-center justify-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Why Choose GTR
            </span>

            <div className="h-px w-14 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[30px] font-bold uppercase text-white md:text-[32px]">
            Experience The
            GTR Difference
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-9 text-[#A8A8A8]">
            Every Porsche receives meticulous attention, honest advice and
            race-proven expertise backed by over three decades of European
            automotive experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-sm border border-[#1A1A1A] bg-[#080808] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C00000]"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C00000]/10 transition-all duration-500 group-hover:bg-[#C00000]">

                  <Icon
                    size={30}
                    className="text-[#C00000] transition-all duration-500 group-hover:text-white"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 font-oswald text-[30px] uppercase leading-tight text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-6 font-inter text-[17px] leading-8 text-[#A8A8A8]">
                  {item.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-sm border border-[#1A1A1A] bg-[#0A0A0A] px-10 py-14 lg:px-16">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div>

              <p className="font-inter text-[13px] uppercase tracking-[0.35em] text-[#C00000]">
                OUR COMMITMENT
              </p>

              <h3 className="mt-4 font-oswald text-[34px] font-bold uppercase text-white md:text-[48px]">
                Driven By Excellence.
                <br />
                Guided By Faith.
              </h3>

            </div>

            <a
              href="/contact"
              className="border border-[#C00000] px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#C00000]"
            >
              Schedule Service
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}