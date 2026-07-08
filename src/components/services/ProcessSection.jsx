import {
  CalendarCheck,
  Search,
  ClipboardCheck,
  Wrench,
  Gauge,
  Car,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Book Service",
    description:
      "Choose a convenient appointment and tell us about your Porsche.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Inspection",
    description:
      "A comprehensive inspection and factory-level diagnostic evaluation.",
    icon: Search,
  },
  {
    number: "03",
    title: "Detailed Report",
    description:
      "We explain our findings and recommend only the work your Porsche truly needs.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Precision Repair",
    description:
      "Maintenance, performance upgrades or engine work completed with meticulous craftsmanship.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Quality Testing",
    description:
      "Every vehicle is inspected, tested and verified before delivery.",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Ready To Drive",
    description:
      "Your Porsche leaves our workshop performing at its absolute best.",
    icon: Car,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C00000]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <div className="mb-24 text-center">

          <div className="mb-6 flex items-center justify-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              OUR PROCESS
            </span>

            <div className="h-px w-14 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[34px] font-bold uppercase leading-none text-white md:text-[34px]">
            From Inspection
            
            To Perfection
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-9 text-[#A8A8A8]">
            Every Porsche follows the same proven process designed to
            deliver transparency, precision and complete confidence.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-[2px] bg-[#252525] xl:block" />

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-6">

            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative text-center"
                >

                  {/* Circle */}

                  <div className="relative z-20 mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-[#2B2B2B] bg-[#0A0A0A] transition duration-500 group-hover:border-[#C00000] group-hover:bg-[#C00000]">

                    <Icon
                      size={32}
                      className="text-[#C00000] transition duration-500 group-hover:text-white"
                    />

                  </div>

                  {/* Step */}

                  <p className="mt-8 font-oswald text-[64px] leading-none text-[#1B1B1B] transition duration-500 group-hover:text-[#3A0000]">
                    {item.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-3 font-oswald text-[22px] uppercase text-white">
                    {item.title}
                  </h3>

                  {/* Text */}

                  <p className="mt-5 font-inter text-[16px] leading-8 text-[#9F9F9F]">
                    {item.description}
                  </p>

                  {/* Red Line */}

                  <div className="mx-auto mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-24" />

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}