import footerLogo from "../assets/logo/logo1.svg";
import { MapPin, Phone, Mail } from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505] text-white">
      <div className="mx-auto max-w-[1550px] px-6 py-15 lg:px-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.8fr_.8fr_1fr]">

          {/* Left */}
          <div>

           <img
  src={footerLogo}
  alt="GTR Motorsport"
  className="w-[260px] h-auto object-contain"
/>

            <p className="mt-10 max-w-[650px] font-inter text-[20px] leading-[1.6] text-white">
             GTR Motorsport is the Porsche-exclusive division of Autowerks European, 
providing specialized maintenance, diagnostics, performance, restoration, and 
motorsport support for Porsche owners
            </p>

            {/* <p className="mt-8 font-inter text-[18px] italic leading-[1.7] text-[#777777]">
              “Whatever you do, work at it with all your heart, as
              working for the Lord.” — Colossians 3:23
            </p> */}

          </div>

          {/* Navigation */}
          <div>

            <h4 className="font-oswald text-[20px] font-semibold uppercase tracking-[1px] text-white">
              Navigate
            </h4>

           <ul className="mt-10 space-y-6">
  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      Factory Maintenance
    </a>
  </li>

  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      PIWIS Diagnostics
    </a>
  </li>

  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      Engine Service & Repair
    </a>
  </li>

  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      Performance Upgrades
    </a>
  </li>

  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      Suspension Setup & Alignment
    </a>
  </li>

  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      Track Preparation
    </a>
  </li>

  <li>
    <a
      href="/services"
      className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
    >
      Engine Rebuilding
    </a>
  </li>
</ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-oswald text-[20px] font-semibold uppercase tracking-[1px] text-white">
              Visit Our Shop
            </h4>

            <div className="mt-10 space-y-8">

              {/* Address */}
              <div className="flex items-start gap-5">

                <MapPin
                  size={22}
                  className="mt-1 shrink-0 text-[#D50000]"
                />

                <p className="font-inter text-[18px] leading-[1.6] text-[#9B9B9B]">
                  GTR Motorsport   2157 San Ramon Valley Blvd , San Ramon CA 94583
                </p>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">

                <Phone
                  size={22}
                  className="shrink-0 text-[#D50000]"
                />

                <a
                  href="tel:+19253366470"
                  className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
                >
                  +1 (925) 336-6470
                </a>

              </div>

              {/* Email */}
              <div className="flex items-center gap-5">

                <Mail
                  size={22}
                  className="shrink-0 text-[#D50000]"
                />

                <a
                  href="mailto:info@gtrmotorsport.com"
                  className="font-inter text-[18px] text-[#9B9B9B] transition hover:text-white"
                >
                  info@gtrmotorsport.com
                </a>

              </div>

            </div>

            {/* Social Icons */}
<div className="mt-12 flex gap-4">
  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center border border-[#2B2B2B] transition duration-300 hover:border-[#D50000] hover:bg-[#D50000]"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center border border-[#2B2B2B] transition duration-300 hover:border-[#D50000] hover:bg-[#D50000]"
  >
    <FaYoutube size={18} />
  </a>

  <a
    href="#"
    className="flex h-12 w-12 items-center justify-center border border-[#2B2B2B] transition duration-300 hover:border-[#D50000] hover:bg-[#D50000]"
  >
    <FaFacebookF size={18} />
  </a>
</div>

          </div>

        </div>

                {/* Bottom */}
        <div className="mt-20 border-t border-[#1B1B1B] pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            {/* Copyright */}
            <p className="font-inter text-[14px] text-[#7A7A7A]">
              © 2026 GTR Motorsport. All rights reserved.
            </p>

            {/* Disclaimer */}
            <p className="text-center font-inter text-[12px] uppercase tracking-[0.35em] text-[#6F6F6F] lg:text-right">
              NOT AFFILIATED WITH DR. ING. H.C. F. PORSCHE AG.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}