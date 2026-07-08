import paulImage from "../../assets/img/about/storyimg.jpg";

export default function MeetPaulSection() {
  return (
    <section className="bg-black py-10 lg:py-0">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">

        {/* Left Image */}

        <div className="relative">

          <img
           src={paulImage}
            alt="Paul Chahal"
            className="h-[720px] w-full rounded-sm object-cover"
          />

          {/* Founder Card */}

          <div className="absolute bottom-8 left-8 border border-white/10 bg-black/80 p-8 backdrop-blur-sm">

            <p className="font-inter text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
              Founder
            </p>

            <h3 className="mt-3 font-oswald text-[34px] uppercase text-white">
              Paul Chahal
            </h3>

            <p className="mt-2 font-inter text-[16px] text-[#B5B5B5]">
              Grace To Race
            </p>

          </div>

        </div>

        {/* Right Content */}

        <div>

          {/* Label */}

          <div className="mb-2 flex items-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Meet Paul
            </span>

          </div>

          {/* Heading */}

          <h2 className="font-oswald text-[42px] font-bold uppercase leading-[1.08] text-white md:text-[38px] xl:text-[42px]">
            More Than
            
            Three Decades
            <br />
            Of Passion.
          </h2>

          {/* Paragraphs */}

          <p className="mt-5 font-inter text-[18px] leading-9 text-[#A8A8A8]">
            Paul Chahal has spent more than thirty years working on
            European automobiles, developing a reputation for precision,
            honesty and uncompromising workmanship.
          </p>

          <p className="mt-5 font-inter text-[18px] leading-9 text-[#A8A8A8]">
            His passion for Porsche, motorsport and engineering naturally
            evolved into GTR Motorsport — a company dedicated exclusively
            to Porsche performance, diagnostics, engine building and
            track preparation.
          </p>

          <p className="mt-5 font-inter text-[18px] leading-9 text-[#A8A8A8]">
            Paul's journey is also rooted in his Christian faith. He
            believes every opportunity is a gift from God, and every
            vehicle entrusted to GTR Motorsport deserves the highest level
            of care, integrity and craftsmanship.
          </p>

          {/* Highlights */}

          <div className="mt-5 grid gap-6 sm:grid-cols-2">

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-5">
              <h4 className="font-oswald text-[24px] uppercase text-white">
                30+ Years
              </h4>

              <p className="mt-3 font-inter text-[15px] leading-7 text-[#A8A8A8]">
                European automotive experience.
              </p>
            </div>

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-6">
              <h4 className="font-oswald text-[24px] uppercase text-white">
                Porsche Specialist
              </h4>

              <p className="mt-3 font-inter text-[15px] leading-7 text-[#A8A8A8]">
                Performance, diagnostics and motorsport.
              </p>
            </div>

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-6">
              <h4 className="font-oswald text-[24px] uppercase text-white">
                Faith First
              </h4>

              <p className="mt-3 font-inter text-[15px] leading-7 text-[#A8A8A8]">
                Guided by integrity and Christian values.
              </p>
            </div>

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-6">
              <h4 className="font-oswald text-[24px] uppercase text-white">
                GTR Vision
              </h4>

              <p className="mt-3 font-inter text-[15px] leading-7 text-[#A8A8A8]">
                Grace To Race — excellence in every Porsche.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}