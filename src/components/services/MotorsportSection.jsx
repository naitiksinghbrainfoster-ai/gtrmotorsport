import {
  Flag,
  Trophy,
  Timer,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Flag,
    title: "Track Preparation",
    text: "Complete inspection and setup before every event.",
  },
  {
    icon: Timer,
    title: "Corner Balancing",
    text: "Precision suspension tuning for maximum grip.",
  },
  {
    icon: Trophy,
    title: "Race Support",
    text: "Professional assistance throughout race weekends.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspection",
    text: "Confidence that your Porsche is ready for the circuit.",
  },
];

export default function MotorsportSection() {
  return (
    <section
      className="relative overflow-hidden py-28 lg:py-36"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/80" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(0,0,0,.96)0%,rgba(0,0,0,.75)45%,rgba(0,0,0,.92)100%)",
        }}
      />

      {/* Red Glow */}

      <div className="absolute -right-60 top-20 h-[500px] w-[500px] rounded-full bg-[#C00000]/20 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <div>

            <div className="mb-8 flex items-center gap-4">

              <div className="h-px w-14 bg-[#C00000]" />

              <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                Motorsport Division
              </span>

            </div>

            <h2 className="font-oswald text-[50px] font-bold uppercase leading-[1.02] text-white md:text-[72px] xl:text-[90px]">
              Built
              <br />
              For The
              <br />
              Track.
            </h2>

            <p className="mt-10 max-w-[650px] font-inter text-[18px] leading-9 text-[#B3B3B3]">
              Motorsport isn't simply another service we offer.
              It's part of our DNA. From suspension setup and
              corner balancing to complete race preparation,
              every Porsche is engineered to perform with
              confidence when it matters most.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">

              <a
                href="/contact"
                className="bg-[#C00000] px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition hover:bg-[#A00000]"
              >
                Book Track Inspection
              </a>

              <a
                href="/gallery"
                className="inline-flex items-center gap-3 border border-white/20 px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition hover:border-[#C00000]"
              >
                View Gallery

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6 sm:grid-cols-2">

            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#C00000]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C00000]/10 transition group-hover:bg-[#C00000]">

                    <Icon
                      size={30}
                      className="text-[#C00000] group-hover:text-white"
                    />

                  </div>

                  <h3 className="mt-8 font-oswald text-[28px] uppercase text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 font-inter text-[16px] leading-8 text-[#B3B3B3]">
                    {item.text}
                  </p>

                  <div className="mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-500 group-hover:w-full" />

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 rounded-sm border border-white/10 bg-white/5 backdrop-blur-md">

          <div className="grid gap-10 px-10 py-12 lg:grid-cols-3 lg:px-16">

            <div>

              <h3 className="font-oswald text-[58px] text-[#C00000]">
                Track
              </h3>

              <p className="mt-3 font-inter text-[16px] leading-8 text-[#A8A8A8]">
                Professional preparation before every event.
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[58px] text-[#C00000]">
                Race
              </h3>

              <p className="mt-3 font-inter text-[16px] leading-8 text-[#A8A8A8]">
                Motorsport support backed by decades of experience.
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[58px] text-[#C00000]">
                Win
              </h3>

              <p className="mt-3 font-inter text-[16px] leading-8 text-[#A8A8A8]">
                Confidence through engineering excellence.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}