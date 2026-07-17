import Thumbnail from "../../assets/img/service/thumbnail.JPG";

export default function MotorsportSection() {
  return (
    <section className="relative overflow-hidden bg-black py-14 lg:py-16">

      <div className="absolute -right-60 top-20 h-[500px] w-[500px] rounded-full bg-[#C00000]/20 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 lg:px-8">

       <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12">

          <div className="flex flex-col items-start text-left">

            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-14 bg-[#C00000]" />
              <span className="font-inter text-[22px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                Motorsport Division
              </span>
            </div>

            <h2 className="font-oswald text-[30px] font-bold uppercase leading-[1.02] text-white md:text-[32px] xl:text-[40px]">
              Built
              For The
            
              Track.
            </h2>

            <p className="mt-10 font-inter text-[18px] leading-8 text-white">
              Motorsport isn't just another service we offer — it's where
              much of our experience was built. Every track-prepared Porsche
              reflects years of hands-on testing, development, and time
              behind the wheel.
            </p>

            <p className="mt-8 font-inter text-[18px] leading-8 text-white">
              Before GTR Motorsport became a dedicated Porsche shop, our team was already 
building and driving Porsche track cars. From Boxsters and Caymans to GT 
models, we've spent years refining suspension setups, improving reliability, 
reducing weight, and learning what makes a Porsche perform consistently under 
demanding conditions.
That same experience is applied to every customer vehicle. Whether you're 
getting ready for your first HPDE event, chasing faster lap times, or building a 
dedicated track car, we develop a package that's tailored to your goals while 
maintaining the reliability and drivability Porsche is known for
            </p>

            <div className="mt-16 flex flex-wrap gap-5">
              <a href="/contact" className="bg-[#C00000] px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition hover:bg-[#A00000]">
                schedule appointment
              </a>
              <a href="/gallery" className="inline-flex items-center gap-3 border border-white/20 px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition hover:border-[#C00000]">
                View Gallery
              </a>
            </div>

          </div>

         <div className="relative flex h-full min-h-[700px] w-full overflow-hidden rounded-sm">
           <img
  src={Thumbnail}
  alt="Porsche on track"
  className="h-full w-full object-cover object-center"
/>
          </div>

        </div>

      </div>
    </section>
  );
}