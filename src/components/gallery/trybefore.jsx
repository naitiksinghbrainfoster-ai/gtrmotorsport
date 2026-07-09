import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Before1 from "../../assets/img/gallery/before1.avif";
import After1 from "../../assets/img/gallery/after1.avif";
import Before2 from "../../assets/img/gallery/before2.jpeg";
import After2 from "../../assets/img/gallery/after2.jpeg";

const projects = [
  {
    before: Before1,
    after: After1,
    subtitle: "Restoration Excellence",
    title: "Precision\nYou Can See.",
    description:
      "From neglected projects to race-ready Porsche builds, every transformation is completed with meticulous craftsmanship and uncompromising attention to detail.",
  },

  {
    before: Before2,
    after: After2,
    subtitle: "Performance Upgrade",
    title: "Built\nFor Speed.",
    description:
      "Complete suspension, braking and engine upgrades that transform every Porsche into a track-ready machine.",
  },
];

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const [activeProject, setActiveProject] = useState(0);
  const sliderRef = useRef(null);

  const updatePosition = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section className="overflow-hidden bg-black py-12 sm:py-14 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-20 text-center"
        >
          <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-px w-8 sm:w-12 bg-[#C00000]" />

            <span className="font-inter text-[10px] sm:text-[12px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C00000]">
              Before & After
            </span>

            <div className="h-px w-8 sm:w-12 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[28px] sm:text-[38px] font-semibold uppercase leading-tight text-white md:text-[54px]">
            Engineering
            <br />
            Makes The Difference
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-[700px] font-inter text-[14px] sm:text-[17px] leading-7 sm:leading-8 text-[#A8A8A8]">
            Compare the transformation of Porsche projects completed by
            GTR Motorsport. Every build reflects precision,
            craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Before / After Slider */}

        <motion.div
          ref={sliderRef}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchMove}
          className="group relative mx-auto h-[420px] sm:h-[520px] lg:h-[650px] max-w-[1400px] touch-none cursor-ew-resize overflow-hidden rounded-sm border border-[#1B1B1B]"
        >

          {/* AFTER IMAGE */}

          <img
  src={projects[activeProject].after}
  alt="After"
  className="absolute inset-0 h-full w-full object-cover"
/>

          {/* BEFORE IMAGE */}

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
  src={projects[activeProject].before}
  alt="Before"
  className="h-full w-[1400px] max-w-none object-cover"
/>
          </div>

          {/* Divider */}

          <div
            className="absolute top-0 bottom-0 w-[2px] sm:w-[3px] bg-white"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 sm:h-16 sm:w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C00000] shadow-2xl">
              <MoveHorizontal
                size={18}
                className="text-white sm:hidden"
              />
              <MoveHorizontal
                size={28}
                className="hidden text-white sm:block"
              />
            </div>
          </div>

          {/* Labels */}

          <div className="absolute left-3 top-3 sm:left-8 sm:top-8 rounded-full bg-black/70 px-3 py-1.5 sm:px-6 sm:py-3 backdrop-blur-md">
            <span className="font-oswald text-[11px] sm:text-[18px] uppercase text-white">
              Before
            </span>
          </div>

          <div className="absolute right-3 top-3 sm:right-8 sm:top-8 rounded-full bg-[#C00000] px-3 py-1.5 sm:px-6 sm:py-3">
            <span className="font-oswald text-[11px] sm:text-[18px] uppercase text-white">
              After
            </span>
          </div>

          {/* Glass Card */}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 sm:bottom-10 sm:left-10 sm:right-auto max-w-full sm:max-w-[500px] border border-white/10 bg-black/50 p-4 sm:p-8 backdrop-blur-xl">

            <p className="font-inter text-[9px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-[#C00000]">
              {projects[activeProject].subtitle}
            </p>

            <h3 className="mt-2 sm:mt-4 whitespace-pre-line font-oswald text-[19px] sm:text-[34px] uppercase leading-tight text-white">
              {projects[activeProject].title}
            </h3>

            <p className="mt-2 sm:mt-5 hidden sm:block font-inter text-[16px] leading-8 text-[#D2D2D2]">
              {projects[activeProject].description}
            </p>

          </div>

        </motion.div>

        {/* Pagination */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4"
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveProject(index);
                setPosition(50);
              }}
              className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border font-oswald text-base sm:text-lg uppercase transition-all duration-300 ${
                activeProject === index
                  ? "border-[#C00000] bg-[#C00000] text-white shadow-[0_0_25px_rgba(192,0,0,.35)]"
                  : "border-[#2A2A2A] bg-[#080808] text-[#8A8A8A] hover:border-[#C00000] hover:text-white"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </motion.div>

        {/* Bottom Cards */}

        <div className="mt-10 sm:mt-16 grid gap-5 sm:gap-8 md:grid-cols-3">
          {[
            {
              title: "Engine Restoration",
              text: "Complete teardown, inspection and precision rebuild with factory-grade accuracy.",
            },
            {
              title: "Performance Upgrade",
              text: "Suspension, braking and engine enhancements engineered for maximum performance.",
            },
            {
              title: "Showroom Finish",
              text: "Every detail is perfected before delivery, ensuring concours-quality presentation.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group rounded-sm border border-[#1B1B1B] bg-[#080808] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C00000]"
            >
              <h3 className="font-oswald text-[22px] sm:text-[28px] uppercase text-white transition-colors duration-300 group-hover:text-[#C00000]">
                {item.title}
              </h3>

              <p className="mt-3 sm:mt-5 font-inter text-[14px] sm:text-[16px] leading-7 sm:leading-8 text-[#A8A8A8]">
                {item.text}
              </p>

              <div className="mt-6 sm:mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}