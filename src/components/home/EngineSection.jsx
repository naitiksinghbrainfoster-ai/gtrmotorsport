import { ArrowUpRight } from "lucide-react";
import engineImg from "../../assets/img/home/engine.jpg";

const features = [
  "Performance Engine Builds",
  "IMS Bearing Inspections",
  "Forged Internals",
  "Race-Spec Assembly",
];

export default function EngineSection() {
  return (
    <section className="bg-black border-y border-[#1b1b1b]">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 lg:grid-cols-2">

        {/* Left Image */}
        <div className="overflow-hidden">
          <img
            src={engineImg}
            alt="Engine Building"
            className="h-full min-h-[500px] w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex items-center px-8 py-20 lg:px-16 xl:px-24">
          <div className="max-w-[640px]">

            {/* Section Label */}
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[#D50000]" />
              <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#D50000]">
                Engine Building
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-oswald text-[34px] font-bold uppercase leading-[1.02] tracking-[0.5px] text-white xl:text-[36px]">
              Built By Hand.
              <br />
              Measured To The
              <br />
              Micron.
            </h2>

            {/* Paragraph */}
            <p className="mt-10 font-inter text-[18px] leading-[1.7] text-[#A7A7A7]">
              From IMS inspections on classic Mezgers to ground-up
              motorsport builds, our engine program is where mechanical
              engineering meets craftsmanship. We document every clearance, 
              every torque value, every part. Trust is earned in the details.
            </p>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 gap-y-7 gap-x-12 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-[10px] h-[7px] w-[7px] bg-[#D50000]" />

                  <span className="font-inter text-[16px] font-medium uppercase tracking-[0.05em] text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="group mt-14 inline-flex items-center gap-3 border border-[#404040] px-6 py-3 font-inter text-[12px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#D50000] hover:bg-[#D50000]">
              Explore Engine Program

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}