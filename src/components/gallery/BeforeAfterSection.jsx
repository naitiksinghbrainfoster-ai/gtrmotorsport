import { useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

const projects = [
  {
    before:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=80&auto=format&fit=crop",
    subtitle: "Restoration Excellence",
    title: "Precision\nYou Can See.",
    description:
      "From neglected projects to race-ready Porsche builds, every transformation is completed with meticulous craftsmanship and uncompromising attention to detail.",
  },

  {
    before:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1800&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1800&q=80&auto=format&fit=crop",
    subtitle: "Performance Upgrade",
    title: "Built\nFor Speed.",
    description:
      "Complete suspension, braking and engine upgrades that transform every Porsche into a track-ready machine.",
  },
];

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const [activeProject, setActiveProject] = useState(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <section className="overflow-hidden bg-black py-14 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

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
              Before & After
            </span>

            <div className="h-px w-12 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[54px]">
            Engineering
            <br />
            Makes The Difference
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Compare the transformation of Porsche projects completed by
            GTR Motorsport. Every build reflects precision,
            craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Before / After Slider */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onMouseMove={handleMove}
          className="group relative mx-auto h-[650px] max-w-[1400px] cursor-ew-resize overflow-hidden rounded-sm border border-[#1B1B1B]"
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
            className="absolute top-0 bottom-0 w-[3px] bg-white"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C00000] shadow-2xl">
              <MoveHorizontal
                size={28}
                className="text-white"
              />
            </div>
          </div>

          {/* Labels */}

          <div className="absolute left-8 top-8 rounded-full bg-black/70 px-6 py-3 backdrop-blur-md">
            <span className="font-oswald text-[18px] uppercase text-white">
              Before
            </span>
          </div>

          <div className="absolute right-8 top-8 rounded-full bg-[#C00000] px-6 py-3">
            <span className="font-oswald text-[18px] uppercase text-white">
              After
            </span>
          </div>

          {/* Glass Card */}

          <div className="absolute bottom-10 left-10 max-w-[500px] border border-white/10 bg-black/50 p-8 backdrop-blur-xl">

            <p className="font-inter text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
              {projects[activeProject].subtitle}
            </p>

            <h3 className="mt-4 whitespace-pre-line font-oswald text-[34px] uppercase leading-tight text-white">
              {projects[activeProject].title}
            </h3>

            <p className="mt-5 font-inter text-[16px] leading-8 text-[#D2D2D2]">
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
          className="mt-10 flex items-center justify-center gap-4"
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveProject(index);
                setPosition(50);
              }}
              className={`flex h-12 w-12 items-center justify-center border font-oswald text-lg uppercase transition-all duration-300 ${
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
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
              className="group rounded-sm border border-[#1B1B1B] bg-[#080808] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C00000]"
            >
              <h3 className="font-oswald text-[28px] uppercase text-white transition-colors duration-300 group-hover:text-[#C00000]">
                {item.title}
              </h3>

              <p className="mt-5 font-inter text-[16px] leading-8 text-[#A8A8A8]">
                {item.text}
              </p>

              <div className="mt-8 h-[2px] w-12 bg-[#C00000] transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}