export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-12 lg:py-12"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2000&q=80&auto=format&fit=crop)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.93) 0%, rgba(0,0,0,.72) 45%, rgba(0,0,0,.90) 100%)",
        }}
      />

      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C00000]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-[1450px] flex-col items-center px-6 text-center">

        {/* Label */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-px w-14 bg-[#C00000]" />

          <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.4em] text-[#C00000]">
            Ready To Experience GTR?
          </span>

          <div className="h-px w-14 bg-[#C00000]" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1100px] font-oswald text-[32px] font-bold uppercase leading-[1.08] text-white md:text-[64px] xl:text-[42px]">
          Let's Build Something
        
          Extraordinary Together.
        </h2>

        {/* Description */}
        <p className="mt-10 max-w-[820px] font-inter text-[18px] leading-9 text-[#B5B5B5]">
          Whether you need routine Porsche maintenance, performance upgrades,
          diagnostics or a complete engine build, GTR Motorsport is here to
          deliver uncompromising craftsmanship with integrity, passion and
          excellence.
        </p>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">

          <a
            href="/contact"
            className="bg-[#C00000] px-10 py-5 font-oswald text-[15px] font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#D50000]"
          >
            Schedule Service →
          </a>

          <a
            href="tel:+15559119119"
            className="border border-white/20 px-10 py-5 font-oswald text-[15px] font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:border-[#C00000] hover:bg-[#C00000]"
          >
            Call Us Today
          </a>

        </div>

        {/* Bottom Features */}

        <div className="mt-20 grid w-full max-w-[1200px] grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">

          <div>
            <h3 className="font-oswald text-[34px] text-[#C00000]">
              30+
            </h3>

            <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.2em] text-[#8A8A8A]">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="font-oswald text-[34px] text-[#C00000]">
              100%
            </h3>

            <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.2em] text-[#8A8A8A]">
              Porsche Focus
            </p>
          </div>

          <div>
            <h3 className="font-oswald text-[34px] text-[#C00000]">
              PIWIS
            </h3>

            <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.2em] text-[#8A8A8A]">
              Factory Diagnostics
            </p>
          </div>

          <div>
            <h3 className="font-oswald text-[34px] text-[#C00000]">
              Faith
            </h3>

            <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.2em] text-[#8A8A8A]">
              Driven Values
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}