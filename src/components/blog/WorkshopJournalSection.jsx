import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Search,
  Cpu,
  Wrench,
  Flag,
  CarFront,
} from "lucide-react";

const timeline = [
  {
    icon: ClipboardCheck,
    title: "Vehicle Arrival & Inspection",
    date: "Day 01",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80&auto=format&fit=crop",
    text: "Every Porsche begins with a detailed inspection. We document the vehicle's condition, discuss customer goals and create a tailored service or performance plan.",
  },
  {
    icon: Search,
    title: "Factory Diagnostics",
    date: "Day 02",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format&fit=crop",
    text: "Using Porsche factory-level diagnostic equipment, we identify faults, verify system health and establish a precise roadmap before work begins.",
  },
  {
    icon: Cpu,
    title: "Engine & Performance Build",
    date: "Workshop",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80&auto=format&fit=crop",
    text: "From engine rebuilding and component upgrades to suspension tuning, every stage is completed with precision and meticulous attention to detail.",
  },
  {
    icon: Wrench,
    title: "Assembly & Quality Control",
    date: "Final Build",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=80&auto=format&fit=crop",
    text: "Every component is inspected, torqued to specification and verified before final assembly to ensure reliability and performance.",
  },
  {
    icon: Flag,
    title: "Track Validation",
    date: "Performance",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=80&auto=format&fit=crop",
    text: "Track-focused Porsche builds are tested and fine-tuned to ensure confidence, balance and consistency under demanding conditions.",
  },
  {
    icon: CarFront,
    title: "Customer Delivery",
    date: "Complete",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    text: "The finished Porsche is prepared for delivery with a complete quality review and detailed customer handover, ensuring every project meets GTR Motorsport standards.",
  },
];

export default function WorkshopJournalSection() {
  return (
    <section className="bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#C00000]" />
            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Workshop Journal
            </span>
            <div className="h-px w-12 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[40px] uppercase text-white md:text-[58px]">
            Inside Every Porsche Project
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Follow the complete journey of a Porsche through our workshop,
            from the initial inspection to the final handover.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-16">

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}

                  <div className="overflow-hidden rounded-sm border border-[#1B1B1B]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[360px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Content */}

                  <div className="relative">

                    <div className="absolute -left-[54px] top-2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-[#C00000] bg-black">
                      <Icon
                        size={20}
                        className="text-[#C00000]"
                      />
                    </div>

                    <span className="font-inter text-[12px] uppercase tracking-[0.3em] text-[#C00000]">
                      {item.date}
                    </span>

                    <h3 className="mt-4 font-oswald text-[34px] uppercase text-white">
                      {item.title}
                    </h3>

                    <p className="mt-6 font-inter text-[17px] leading-8 text-[#B5B5B5]">
                      {item.text}
                    </p>

                    <div className="mt-8 h-[2px] w-16 bg-[#C00000]" />

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}