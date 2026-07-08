import {
  Wrench,
  Gauge,
  SlidersHorizontal,
  Cog,
  Flag,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "MAINTENANCE",
    description: "Factory scheduled service, oil, brakes & fluids.",
  },
  {
    icon: Gauge,
    title: "DIAGNOSTICS",
    description: "PIWIS factory-level engine & electrical diagnostics.",
  },
  {
    icon: SlidersHorizontal,
    title: "PERFORMANCE",
    description: "Suspension, exhaust, brake & ECU upgrades.",
  },
  {
    icon: Cog,
    title: "ENGINE & Transmission",
    description: "Rebuilds, IMS inspections, performance builds.",
  },
  {
    icon: Flag,
    title: "TRACK PREP",
    description: "Alignments, corner balancing, race support.",
  },
  {
    icon: ShieldCheck,
    title: "RESTORATION",
    description: "Bringing classic Porsches back to factory spec.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black py-28 lg:py-16">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-10 pt-0">
        {/* Heading */}
        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <div className="h-px w-12 bg-[#D50000]" />

              <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#D50000]">
                What We Do
              </span>
            </div>

            <h2 className="font-oswald text-[32px] font-bold uppercase leading-none tracking-[1px] text-white md:text-[32px] xl:text-[32px]">
              SERVICE. PERFORMANCE. MOTORSPORT.
            </h2>
          </div>

          <button className="group inline-flex items-center gap-3 font-inter text-[14px] font-semibold uppercase tracking-[0.12em] text-white transition hover:text-[#D50000]">
            ALL SERVICES
            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 border-t border-[#222] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="border-b border-[#222] p-10 md:p-12 xl:border-r xl:border-[#222] xl:[&:nth-child(3n)]:border-r-0"
              >
                <div className="mb-10 flex h-16 w-16 items-center justify-center border border-[#222]">
                  <Icon size={26} className="text-[#D50000]" />
                </div>

                <h3 className="font-oswald text-[20px] font-bold uppercase tracking-[1px] text-white">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-[340px] font-inter text-[20px] leading-8 text-[#9C9C9C]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}