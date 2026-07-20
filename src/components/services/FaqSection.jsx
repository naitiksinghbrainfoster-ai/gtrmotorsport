import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [

  {
    question: "Do you use genuine Porsche PIWIS diagnostic equipment?",
    answer:
      "Yes. We use genuine Porsche PIWIS diagnostic equipment to accurately diagnose problems, perform software updates, and communicate directly with your Porsche's onboard systems.",
  },
  {
    question: "Do you work on both classic and modern Porsche models?",
    answer:
      "Absolutely. Our team services everything from classic air-cooled models to modern water-cooled Porsche vehicles, including daily drivers, collector cars, and track-focused builds.",
  },
  {
    question: "Can you prepare my Porsche for track days?",
    answer:
      "Yes. We offer track preparation, performance upgrades, suspension setup, corner balancing, safety inspections, and race support tailored to your driving goals and experience level.",
  },
  {
    question: "Do you build and rebuild Porsche engines?",
    answer:
      "Yes. We perform complete engine rebuilds, engine repairs, cylinder head restoration, IMS bearing service, and performance engine builds for a variety of Porsche platforms.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by phone or through our online booking form. We'll discuss your vehicle, your goals, and recommend the best next steps for your Porsche.",
  },
];

/* Same precise, decelerating ease used across the site — keeps motion consistent */
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/* ---------- Reveal wrapper: single fade + rise on scroll into view ---------- */
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
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function FaqItem({ faq, index, active, onToggle }) {
  const isOpen = active === index;
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 80}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ transitionDuration: "400ms", transitionTimingFunction: EASE }}
        className={`overflow-hidden rounded-sm border transition-colors ${
          isOpen
            ? "border-[#C00000] bg-[#0B0B0B]"
            : hovered
            ? "border-[#333] bg-[#0B0B0B]"
            : "border-[#1E1E1E] bg-[#080808]"
        }`}
      >
        <button
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between p-6 text-left md:p-7"
        >
          <h3
            style={{ transitionDuration: "300ms" }}
            className={`pr-6 font-oswald text-[18px] uppercase tracking-wide transition-colors md:text-[20px] ${
              isOpen ? "text-white" : "text-white/90"
            }`}
          >
            {faq.question}
          </h3>

          <div
            style={{ transitionDuration: "400ms", transitionTimingFunction: EASE }}
            className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
              isOpen ? "border-[#C00000]" : "border-[#2B2B2B]"
            }`}
          >
            <Plus
              size={17}
              style={{ transitionDuration: "400ms", transitionTimingFunction: EASE }}
              className={`absolute transition-all ${
                isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100 text-white"
              }`}
            />
            <Minus
              size={17}
              style={{ transitionDuration: "400ms", transitionTimingFunction: EASE }}
              className={`absolute transition-all ${
                isOpen ? "rotate-0 opacity-100 text-[#C00000]" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>

        <div
          style={{ transitionDuration: "450ms", transitionTimingFunction: EASE }}
          className={`grid transition-[grid-template-rows] ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#1B1B1B] px-6 py-6 md:px-7">
              <p className="font-inter text-[15px] leading-8 text-[#B5B5B5] md:text-[16px]">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FaqSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="bg-black py-20 lg:py-8">
      <div className="mx-auto max-w-[1000px] px-5">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-14 bg-[#C00000]" />
              <span className="font-inter text-[22px] font-semibold uppercase tracking-[0.3em] text-[#C00000]">
                Frequently Asked Questions
              </span>
              <div className="h-px w-14 bg-[#C00000]" />
            </div>


            <p className="mx-auto mt-5 max-w-[600px] font-inter text-[18px] leading-7 text-white md:text-[18px]">
              Here are answers to some of the most commonly asked questions 
about our shop.
            </p>
          </div>
        </Reveal>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              active={active}
              onToggle={toggleFAQ}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={faqs.length * 80}>
          <div className="mt-16 rounded-sm border border-[#1A1A1A] bg-[#080808] p-8 text-center md:p-10">
            <h3 className="font-oswald text-[24px] uppercase text-white md:text-[28px]">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-4 max-w-[560px] font-inter text-[15px] leading-7 text-white md:text-[16px]">
              Our team is happy to answer any questions about your Porsche,
              recommend the right service and help you schedule your visit.
            </p>

            <a
              href="/contact"
              style={{ transitionDuration: "300ms", transitionTimingFunction: EASE }}
              className="group relative mt-8 inline-flex items-center overflow-hidden bg-[#C00000] px-9 py-4 font-oswald text-[14px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#A00000]"
            >
              <span className="relative">Contact Our Team</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
