import paulImage from "../../assets/img/about/pualimg.jpg";

export default function MeetPaulSection() {
  return (
    <section className="bg-black py-10 lg:py-20">
      <div className="mx-auto grid max-w-[1500px] items-start gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">

        {/* Left Image */}

        <div className="relative ">

          <img
            src={paulImage}
            alt="Paul Chahal"
            className="aspect-[3/4] w-full rounded-sm object-cover object-top lg:aspect-[0.8/1]"
          />

          {/* Founder Card */}

          <div className="absolute bottom-8 left-8 border border-white/10 bg-black/80 p-8 backdrop-blur-sm">

            <p className="font-inter text-[22px] uppercase tracking-[0.35em] text-[#C00000]">
              Founder
            </p>

            <h3 className="mt-1 font-oswald text-[26px] uppercase text-white">
              Paul Chahal
            </h3>

            <p className="mt-2 font-inter text-[16px] text-white">
              Grace To Race
            </p>

          </div>

        </div>

        {/* Right Content */}

        <div>

          {/* Label */}

          <div className="mb-2 flex items-center gap-4">

        

            <span className="font-inter text-[28px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Meet Paul
            </span>

          </div>

          {/* Heading */}

          <h2 className="font-oswald text-[26px] font-bold leading-[1.1] text-white md:text-[34px] xl:text-[26px]">
           Three Decades of Craftsmanship
          </h2>

          {/* Paragraphs */}
<p className="mt-4 font-inter text-[18px] leading-8 text-white">
  For more than 30 years, Paul Chahal has owned and operated Autowerks European,
  earning the trust of enthusiasts through exceptional workmanship, technical
  expertise, and an unwavering commitment to doing things the right way.
  Throughout his career, he has worked on some of Europe's most prestigious
  automobiles, approaching every vehicle with the same level of precision,
  patience, and attention to detail.
</p>

<p className="mt-`4 font-inter text-[18px] leading-8 text-white">
  Those who know Paul know that he isn't interested in shortcuts. He believes
  every repair should be completed correctly, every diagnosis should be
  thorough, and every customer deserves honest advice—even when it's not the
  easiest answer. That philosophy has become the foundation of both his work
  and the reputation he has built over three decades.
</p>

<p className="mt-5 font-inter text-[18px] leading-8 text-white">
  Over the years, Porsche became more than just another brand. Its engineering,
  racing heritage, and unmistakable driving experience sparked a passion that
  extended far beyond the workshop. Whether driving on the road, spending time
  at the track, or studying the engineering behind each model, Paul found
  himself continually drawn back to Porsche. Creating GTR Motorsport was the
  natural next step—a place dedicated entirely to the marque he has admired
  throughout his career.
</p>

<p className="mt-5 font-inter text-[18px] leading-8 text-white">
  Above all, Paul's Christian faith influences the way he leads his business
  and serves his customers. It shapes his commitment to honesty, humility,
  integrity, and treating every person with respect. Those values continue to
  define the culture of GTR Motorsport today. Every vehicle that enters the shop
  is cared for with the same dedication and respect he would give his own,
  ensuring every customer experiences the highest standard of craftsmanship and
  service.
</p>
          {/* Highlights */}

          {/* <div className="mt-5 grid gap-6 sm:grid-cols-2">

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-5">
              <h4 className="font-oswald text-[20px] uppercase text-white">
                30+ Years
              </h4>

              <p className="mt-2 font-inter text-[16px] leading-6 text-white">
                European automotive expertise.
              </p>
            </div>

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-6">
              <h4 className="font-oswald text-[20px] uppercase text-white">
               OWNER & FOUNDER
              </h4>

              <p className="mt-2 font-inter text-[16px] leading-6 text-white">
                Autowerks European & GTR Motorsport.
              </p>
            </div>

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-6">
              <h4 className="font-oswald text-[20px] uppercase text-white">
               PORSCHE ENTHUSIAST
              </h4>

              <p className="mt-2 font-inter text-[16px] leading-6 text-white">
                A passion built through decades behind the wheel and in the workshop
              </p>
            </div>

            <div className="border border-[#1B1B1B] bg-[#0A0A0A] p-6">
              <h4 className="font-oswald text-[20px] uppercase text-white">
                FAITH LED

              </h4>

              <p className="mt-2 font-inter text-[16px] leading-6 text-white">
                Business rooted in integrity, humility, and service.
              </p>
            </div>

          </div> */}

        </div>

      </div>
    </section>
  );
}
