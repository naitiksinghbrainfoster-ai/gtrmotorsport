export default function MissionSection() {
  return (
    <section className="bg-[#050505] py-5 lg:py-5 ">
      <div className="mx-auto max-w-[1450px] px-5 lg:px-8 mt-25">

        {/* Top */}
        <div className="mb-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              OUR PURPOSE
            </span>

            <div className="h-px w-14 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[30px] font-bold uppercase text-white md:text-[40px]">
            More Than A Porsche Shop
          </h2>

          <p className="mx-auto mt-8 max-w-[850px] font-inter text-[18px] leading-9 text-[#A8A8A8]">
            GTR Motorsport exists for something greater than building fast
            cars. We believe every talent, every opportunity and every
            customer is a gift from God, and we strive to honor Him through
            exceptional workmanship, honesty and service.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">

          {/* Left */}
          <div>

            <h3 className="font-oswald text-[36px] font-bold uppercase leading-tight text-white md:text-[52px]">
              Grace Before
              <br />
              Horsepower.
            </h3>

            <p className="mt-8 font-inter text-[18px] leading-9 text-[#9E9E9E]">
              GTR stands for <strong className="text-white">Grace To Race</strong>.
              Our name represents the belief that excellence begins with
              character. Every Porsche that enters our shop is treated with
              the same care, precision and respect that we would give our
              own vehicle.
            </p>

            <p className="mt-8 font-inter text-[18px] leading-9 text-[#9E9E9E]">
              Whether we're performing factory maintenance, diagnosing
              complex issues or building a race engine, our commitment
              remains the same — do every job with integrity and pursue
              excellence in everything we do.
            </p>

          </div>

          {/* Right */}
          <div className="rounded-sm border border-[#1B1B1B] bg-[#0B0B0B] p-8 md:p-12">

            <h4 className="font-oswald text-[30px] font-bold uppercase text-white">
              Our Mission
            </h4>

            <p className="mt-5 font-inter text-[22px] italic leading-10 text-white">
              "Driven by Excellence.
            
              Guided by Faith.
      
              Built for Performance."
            </p>

            <div className="my-5 h-px w-full bg-[#222]" />

            <p className="font-inter text-[17px] leading-8 text-[#A5A5A5]">
              Everything we do is rooted in honesty, craftsmanship and a
              commitment to serving others. We believe our work reflects
              our faith, and every completed project is an opportunity to
              glorify God through excellence.
            </p>

            <div className="mt-10 border-l-2 border-[#C00000] pl-6">

              <p className="font-inter text-[20px] italic leading-9 text-white">
                "Whatever you do, work at it with all your heart, as working
                for the Lord."
              </p>

              <p className="mt-5 font-inter text-[14px] font-semibold uppercase tracking-[0.3em] text-[#C00000]">
                Colossians 3:23
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}