import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=2200&q=80&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/80" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(0,0,0,.94)0%,rgba(0,0,0,.72)45%,rgba(0,0,0,.94)100%)",
        }}
      />

      {/* Red Glow */}

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C00000]/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[900px] text-center"
        >

          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C00000]/30 bg-[#C00000]/10">

            <Mail
              size={34}
              className="text-[#C00000]"
            />

          </div>

          {/* Label */}

          <div className="mt-8 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Join The GTR Community
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          {/* Heading */}

          <h2 className="mt-8 font-oswald text-[42px] font-semibold uppercase leading-[1.05] text-white md:text-[64px]">
            Stay Connected
            <br />
            With Porsche
            <br />
            Performance.
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-9 text-[#B8B8B8]">
            Receive exclusive Porsche maintenance advice, engine build
            stories, track preparation guides, customer project
            highlights and the latest news from GTR Motorsport.
          </p>

          {/* Benefits */}

          <div className="mt-12 grid gap-5 text-left md:grid-cols-2">

            {[
              "Porsche maintenance tips",
              "Behind-the-scenes engine builds",
              "Track preparation guides",
              "Workshop news & customer projects",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
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

          {/* Form */}

          <form className="mx-auto mt-14 flex max-w-[700px] flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="h-16 flex-1 border border-white/10 bg-white/5 px-6 font-inter text-white placeholder:text-[#888] outline-none transition focus:border-[#C00000]"
            />

            <button
              type="submit"
              className="flex h-16 items-center justify-center gap-3 bg-[#C00000] px-10 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
            >
              Subscribe

              <ArrowRight size={18} />

            </button>

          </form>

          {/* Footer Text */}

          <p className="mt-8 font-inter text-[14px] leading-7 text-[#7F7F7F]">
            No spam. Just Porsche knowledge, workshop updates and
            motorsport insights from GTR Motorsport.
          </p>

        </motion.div>

      </div>
    </section>
  );
}