import timeline1 from "../../assets/img/about/1990s.jpeg";
import timeline2 from "../../assets/img/about/Porsche.jpeg";
import timeline3 from "../../assets/img/about/Grace.jpeg";
import timeline4 from "../../assets/img/about/Driven.jpeg";

export default function TimelineSection() {
  const timeline = [
    {
      year: "1990s",
      title: "The Beginning",
      description:
        "Paul began his journey in European automotive repair, developing a passion for precision engineering and performance vehicles. Years of hands-on experience laid the foundation for what would later become GTR Motorsport.",
      image: timeline1,
    },
    {
      year: "30+ Years",
      title: "Porsche Expertise",
      description:
        "After decades specializing in European automobiles, Porsche became the primary focus. Factory-level diagnostics, meticulous workmanship, and motorsport experience defined the next chapter.",
      image: timeline2,
    },
    {
      year: "GTR Motorsport",
      title: "Grace To Race",
      description:
        "GTR Motorsport was founded as the dedicated Porsche performance division of Autowerks European Inc., combining faith, engineering excellence and motorsport passion into one purpose-driven brand.",
      image: timeline3,
    },
    {
      year: "Today",
      title: "Driven By Excellence",
      description:
        "Today GTR Motorsport provides Porsche maintenance, diagnostics, engine building, track preparation and performance upgrades while remaining committed to integrity, craftsmanship and faith.",
      image: timeline4,
    },
  ];

  return (
    <section className="bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto max-w-[1450px] px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.4em] text-[#C00000]">
              Our Journey
            </span>

            <div className="h-px w-14 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[38px] font-bold uppercase leading-none text-white md:text-[38px]">
            The GTR Story
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-8 text-[#9A9A9A]">
            More than three decades of European automotive excellence,
            culminating in a Porsche-focused performance and motorsport
            facility built on faith, integrity and craftsmanship.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-sm border border-[#1A1A1A]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[360px] lg:h-[480px]"
                />
              </div>

              {/* Content */}
              <div>
                <span className="font-oswald text-[18px] uppercase tracking-[0.35em] text-[#C00000]">
                  {item.year}
                </span>

                <h3 className="mt-5 font-oswald text-[34px] font-bold uppercase leading-tight text-white md:text-[48px]">
                  {item.title}
                </h3>

                <p className="mt-8 font-inter text-[18px] leading-9 text-[#A4A4A4]">
                  {item.description}
                </p>

                <div className="mt-10 h-px w-24 bg-[#C00000]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}