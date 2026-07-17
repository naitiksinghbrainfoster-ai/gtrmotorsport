import storyImage from "../../assets/img/about/aboutstory.jpg";

export default function StorySection() {
  return (
    <section id="our-story" className="bg-[#050505] py-16">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            {/* Label */}
            <div className="mb-6 flex items-center gap-5">

              <span className="font-inter text-[29px] font-semibold uppercase tracking-[0.3em] text-[#C00000] md:text-[34px]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-oswald text-[22px] font-bold  leading-none text-white md:text-[28px]">
              Grace to Race Motorsport
            </h2>

          

            {/* Story */}
            <div className="mt-5 space-y-4 font-inter text-[18px] leading-[2] text-white/85">

              <p>
                GTR Motorsport wasn't created to expand a business — it was
                created to pursue a passion.
              </p>

              <p>
                For more than 30 years, founder Paul Chahal has specialized in
                servicing European automobiles through Autowerks European. Over
                the years, one brand continued to stand above the rest. As both
                a technician and Porsche owner, Paul developed a deep
                appreciation for the engineering, heritage, and driving
                experience that make Porsche unlike anything else on the road.
              </p>

              <p>
                That passion only grew when he began tracking his own cars.
                What started as a love for driving evolved into a desire to
                build a shop dedicated exclusively to the cars he enjoyed
                working on most. Today, GTR Motorsport is that vision brought
                to life.
              </p>

          <p>
              More than a business, GTR is a place built by enthusiasts, for enthusiasts. Our
              team includes lifelong Porsche owners, former Porsche dealership technicians,
              racers, collectors, and individuals who genuinely live the Porsche lifestyle.
             
            </p>

              <div className="border-l-4 border-[#C00000] pl-6">
                <p className="text-[20px] italic leading-9 text-white">
                  We believe exceptional workmanship starts with genuine
                  enthusiasm. Every Porsche that enters our shop is treated with
                  the same level of care and attention we'd give our own.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className=" self-start">

            <div className="overflow-hidden rounded-sm border border-[#1B1B1B] shadow-2xl">

              <img
                src={storyImage}
                alt="GTR Motorsport"
                className="block h-[760px] w-full object-cover object-center"
              />

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-20 grid overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#1B1B1B] md:grid-cols-4">

          {[
            {
              value: "30+",
              label: "Years of Experience",
            },
            {
              value: "100%",
              label: "Exclusively Porsche",
            },
            {
              value: "Enthusiast",
              label: "Owned & Operated",
            },
            {
              value: "Track",
              label: "Inspired Craft",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border-b border-[#1B1B1B] bg-[#0A0A0A] px-8 py-10 text-center transition duration-300 hover:bg-[#111111] md:border-b-0 md:border-r last:border-r-0"
            >
              <h3 className="font-oswald text-[34px] uppercase text-[#C00000]">
                {item.value}
              </h3>

              <p className="mt-3 font-inter text-[12px] uppercase tracking-[0.22em] text-white/70">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}