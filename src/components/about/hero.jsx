import aboutHero from "../../assets/img/about/heroabout.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] items-center overflow-hidden bg-black">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Left Gradient */}
      <div
        className="absolute inset-0"
        style={{
           background:
  "linear-gradient(90deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.9) 28%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.25) 72%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">

        {/* Label */}
        <div className="mb-6 flex items-center gap-4">

          <div className="h-[2px] w-10 sm:w-14 bg-[#C00000]" />

          <span className="font-inter text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
            About GTR Motorsport
          </span>

        </div>

        {/* Heading */}
        <h1
          className="
            max-w-[760px]
            font-oswald
            font-bold
            uppercase
            leading-[1.05]
            text-white

            text-[42px]
            sm:text-[42px]
            md:text-[48px]
            lg:text-[48px]
            xl:text-[54px]
          "
        >
          Built On Faith.
          <br />
          Driven By Porsche.
        </h1>

        {/* Paragraph */}
        <p
          className="
            mt-8
            max-w-[650px]
            font-inter
            text-[16px]
            sm:text-[17px]
            md:text-[18px]
            lg:text-[19px]
            leading-[1.9]
            text-[#B8B8B8]
          "
        >
          More than three decades of European automotive excellence,
          dedicated exclusively to Porsche service, performance,
          motorsport and precision engine building.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/contact"
            className="bg-[#C00000] px-7 py-3.5 sm:px-8 sm:py-4 font-oswald text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#D50000]"
          >
            Schedule Service
          </a>

          <a
            href="#our-story"
            className="border border-[#444] px-7 py-3.5 sm:px-8 sm:py-4 font-oswald text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:border-[#C00000] hover:bg-[#C00000]"
          >
            Our Story
          </a>

        </div>

      </div>

    </section>
  );
}