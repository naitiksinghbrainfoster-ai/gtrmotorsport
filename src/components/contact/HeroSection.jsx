import { Phone, Calendar, ArrowRight } from "lucide-react";
import Contacthero from "../../assets/img/contact/contacthero.png";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden pb-24 pt-36 sm:pb-28 sm:pt-40 lg:min-h-[85vh] lg:pb-24 lg:pt-32"
      style={{
         backgroundImage: `url(${Contacthero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.96) 0%, rgba(0,0,0,.82) 42%, rgba(0,0,0,.45) 100%)",
        }}
      />

      {/* Red Glow */}
      <div className="absolute -left-44 top-24 h-[500px] w-[500px] rounded-full bg-[#C00000]/20 blur-[180px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1550px] px-5 lg:px-8">
        <div className="max-w-[640px] lg:max-w-[720px]">
          {/* Label */}
          <div className="flex items-center gap-4">
            <div className="h-px w-14 shrink-0 bg-[#C00000]" />
            <span className="font-inter text-[16px] font-semibold uppercase tracking-[0.35em] text-[#C00000] sm:text-[16px]">
              Contact GTR Motorsport
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 font-oswald text-[30px] font-semibold uppercase leading-[1.05] text-white sm:text-[36px] sm:leading-[1] lg:text-[38px] lg:leading-[0.98]">
        
             Have Questions About Your 
            
            <br />
          Porsche?
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-[560px] font-inter text-[16px] leading-8 text-white sm:text-[18px] sm:leading-9">
            Whether you need routine maintenance, diagnostics, performance
            upgrades or motorsport preparation, our Porsche specialists are
            ready to help.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-11 sm:gap-5">
            <a
              href="tel:+19253366470"
              className="inline-flex items-center justify-center gap-3 bg-[#C00000] px-8 py-4 font-oswald text-[14px] uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#980000] sm:px-10 sm:py-5 sm:text-[15px]"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 font-oswald text-[14px] uppercase tracking-[0.18em] text-white transition duration-300 hover:border-[#C00000] hover:bg-white/5 sm:px-10 sm:py-5 sm:text-[15px]"
            >
              <Calendar size={18} />
              Book appointment 
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Bottom Text */}
          {/* <div className="mt-12 border-l-2 border-[#C00000] pl-5 sm:mt-16 sm:pl-6">
            <p className="font-oswald text-[22px] uppercase leading-tight text-white sm:text-[28px]">
              Experience The GTR Difference.
            </p>
            <p className="mt-3 max-w-[520px] font-inter text-[15px] leading-7 text-[#9E9E9E] sm:text-[16px] sm:leading-8">
              Call or text us today to discuss your Porsche service, repair,
              engine build or track preparation.
            </p>
          </div> */}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
