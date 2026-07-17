import aboutHero from "../../assets/img/about/heroabout.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] sm:min-h-[82vh] lg:min-h-[92vh] overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-black/10" />

      {/* Left Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.90) 28%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.25) 72%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          w-full
          max-w-[1400px]
          items-end
          px-5
          sm:px-8
          lg:px-12
          pt-28
          sm:pt-36
          lg:pt-44
          pb-10
          sm:pb-16
          lg:pb-24
        "
      >
        <div className="max-w-[760px]">
          {/* Label */}
          <div className="mb-5 flex items-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-14 bg-[#C00000]" />

            <span className="font-inter text-[22px] sm:text-[22px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C00000]">
              About GTR Motorsport
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-oswald
              font-bold
      
              leading-[1.08]
              text-white
              text-[18px]
              sm:text-[18px]
              md:text-[25px]
              lg:text-[26px]
              xl:text-[32px]
            "
          >
           Built For Porsche Owners
          </h1>

          {/* Paragraph */}
          <p
            className="
              mt-2
              max-w-full
              sm:max-w-[620px]
              lg:max-w-[660px]
              font-inter
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]
              leading-[1.8]
              text-[#fff]
            "
          >
           GTR Motorsport is the Porsche-exclusive division of Autowerks European. Created 
for enthusiasts who expect more than routine service, we combine decades of 
European automotive experience with specialized Porsche knowledge to deliver 
expert maintenance, restoration, performance, and motorsport support.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="
                w-full
                sm:w-auto
                text-center
                bg-[#C00000]
                px-8
                py-4
                font-oswald
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-300
                hover:bg-[#D50000]
                hover:scale-[1.03]
              "
            >
             schedule appointment 
            </a>

            <a
              href="#our-story"
              className="
                w-full
                sm:w-auto
                text-center
                border
                border-[#444]
                px-8
                py-4
                font-oswald
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-300
                hover:border-[#C00000]
                hover:bg-[#C00000]
                hover:scale-[1.03]
              "
            >
             Learn more 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}