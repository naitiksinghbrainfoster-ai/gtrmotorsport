import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="border-y border-[#1B1B1B] bg-[#050505] py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1450px] flex-col items-center px-5 sm:px-6 lg:px-8 text-center">

        {/* Quote Icon */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <Quote
            strokeWidth={2}
            className="h-10 w-10 text-[#D50000] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />
        </div>

        {/* Quote */}
        <h2
          className="
            max-w-[1200px]
            font-oswald
            Semi-bold
            text-white
            leading-[1.35]
            tracking-[0.02em]
            text-[18px]
            sm:text-[22px]
            md:text-[24px]
            lg:text-[28px]
            xl:text-[30px]
          "
        >
          “Paul and the GTR team rebuilt my 997 GT3 engine to
          better-than-new spec. Every detail documented,
          every promise kept. They’re the only shop
          I trust with my car — on the street or on the grid.”
        </h2>

        {/* Author */}
        <div className="mt-10 md:mt-12 lg:mt-16 flex items-center gap-3 md:gap-5">

          <div className="h-px w-5 bg-[#8A8A8A]" />

          <p
            className="
              font-inter
              text-[11px]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
              font-semibold
              uppercase
              tracking-[0.2em]
              sm:tracking-[0.35em]
              text-[#8A8A8A]
            "
          >
            Marcus R. • 997 GT3 Cup Owner
          </p>

        </div>

      </div>
    </section>
  );
}