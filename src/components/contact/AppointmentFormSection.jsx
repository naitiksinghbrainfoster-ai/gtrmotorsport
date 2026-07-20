import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function AppointmentFormSection() {
  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-black py-14 lg:py-12"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#C00000]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-sm border border-[#1B1B1B] bg-[#050505] p-8 md:p-12"
        >

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            {/* LEFT */}

            <div>

              <span className="font-inter text-[16px] font-semibold uppercase tracking-[0.25em] text-[#C00000]">
                Appointment Request
              </span>

              <h2 className="mt-4 font-oswald text-[30px] font-semibold leading-tight text-white md:text-[38px]">
                Schedule An Appointment
              </h2>

              <p className="mt-6 font-inter text-[22px] leading- text-white">
                Complete the form and our team will contact you
                to confirm your appointment.
              </p>

              <p className="mt-5 font-inter text-[22px] leading- text-white">
                From routine maintenance and diagnostics to complete
                engine builds and track preparation, <br />
                we're here to help.
              </p>

            </div>

            {/* RIGHT */}

            <div>

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

                  Schedule Appointment
                </button>

              </form>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
