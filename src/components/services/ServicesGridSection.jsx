import { useEffect, useRef, useState } from "react";
import MAINTENANCE from "../../assets/img/service/MAINTENANCE.jpeg";
import DIAGNOSTICS from "../../assets/img/service/DIAGNOSTICS.jpeg";
import ENGINEREPAIR from "../../assets/img/service/ENGINEREPAIR.jpeg";
import PERFORMANCEUPGRADES from "../../assets/img/service/PERFORMANCEUPGRADES.jpeg";
import Suspension from "../../assets/img/service/Suspension.jpeg";
import TrackPreparation from "../../assets/img/service/TrackPreparation.jpeg";
import RaceSupport from "../../assets/img/service/RaceSupport.jpeg";
import EngineBuilding from "../../assets/img/service/EngineBuilding.jpeg";

import {
  Wrench,
  Search,
  Cog,
  Zap,
  Settings,
  Flag,
  Trophy,
  Cpu,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Maintenance",
    icon: Wrench,
    image: MAINTENANCE,
    description:
      "Factory scheduled maintenance, oil services, brake inspections and preventative care.",
  },
  {
    title: "Diagnostics",
    icon: Search,
    image: DIAGNOSTICS,
    description:
      "Advanced Porsche PIWIS diagnostics and electrical fault detection.",
  },
  {
    title: "Engine Repair",
    icon: Cog,
    image: ENGINEREPAIR,
    description:
      "Complete engine repairs, rebuilds and precision assembly.",
  },
  {
    title: "Performance Upgrades",
    icon: Zap,
    image: PERFORMANCEUPGRADES,
    description:
      "Exhaust systems, ECU tuning support and performance enhancements.",
  },
  {
    title: "Suspension & Alignment",
    icon: Settings,
    image: Suspension,
    description:
      "Corner balancing, suspension tuning and precision alignments.",
  },
  {
    title: "Track Preparation",
    icon: Flag,
    image: TrackPreparation,
    description:
      "Prepare your Porsche for track days with race-ready inspections.",
  },
  {
    title: "Race Support",
    icon: Trophy,
    image: RaceSupport,
    description:
      "Professional support for motorsport events and race weekends.",
  },
  {
    title: "Engine Building",
    icon: Cpu,
    image: EngineBuilding,
    description:
      "Custom Porsche engine builds engineered for reliability and performance.",
  },
];

/* Ease used throughout — a precise, decelerating curve, no overshoot/bounce */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/* ---------- Reveal wrapper: single clean fade + rise, once, on scroll into view ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "700ms",
        transitionTimingFunction: EASE,
      }}
      className={`transition-[opacity,transform] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDuration: "500ms",
        transitionTimingFunction: EASE,
      }}
      className={`group relative flex flex-col overflow-hidden rounded-sm border bg-[#0A0A0A] transition-[transform,border-color,box-shadow] ${
        hovered
          ? "-translate-y-1.5 border-[#C00000]/60 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.8)]"
          : "border-[#1A1A1A]"
      }`}
    >
      {/* index mark, understated */}
      <span className="pointer-events-none absolute right-6 top-6 z-10 font-inter text-[12px] font-medium tracking-[0.2em] text-white/25">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          style={{ transitionDuration: "900ms", transitionTimingFunction: EASE }}
          className={`h-full w-full object-cover transition-transform ${
            hovered ? "scale-[1.06]" : "scale-100"
          }`}
        />

        <div
          style={{ transitionDuration: "500ms" }}
          className={`absolute inset-0 bg-gradient-to-t from-black transition-opacity ${
            hovered ? "via-black/30 opacity-100" : "via-black/20"
          } to-transparent`}
        />

        <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C00000]">
          <Icon size={24} className="text-white" />
        </div>

        {/* accent rule draws left to right on hover */}
        <div
          style={{ transitionDuration: "450ms", transitionTimingFunction: EASE }}
          className={`absolute bottom-0 left-0 h-[2px] bg-[#C00000] transition-[width] ${
            hovered ? "w-full" : "w-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        <h3
          style={{ transitionDuration: "400ms" }}
          className={`font-oswald text-[28px] uppercase transition-colors ${
            hovered ? "text-white" : "text-white/95"
          }`}
        >
          {service.title}
        </h3>

        <p className="mt-4 font-inter text-[15px] leading-7 text-[#A8A8A8]">
          {service.description}
        </p>

        <button className="mt-auto flex items-center gap-3 pt-8 font-oswald text-[14px] uppercase tracking-[0.14em] text-[#C00000]">
          <span className="relative">
            Learn More
            <span
              style={{ transitionDuration: "400ms", transitionTimingFunction: EASE }}
              className={`absolute -bottom-1 left-0 h-px bg-[#C00000] transition-[width] ${
                hovered ? "w-full" : "w-0"
              }`}
            />
          </span>
          <ArrowRight
            size={16}
            style={{ transitionDuration: "400ms", transitionTimingFunction: EASE }}
            className={`transition-transform ${hovered ? "translate-x-1.5" : "translate-x-0"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default function ServicesGridSection() {
  return (
    <section id="services" className="bg-black py-14 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">
        {/* Heading */}
        <Reveal>
          <div className="mb-20 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-[#C00000]" />
              <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                OUR SERVICES
              </span>
              <div className="h-px w-14 bg-[#C00000]" />
            </div>

            <h2 className="font-oswald text-[32px] font-bold uppercase text-white md:text-[40px]">
              Porsche Expertise.
              <br />
              Without Compromise.
            </h2>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 4) * 90}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
