export default function MissionSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-20">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-16 px-5 sm:px-6 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 xl:px-8">

        {/* Left */}
        <div>

          {/* Label */}
          <div className="mb-8 md:mb-10 flex items-center gap-4">
            <div className="h-px w-12 bg-[#D50000]" />

            <span className="font-inter text-[16px] sm:text-[16px] md:text-[16px] font-semibold uppercase tracking-[0.35em] text-[#D50000]">
              Our Mission
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-oswald
              font-bold
              uppercase
              text-white
              leading-[1.05]
              tracking-[0.02em]
              break-words
              text-[30px]
              sm:text-[30px]
              md:text-[40px]
              lg:text-[44px]
              xl:text-[46px]
            "
          >
            <span className="mb-2 block">
              Driven By
            </span>

            <span className="mb-2 block">
              Excellence.
            </span>

            <span className="mb-5 block">
              Guided By Faith.
            </span>

            <span className="mb-2 block text-[#D50000]">
              Built For
            </span>

            <span className="block text-[#D50000]">
              Performance.
            </span>
          </h2>

        </div>

        {/* Right */}
        <div className="max-w-full lg:max-w-[860px]">

          <p className="font-inter text-[16px] md:text-[18px] leading-8 text-white">
            GTR Motorsport is the dedicated Porsche performance and
            motorsport division and sister company of Autowerks European
            Inc. Founded by Paul Chahal after more than three decades
            working on European vehicles, GTR exists to combine faith,
            passion and excellence in everything we do.
          </p>

          <p className="mt-8 md:mt-10 font-inter text-[17px] md:text-[20px] leading-8 md:leading-9 text-white">
            Every project we touch is treated with honesty, integrity and
            meticulous attention to detail, the same way we'd want our own
            vehicle handled.
          </p>

          {/* Quote */}
          <div className="mt-10 md:mt-12 border-l-2 border-[#D50000] pl-5 md:pl-7">

            <p className="font-inter text-[18px] md:text-[20px] italic leading-8 text-white">
              “Whatever you do, work at it with all your heart, as
              working for the Lord.”
            </p>

            <p className="mt-5 font-inter text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.22em] text-[#D50000]">
              Colossians 3:23
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}