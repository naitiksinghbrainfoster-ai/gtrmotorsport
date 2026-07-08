import {
  CheckCircle2,
  ArrowRight,
  Gauge,
  Wrench,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const features = [
  "Complete Engine Rebuilds",
  "Performance Engine Builds",
  "IMS Bearing Inspections",
  "Cylinder Head Services",
  "Precision Assembly",
  "Track & Motorsport Ready",
];

const highlights = [
  {
    icon: Gauge,
    title: "Performance",
  },
  {
    icon: Cpu,
    title: "Factory Precision",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
  },
];

export default function FeaturedEngineBuilding() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1550px] items-center gap-20 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* LEFT */}

        <div>

          <div className="mb-8 flex items-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Featured Service
            </span>

          </div>

          <h2 className="font-oswald text-[46px] font-bold uppercase leading-[1.05] text-white md:text-[68px]">
            Porsche
            <br />
            Engine
            <br />
            Building
          </h2>

          <p className="mt-10 max-w-[700px] font-inter text-[18px] leading-9 text-[#A9A9A9]">
            Every Porsche engine is built with patience,
            precision and uncompromising attention to detail.
            Whether restoring factory performance or creating
            a motorsport-ready engine, every component is
            measured, inspected and assembled to the highest
            possible standard.
          </p>

          {/* FEATURES */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  size={20}
                  className="text-[#C00000]"
                />

                <span className="font-inter text-[16px] text-[#D5D5D5]">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <a
            href="/contact"
            className="mt-14 inline-flex items-center gap-3 bg-[#C00000] px-10 py-5 font-oswald text-[15px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#A00000]"
          >
            Schedule Engine Build

            <ArrowRight size={18} />

          </a>

        </div>

        {/* RIGHT */}

        <div className="relative overflow-hidden rounded-sm">

          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&auto=format&fit=crop&q=80"
            alt="Porsche Engine Building"
            className="h-[760px] w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          {/* Floating Card */}

          <div className="absolute bottom-8 left-8 right-8 rounded-sm border border-white/10 bg-black/80 p-8 backdrop-blur-md">

            <p className="font-inter text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
              Engine Building Philosophy
            </p>

            <h3 className="mt-5 font-oswald text-[36px] uppercase leading-tight text-white">
              Built For
              <br />
              Performance.
              <br />
              Built To Last.
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-5">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-4"
                  >
                    <Icon
                      size={22}
                      className="text-[#C00000]"
                    />

                    <span className="font-inter text-[15px] text-white">
                      {item.title}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}