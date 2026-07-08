const features = [
  {
    number: "01",
    title: "30+ YEARS EXPERIENCE",
    description:
      "Decades of dedicated European and Porsche servicing experience.",
  },
  {
    number: "02",
    title: "PORSCHE FOCUSED",
    description:
      "We work on one Brand so we can master every detail.",
  },
  {
    number: "03",
    title: "FACTORY DIAGNOSTICS",
    description:
      "Porsche PIWIS equipment and advanced factory-level tools.",
  },
  {
    number: "04",
    title: "MOTORSPORT DRIVEN",
    description:
      "Track preparation, alignment, corner balancing and race support.",
  },
];

export default function WhyGTRSection() {
  return (
    <section className="bg-[#050505] py-28 lg:py-36">
      <div className="mx-auto max-w-[1540px] px-6 lg:px-10">

        {/* Section Label */}
        <div className="mb-8 flex items-center gap-5">
          <div className="h-px w-12 bg-[#D50000]" />

          <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#D50000]">
            WHY GTR
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[760px] font-oswald text-[36px] font-bold uppercase leading-[1.2] tracking-[0.5px] text-white lg:text-[40px] xl:text-[40px]">
          THE STANDARD OTHERS
          <br />
          MEASURE AGAINST.
        </h2>

        {/* Divider */}
        <div className="mt-10 border-t border-[#222222]" />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-y-16 pt-12 md:grid-cols-2 md:gap-x-14 xl:grid-cols-4 xl:gap-x-16">
          {features.map((item) => (
            <div key={item.number}>
              {/* Number */}
              <div className="font-oswald text-[26px] font-bold tracking-[4px] text-[#D50000]">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="mt-8 font-oswald text-[22px] font-bold uppercase leading-[1.05] tracking-[0.5px] text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-[320px] font-inter text-[18px] leading-[1.8] text-[#9B9B9B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}