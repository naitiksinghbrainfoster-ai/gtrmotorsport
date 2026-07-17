import Gallery1 from "../../assets/img/about/Performance.jpeg";
import Gallery2 from "../../assets/img/about/Engine.jpg";
import Gallery3 from "../../assets/img/about/Track.jpg";
import Gallery4 from "../../assets/img/about/Featured.jpg";


const gallery = [
  {
    image:Gallery1,
    title: "Inside the Shop",
  },
  {
    image:Gallery2,
    title: "Engine Builds",
  },
  {
    image:Gallery3,
    title: "Track Days",
  },
  {
    image:Gallery4,
    title: "Featured Porsches",
  },

];

export default function GallerySection() {
  return (
    <section className="bg-[#050505] py-10 lg:py-14">
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <div className="mb-20 text-center">

          <div className="mb-6 flex items-center justify-center gap-4">

            <div className="h-px w-14 bg-[#C00000]" />

            <span className="font-inter text-[13px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
              Gallery
            </span>

            <div className="h-px w-14 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[42px] font-bold uppercase text-white md:text-[60px]">
            Inside GTR Motorsport
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] font-inter text-[18px] leading-9 text-white">
            Every Porsche tells a different story. From routine maintenance and engine 
rebuilds to complete restorations and track-focused builds, here's a look inside 
the workshop where passion meets precision.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Large Image */}

          <div className="group relative overflow-hidden rounded-sm xl:col-span-2 xl:row-span-2">

            <img
              src={gallery[0].image}
              alt={gallery[0].title}
              className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="font-inter text-[13px] uppercase tracking-[0.35em] text-[#C00000]">
                Featured
              </span>

              <h3 className="mt-3 font-oswald text-[42px] uppercase text-white">
                {gallery[0].title}
              </h3>

            </div>

          </div>

          {/* Small Images */}

          {gallery.slice(1).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6">

                <h4 className="font-oswald text-[24px] uppercase text-white">
                  {item.title}
                </h4>

                <div className="mt-3 h-[2px] w-10 bg-[#C00000] transition-all duration-500 group-hover:w-20" />

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 flex justify-center">

          <a
            href="/gallery"
            className="border border-[#C00000] px-10 py-4 font-oswald text-[15px] uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#C00000]"
          >
            View Full Gallery
          </a>

        </div>

      </div>
    </section>
  );
}