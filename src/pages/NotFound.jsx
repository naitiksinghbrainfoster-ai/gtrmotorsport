import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[calc(100vh-95px)] items-center justify-center overflow-hidden py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=2200&q=80&auto=format&fit=crop')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/85" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.92) 100%)",
        }}
      />

      {/* Red Glow */}

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C00000]/20 blur-[170px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-[900px] px-5 text-center"
      >
        {/* 404 */}

        <h1
          className="font-oswald text-[95px] font-bold leading-none text-white md:text-[150px] lg:text-[180px]"
          style={{
            textShadow: "0 0 45px rgba(192,0,0,.30)",
          }}
        >
          404
        </h1>

        {/* Heading */}

        <h2 className="mt-2 font-oswald text-[26px] font-semibold uppercase leading-[1.2] text-white md:text-[42px] lg:text-[50px]">
          Looks Like Your Porsche
          <br />
          Took A Wrong Turn.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-[700px] font-inter text-[16px] leading-8 text-[#B5B5B5]">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to GTR Motorsport.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-[#C00000] px-8 py-4 font-oswald text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#980000]"
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-oswald text-[14px] uppercase tracking-[0.15em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5"
          >
            <PhoneCall size={18} />
            Contact Us
          </Link>

        </div>

        {/* Bottom Tag */}

        <div className="mt-12 flex items-center justify-center gap-4">

          <div className="h-px w-14 bg-[#C00000]" />

          <span className="font-inter text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
            Grace To Race
          </span>

          <div className="h-px w-14 bg-[#C00000]" />

        </div>

      </motion.div>
    </section>
  );
} 