import { motion } from "framer-motion";
import {
  Calendar,
  Car,
  Wrench,
  Send,
} from "lucide-react";

export default function AppointmentFormSection() {
  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#C00000]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="mb-6 flex items-center gap-4">

              <div className="h-px w-12 bg-[#C00000]" />

              <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
                Appointment Request
              </span>

            </div>

            <h2 className="font-oswald text-[42px] font-semibold uppercase leading-[1.05] text-white md:text-[60px]">
              Schedule
              <br />
              Your Porsche
              <br />
              Service
            </h2>

            <p className="mt-8 font-inter text-[17px] leading-9 text-[#B5B5B5]">
              Complete the form and our team will contact you to confirm
              your appointment. Whether you need routine maintenance,
              diagnostics, performance upgrades or track preparation,
              we're here to help.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C00000]/10">

                  <Calendar
                    size={24}
                    className="text-[#C00000]"
                  />

                </div>

                <div>

                  <h4 className="font-oswald text-[24px] uppercase text-white">
                    Flexible Scheduling
                  </h4>

                  <p className="mt-2 font-inter text-[15px] leading-7 text-[#9E9E9E]">
                    Choose the most convenient time for your Porsche.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C00000]/10">

                  <Car
                    size={24}
                    className="text-[#C00000]"
                  />

                </div>

                <div>

                  <h4 className="font-oswald text-[24px] uppercase text-white">
                    Porsche Specialists
                  </h4>

                  <p className="mt-2 font-inter text-[15px] leading-7 text-[#9E9E9E]">
                    Maintenance, repairs, engine builds and motorsport.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C00000]/10">

                  <Wrench
                    size={24}
                    className="text-[#C00000]"
                  />

                </div>

                <div>

                  <h4 className="font-oswald text-[24px] uppercase text-white">
                    Expert Service
                  </h4>

                  <p className="mt-2 font-inter text-[15px] leading-7 text-[#9E9E9E]">
                    Precision workmanship backed by decades of experience.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="rounded-sm border border-[#1B1B1B] bg-[#080808] p-8 md:p-12"
          >

            <form className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 border border-[#1B1B1B] bg-black px-5 font-inter text-white outline-none transition focus:border-[#C00000]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 border border-[#1B1B1B] bg-black px-5 font-inter text-white outline-none transition focus:border-[#C00000]"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-14 border border-[#1B1B1B] bg-black px-5 font-inter text-white outline-none transition focus:border-[#C00000]"
                />

                <input
                  type="text"
                  placeholder="Porsche Model"
                  className="h-14 border border-[#1B1B1B] bg-black px-5 font-inter text-white outline-none transition focus:border-[#C00000]"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Vehicle Year"
                  className="h-14 border border-[#1B1B1B] bg-black px-5 font-inter text-white outline-none transition focus:border-[#C00000]"
                />

                <select className="h-14 border border-[#1B1B1B] bg-black px-5 font-inter text-[#9E9E9E] outline-none transition focus:border-[#C00000]">

                  <option>Service Required</option>
                  <option>Maintenance</option>
                  <option>Diagnostics</option>
                  <option>Engine Repair</option>
                  <option>Performance Upgrade</option>
                  <option>Suspension & Alignment</option>
                  <option>Track Preparation</option>
                  <option>Race Support</option>
                  <option>Engine Building</option>

                </select>

              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your Porsche and the service you're looking for..."
                className="w-full border border-[#1B1B1B] bg-black p-5 font-inter text-white outline-none transition focus:border-[#C00000]"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#C00000] px-10 py-5 font-oswald text-[15px] uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#980000]"
              >
                <Send size={18} />

                Request Appointment
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}