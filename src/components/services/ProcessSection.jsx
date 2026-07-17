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
    title: "Schedule Appointment",
    description:
      "Tell us about your Porsche and your concerns so we can prepare for your visit.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Vehicle Inspection",
    description:
      "We perform a comprehensive inspection using Porsche-specific diagnostic equipment to accurately assess your vehicle.",
    icon: Search,
  },
  {
    number: "03",
    title: "Service Plan",
    description:
      "We review our findings, explain your options, and provide transparent recommendations before any work begins",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Specialized Service",
    description:
      "Approved maintenance, repairs, performance upgrades, or engine work are completed with precision and attention to detail",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Final Inspection",
    description:
      "Every vehicle is thoroughly inspected, tested, and verified to ensure our standards are met before delivery",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Vehicle Delivery",
    description:
      "Your Porsche is returned ready to drive with confidence that the work has been completed to the highest standard.",
    icon: Car,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-14 lg:py-12">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C00000]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <div className="mb-24 text-center">

          <div className="mb-6 flex items-center justify-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[22px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Our Service Process 
            </span>

            <div className="h-px w-14 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[30px] font-bold uppercase leading-none text-white md:text-[30px]">
            From Inspection
            
            To Perfection
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-9 text-white">
            Every Porsche receives the same careful attention, from the initial inspection to 
final delivery. Our process is designed to provide clear communication, accurate 
diagnostics, and specialized Porsche service every step of the way.
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

                  <p className="mt-6 font-oswald text-[64px] leading-none text-[#3A3A3A] transition duration-500 group-hover:text-[#5A0000]">
                    {item.number}
                  </p>

                  {/* Title */}

                  <h3 className="mt-2 font-oswald text-[22px] uppercase text-white">
                    {item.title}
                  </h3>

                  {/* Text */}

                  <p className="mt-4 font-inter text-[16px] leading-8 text-white">
                    {item.description}
                  </p>

                  {/* Red Line */}

                  <div className="mx-auto mt-6 h-[2px] w-12 bg-[#C00000] opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}