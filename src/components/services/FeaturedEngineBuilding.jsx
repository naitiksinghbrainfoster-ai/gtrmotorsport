import EngineService from "../../assets/img/service/engineservice1.jpg";
import {
  CheckCircle2,
  ArrowRight,
  Gauge,
  Wrench,
  Cpu,
  ShieldCheck,
} from "lucide-react";


const features = [
  "Complete Engine Rebuilds",
  "Performance Engine Builds",
  "IMS Bearing Inspections",
  "Cylinder Head Services",
  "Precision Assembly",
  "Track & Motorsport Ready",
];

const highlights = [
  {
    icon: Gauge,
    title: "Performance",
  },
  {
    icon: Cpu,
    title: "Factory Precision",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
  },
];

export default function FeaturedEngineBuilding() {
  return (
    <section className="bg-[#050505] py-16 sm:py-10 lg:py-12">
      <div
        className="
          mx-auto
          grid
          max-w-[1550px]
          items-center
          gap-14
          lg:gap-20
          px-5
          sm:px-6
          lg:grid-cols-[1.1fr_0.9fr]
          lg:px-8
        "
      >
        {/* LEFT */}
        <div>
          {/* Label */}
          <div className="mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
            <div className="h-[2px] w-8 sm:w-14 bg-[#C00000]" />

            <span className="font-inter text-[22px] sm:text-[22px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C00000]">
              Featured Service
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-oswald
              font-bold
              uppercase
              leading-[1.05]
              text-white
              text-[34px]
              sm:text-[40px]
              md:text-[40px]
              lg:text-[48px]
            "
          >
            Porsche  
           
            Engine
            <br />
            Services
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              sm:mt-8
              lg:mt-10
              max-w-[700px]
              font-inter
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]
              leading-7
              sm:leading-8
              lg:leading-8
              text-white
            "
          >
           GTR Motorsport specializes in rebuilding, restoring, and servicing Porsche engines 
across multiple generations. From classic air-cooled models to modern GT and 
Turbo platforms, every engine is built and serviced with the precision these 
vehicles demand.
         
          
          </p>

           <p
            className="
              mt-6
              sm:mt-8
              lg:mt-2
              max-w-[700px]
              font-inter
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]
              leading-7
              sm:leading-8
              lg:leading-8
              text-white
            "
          >
           Our capabilities include complete engine rebuilds, cylinder head restoration, IMS 
bearing solutions, timing component service, oil leak repair, cooling system 
repairs, and custom engine builds tailored to your vehicle and driving goals. We 
also perform mechanical restoration of classic Porsche engines and related 
components, preserving the reliability and character of these iconic cars.
Whether you're maintaining a street-driven Porsche, restoring a classic, or 
preparing a dedicated track car, our team delivers specialized engine services 
backed by decades of Porsche experience.
          </p>

          {/* Features */}
          {/* <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 sm:gap-4"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#C00000] flex-shrink-0"
                />

                <span className="font-inter text-[14px] sm:text-[16px] text-[#D5D5D5]">
                  {item}
                </span>
              </div>
            ))}
          </div> */}

          {/* Button */}
          <a
            href="/contact"
            className="
              mt-10
              sm:mt-14
              inline-flex
              w-full
              sm:w-auto
              items-center
              justify-center
              gap-3
              bg-[#C00000]
              px-8
              py-4
              font-oswald
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white
              transition-all
              duration-300
              hover:bg-[#A00000]
              hover:scale-[1.03]
            "
          >
            schedule appointment 

            <ArrowRight size={18} />
          </a>
        </div>

        {/* RIGHT START */}
        <div className="relative overflow-hidden rounded-sm">
                    <img
            src={EngineService}
            alt="Porsche Engine Building"
            className="
              h-[420px]
              sm:h-[560px]
              md:h-[650px]
              lg:h-[760px]
              w-full
              object-cover
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 " />

          {/* Floating Card */}
          {/* <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              sm:bottom-6
              sm:left-6
              sm:right-6
              lg:bottom-8
              lg:left-8
              lg:right-8
              rounded-sm
              border
              border-white/10
              bg-black/85
              p-4
              sm:p-6
              lg:p-8
              backdrop-blur-md
            "
          >
            <p className="font-inter text-[10px] sm:text-[12px] uppercase tracking-[0.35em] text-[#C00000]">
              Engine Building Philosophy
            </p>

            <h3
              className="
                mt-4
                sm:mt-5
                font-oswald
                uppercase
                leading-tight
                text-white
                text-[24px]
                sm:text-[30px]
                lg:text-[36px]
              "
            >
              Built For
              <br />
              Performance.
              <br />
              Built To Last.
            </h3>
<div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
  {highlights.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="
          flex
          items-center
          gap-2
          sm:gap-3
          rounded
          border
          border-white/10
          bg-white/5
          p-3
          sm:p-4
        "
      >
        <Icon
          size={18}
          className="flex-shrink-0 text-[#C00000]"
        />

        <span className="font-inter text-[13px] sm:text-[15px] leading-snug text-white">
          {item.title}
        </span>
      </div>
    );
  })}
</div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
            