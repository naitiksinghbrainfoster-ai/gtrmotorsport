import {
  Wrench,
  Trophy,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Wrench,
    value: "30+",
    title: "Years Experience",
    desc: "European Automotive Excellence",
  },
  {
    icon: Gauge,
    value: "100%",
    title: "Porsche Focused",
    desc: "Dedicated Porsche Specialists",
  },
  {
    icon: Trophy,
    value: "500+",
    title: "Performance Builds",
    desc: "Track & Street Projects",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Integrity",
    desc: "Honest Recommendations",
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden py-10 lg:py-5"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.95) 0%, rgba(0,0,0,.72) 45%, rgba(0,0,0,.92) 100%)",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-20 text-center">

          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              GTR BY THE NUMBERS
            </span>

            <div className="h-px w-14 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[40px] font-bold uppercase text-white md:text-[40px]">
            Built On Experience
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] font-inter text-[18px] leading-9 text-[#A9A9A9]">
            Every Porsche tells a story. Every project reflects decades of
            craftsmanship, precision engineering and a commitment to
            excellence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-sm border border-white/10 bg-white/5 p-10 backdrop-blur-md transition duration-500 hover:-translate-y-3 hover:border-[#C00000]"
              >
                <div className="flex items-center justify-between">

                  <Icon
                    size={42}
                    className="text-[#C00000]"
                  />

                  <span className="font-oswald text-[50px] leading-none text-white/5">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-10 font-oswald text-[38px] font-bold text-white">
                  {item.value}
                </h3>

                <h4 className="mt-3 font-oswald text-[28px] uppercase text-white">
                  {item.title}
                </h4>

                <p className="mt-5 font-inter text-[16px] leading-8 text-[#B5B5B5]">
                  {item.desc}
                </p>

                <div className="mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-full"></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}