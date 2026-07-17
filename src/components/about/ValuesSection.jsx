import {
  Cross,
  ShieldCheck,
  Award,
  HeartHandshake,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Cross,
    title: "Faith",
    text: "Jesus Christ is at the center of everything we do. Every opportunity, every customer and every success is viewed as a blessing entrusted to us by God.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Integrity",
    text: "We believe in honest recommendations, complete transparency and treating every Porsche as if it were our own.",
  },
  {
    number: "03",
    icon: Award,
    title: "Excellence",
    text: "From routine maintenance to race-engine builds, we pursue the highest standards of craftsmanship and precision.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Passion",
    text: "Porsche is more than our specialty—it's our passion. We love performance, motorsport and engineering excellence.",
  },
  {
    number: "05",
    icon: Users,
    title: "Relationships",
    text: "We believe long-term relationships are built through trust, communication and consistently exceeding expectations.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-black py-24 lg:py-12">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-20 text-center">

          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Core Values
            </span>

            <div className="h-px w-14 bg-[#C00000]" />
          </div>

          <h2 className="font-oswald text-[40px] font-bold uppercase text-white md:text-[40px]">
            What Drives Us
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-9 text-white">
            Every decision we make is guided by these core values. They define
            who we are, how we serve our customers and why GTR Motorsport
            exists.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden border border-[#1E1E1E] bg-[#080808] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C00000]"
              >
                {/* Number */}

                <div className="absolute right-8 top-8 font-oswald text-[72px] font-bold leading-none text-[#171717] transition group-hover:text-[#2B0000]">
                  {item.number}
                </div>

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#2B2B2B] transition group-hover:border-[#C00000] group-hover:bg-[#C00000]">
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-10 font-oswald text-[32px] font-bold uppercase text-white">
                  {item.title}
                </h3>

                {/* Text */}

                <p className="mt-6 font-inter text-[17px] leading-8 text-white">
                  {item.text}
                </p>

                {/* Bottom Line */}

                <div className="mt-10 h-[2px] w-14 bg-[#C00000] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}