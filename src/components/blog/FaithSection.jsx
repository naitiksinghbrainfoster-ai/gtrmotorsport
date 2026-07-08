import { motion } from "framer-motion";
import {
  Cross,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Cross,
    title: "Faith",
    text: "Jesus Christ is at the center of everything we do. Our work is an opportunity to serve others with excellence.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Every recommendation is honest, transparent and made with the customer's best interests in mind.",
  },
  {
    icon: HeartHandshake,
    title: "Stewardship",
    text: "Every Porsche entrusted to us is treated with the same care and attention we would give our own.",
  },
];

export default function FaithSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">

      {/* Red Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C00000]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Faith & Excellence
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[40px] uppercase leading-tight text-white md:text-[58px]">
            Driven By Faith.
            <br />
            Guided By Integrity.
          </h2>

          <p className="mx-auto mt-8 max-w-[820px] font-inter text-[18px] leading-9 text-[#B5B5B5]">
            At GTR Motorsport, our passion for Porsche is matched by our
            commitment to serving every customer with honesty,
            craftsmanship and excellence. We believe every opportunity
            to work on a Porsche is a responsibility to honour God
            through our work.
          </p>

        </motion.div>

        {/* Bible Verse */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-[1100px] rounded-sm border border-[#C00000]/30 bg-[#080808] p-10 text-center md:p-16"
        >

          <Cross
            size={40}
            className="mx-auto text-[#C00000]"
          />

          <blockquote className="mt-8 font-oswald text-[30px] uppercase leading-[1.5] text-white md:text-[42px]">
            “Whatever you do,
            <br />
            work at it with all your heart,
            <br />
            as working for the Lord.”
          </blockquote>

          <p className="mt-8 font-inter text-[14px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
            Colossians 3:23
          </p>

        </motion.div>

        {/* Values */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {values.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .12,
                }}
                viewport={{ once: true }}
                className="group rounded-sm border border-[#1B1B1B] bg-[#080808] p-10 transition duration-300 hover:-translate-y-2 hover:border-[#C00000]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C00000]/10 transition group-hover:bg-[#C00000]">

                  <Icon
                    size={28}
                    className="text-[#C00000] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 font-oswald text-[30px] uppercase text-white">
                  {item.title}
                </h3>

                <p className="mt-6 font-inter text-[16px] leading-8 text-[#B5B5B5]">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <a
            href="/about"
            className="inline-flex items-center gap-3 bg-[#C00000] px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#980000]"
          >
            Learn Our Story

            <ArrowRight size={18} />

          </a>

        </motion.div>

      </div>
    </section>
  );
}