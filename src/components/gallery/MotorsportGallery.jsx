import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Flag,
  Trophy,
  Gauge,
  Timer,
  ArrowUpRight,
} from "lucide-react";
import Race from "../../assets/img/gallery/Race.jpeg";
const services = [
  {
    icon: Flag,
    title: "Track Days",
    text: "Preparing Porsche vehicles for maximum confidence on every circuit.",
  },
  {
    icon: Trophy,
    title: "Race Support",
    text: "Professional support throughout race weekends and competition events.",
  },
  {
    icon: Gauge,
    title: "Suspension Setup",
    text: "Corner balancing and precision chassis tuning for every driver.",
  },
  {
    icon: Timer,
    title: "Performance Testing",
    text: "Every setup is validated before hitting the track.",
  },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "100+", label: "Track Events" },
  { value: "500+", label: "Performance Builds" },
  { value: "100%", label: "Porsche Focus" },
];

// Reads "30+" / "100%" into a numeric target + suffix, then counts up once
// it scrolls into view. Falls back to an instant value for reduced motion.
function AnimatedStat({ value, label, index }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const startCount = () => {
    if (started.current) return;
    started.current = true;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return (
    <motion.div
      onViewportEnter={startCount}
      viewport={{ once: true, margin: "-40px" }}
      className="relative border-r border-[#1B1B1B] p-10 text-center last:border-r-0"
    >
      <div className="mb-4 flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="h-[3px] w-4 bg-[#C00000]"
            style={{ opacity: 0.25 + i * 0.15 }}
          />
        ))}
      </div>

      <h3 className="font-mono text-[40px] font-semibold tabular-nums text-[#C00000] md:text-[44px]">
        {count}
        {suffix}
      </h3>

      <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.2em] text-[#8F8F8F]">
        {label}
      </p>
    </motion.div>
  );
}

export default function MotorsportGallery() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">
      {/* Red Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C00000]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#C00000]" />
            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Motorsport Gallery
            </span>
            <div className="h-px w-12 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[54px]">
            Built For Speed.
            <br />
            Engineered To Win.
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Discover our motorsport journey—from race preparation and
            suspension setup to championship-ready Porsche builds.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid gap-8 xl:grid-cols-[1.3fr_.7fr]">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-sm"
          >
            <img
              src={Race}
              alt=""
              className="h-[760px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* HUD corner frame — telemetry-overlay reference */}
            <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-white/40 transition-colors duration-500 group-hover:border-[#C00000]" />
            <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-white/40 transition-colors duration-500 group-hover:border-[#C00000]" />
            <div className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-white/40 transition-colors duration-500 group-hover:border-[#C00000]" />

            {/* Live indicator */}
            <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C00000] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C00000]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white">
                On Track
              </span>
            </div>

            {/* Glass Card */}
            <div className="absolute bottom-10 left-10 max-w-[420px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
              <p className="font-inter text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
                Track Ready
              </p>

              <h3 className="mt-4 font-oswald text-[34px] uppercase text-white">
                Race.
                <br />
                Compete.
                <br />
                Perform.
              </h3>

              <p className="mt-5 font-inter text-[16px] leading-8 text-[#D2D2D2]">
                Motorsport is where precision engineering meets passion.
                Every Porsche leaving our workshop is prepared to perform.
              </p>
            </div>
          </motion.div>

          {/* Right — Service readout list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-sm border border-[#1B1B1B] bg-[#0A0A0A] px-8"
          >
            {/* Connector spine linking each station */}
            <div className="pointer-events-none absolute left-[59px] top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />

            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex items-start gap-6 border-b border-[#1B1B1B] py-7 last:border-b-0"
                >
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-[#232323] bg-[#0A0A0A] transition-all duration-500 group-hover:border-[#C00000] group-hover:bg-[#C00000]"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                    }}
                  >
                    <Icon
                      size={24}
                      className="text-[#C00000] transition-colors duration-500 group-hover:text-white"
                    />
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-oswald text-[22px] uppercase tracking-wide text-white">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#4A4A4A] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C00000]"
                      />
                    </div>
                    <p className="mt-2 font-inter text-[15px] leading-7 text-[#8F8F8F] transition-colors duration-500 group-hover:text-[#A8A8A8]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Stats — telemetry readout */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-sm border border-[#1B1B1B] bg-[#080808]"
        >
          <div className="flex items-center justify-center gap-4 border-b border-[#1B1B1B] py-5">
            <div className="h-px w-8 bg-[#C00000]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#8F8F8F]">
              Career Telemetry
            </span>
            <div className="h-px w-8 bg-[#C00000]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
