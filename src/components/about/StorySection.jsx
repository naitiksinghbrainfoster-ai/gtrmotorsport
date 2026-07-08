import storyImg from "../../assets/img/about/storysection1.jpg";

export default function StorySection() {
  return (
    <section
      id="our-story"
      className="bg-[#050505] py-5 md:py-8"
    >
      <div className="mt-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">

        {/* LEFT IMAGE */}

        <div className="relative">

          <img
            src={storyImg}
            alt="Paul Chahal"
            className="h-[650px] w-full rounded-sm object-cover shadow-2xl"
          />

          {/* Experience Card */}

          <div className="absolute -bottom-10 left-8 bg-[#C00000] px-10 py-7 shadow-2xl">

            <h3 className="font-oswald text-[60px] font-bold leading-none text-white">
              30+
            </h3>

            <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.28em] text-white">
              Years Experience
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div>

          {/* Label */}

          <div className="mb-8 flex items-center gap-5">

            <div className="h-[2px] w-14 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Our Story
            </span>

          </div>

          {/* Heading */}

          <h2 className="font-oswald text-[32px] font-bold uppercase leading-[1.08] text-white md:text-[38px] xl:text-[40px]">

            Grace To Race.

            <br />

            More Than A Business.

          </h2>

          {/* Paragraph */}

          <p className="mt-10 font-inter text-[18px] leading-[2] text-[#A8A8A8]">

            GTR Motorsport was founded as the dedicated Porsche
            performance and motorsport division and sister company
            of Autowerks European Inc.

          </p>

          <p className="mt-8 font-inter text-[18px] leading-[2] text-[#A8A8A8]">

            After more than three decades specializing in European
            automobiles, founder Paul Chahal established GTR
            Motorsport with one clear vision—to create a company
            focused exclusively on Porsche service, performance,
            track preparation and precision engine building.

          </p>

          <p className="mt-8 font-inter text-[18px] leading-[2] text-[#A8A8A8]">

            GTR was born from two lifelong passions:
            a love for Porsche motorsports and a personal faith
            journey centered on Jesus Christ. Every vehicle is
            treated with honesty, integrity and meticulous attention
            to detail because we believe our abilities are gifts
            from God.

          </p>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>

              <h3 className="font-oswald text-[46px] font-bold text-[#C00000]">
                30+
              </h3>

              <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                Years
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[46px] font-bold text-[#C00000]">
                100%
              </h3>

              <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                Porsche
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[46px] font-bold text-[#C00000]">
                Faith
              </h3>

              <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                First
              </p>

            </div>

            <div>

              <h3 className="font-oswald text-[46px] font-bold text-[#C00000]">
                Track
              </h3>

              <p className="mt-2 font-inter text-[13px] uppercase tracking-[0.18em] text-[#9A9A9A]">
                Driven
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}