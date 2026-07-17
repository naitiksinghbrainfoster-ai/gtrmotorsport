import timeline1 from "../../assets/img/about/1990s.jpg";
import timeline2 from "../../assets/img/about/Porsche.jpg";
import timeline3 from "../../assets/img/about/Grace.jpg";
import timeline4 from "../../assets/img/about/Driven.jpg";

export default function TimelineSection() {
  const timeline = [
    {
      year: "1990s",
      title: "WHERE IT ALL BEGAN",
      description:
        "Paul Chahal began his career more than 30 years ago specializing in European automotive repair. Through decades of hands-on experience, he built a reputation for precision workmanship, technical expertise, and honest service while working on some of Europe's finest automobiles.",
      image: timeline1,
    },
    {
      year: "30+ Years",
      title: "A GROWING PASSION",
      description:
        "Over the years, one marque continued to stand above the rest. What began as servicing Porsche vehicles quickly grew into a genuine passion for owning, driving, collecting, and understanding them. As Paul became more involved in the Porsche community and began tracking his own cars, that passion only continued to grow.",
      image: timeline2,
    },
    {
      year: "GTR Motorsport",
      title: "A DEDICATED VISION",
      description:
        "After decades of building experience through Autowerks European, Paul realized he wanted to dedicate his time to the cars he enjoyed working on most. GTR Motorsport was founded as the Porsche-exclusive division of Autowerks European—a place where every service, restoration, engine build, and track preparation is centered around one marque.",
      image: timeline3,
    },
    {
      year: "Today",
      title: "BUILT BY ENTHUSIASTS",
      description:
        "Today, GTR Motorsport is powered by a team of people who share the same passion. Our technicians include former Porsche dealership professionals, Porsche owners, collectors, racers, and lifelong enthusiasts who genuinely live the Porsche lifestyle. Whether you're visiting for routine maintenance, a complete restoration, or a track-focused build, your Porsche is cared for by people who appreciate it as much as you do.",
      image: timeline4,
    },
  ];

  return (
    <section className="bg-[#050505] py-0 lg:py-0">
      <div className="mx-auto max-w-[1450px] px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-10 max-w-[1900px]">
          <div className="mb-6 flex items-center gap-4">
            {/* <div className="h-px w-14 bg-[#C00000]" /> */}

            <span className="font-inter text-[28px] font-semibold uppercase tracking-[0.4em] text-[#C00000]">
              OUR JOURNEY
            </span>

            {/* <div className="h-px w-14 bg-[#C00000]" /> */}
          </div>

          {/* <h2 className="font-oswald text-[22px] font-bold uppercase leading-none text-white md:text-[28px]">
            The GTR Story
          </h2> */}

          <p className="mt-2 max-w-[1760px] font-inter text-[18px] leading-8 text-white">
            More than three decades of European automotive expertise led to one clear vision: 
creating a shop dedicated exclusively to Porsche. Built on passion, craftsmanship, 
integrity, and faith, GTR Motorsport is where Porsche owners can expect 
specialized expertise from people who genuinely share their enthusiasm for the 
marque.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-14">
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
                <span className="font-oswald text-[32px] uppercase tracking-[0.3em] text-[#C00000]">
                  {item.year}
                </span>

                <h3 className="mt-5 font-oswald text-[24px] font-bold uppercase leading-tight text-white md:text-[24px]">
                  {item.title}
                </h3>

                <p className="mt-4 font-inter text-[18px] leading-9 text-white">
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