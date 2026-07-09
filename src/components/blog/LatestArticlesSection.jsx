import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";
import blogArticles from "../../data/blogArticles";

export default function LatestArticlesSection() {
  return (
    <section
      id="articles"
      className="bg-black py-14 lg:py-12"
    >
      <div className="mx-auto max-w-[1550px] px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-4">

            <div className="h-px w-12 bg-[#C00000]" />

            <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C00000]">
             Blogs
            </span>

            <div className="h-px w-12 bg-[#C00000]" />

          </div>

          <h2 className="font-oswald text-[38px] font-semibold uppercase text-white md:text-[54px]">
            Porsche Knowledge Hub
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] font-inter text-[17px] leading-8 text-[#A8A8A8]">
            Explore expert insights covering Porsche maintenance,
            diagnostics, engine building, performance upgrades and
            motorsport preparation.
          </p>

        </motion.div>

        {/* Articles */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {blogArticles.map((article, index) => (

            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-sm border border-[#1B1B1B] bg-[#080808] transition duration-500 hover:-translate-y-3 hover:border-[#C00000]"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <span className="inline-block rounded-full border border-[#C00000]/40 bg-[#C00000]/10 px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C00000]">
                  {article.category}
                </span>

                <div className="mt-6 flex flex-wrap items-center gap-5">

                  <div className="flex items-center gap-2 text-[13px] text-[#888] font-inter">

                    <CalendarDays size={15} />

                    {article.date}

                  </div>

                  <div className="flex items-center gap-2 text-[13px] text-[#888] font-inter">

                    <Clock3 size={15} />

                    {article.read}

                  </div>

                </div>

                <h3 className="mt-6 font-oswald text-[30px] font-medium uppercase leading-[1.2] text-white transition group-hover:text-[#C00000]">
                  {article.title}
                </h3>

          <p className="mt-5 font-inter text-[16px] leading-8 text-[#A8A8A8]">
  Learn practical insights from our Porsche specialists,
  helping you maintain, improve and enjoy your Porsche
  with confidence.
</p>

                <Link
                  to={`/blog/${article.slug}`}
                  className="mt-8 inline-flex items-center gap-3 font-oswald text-[14px] uppercase tracking-[0.15em] text-[#C00000]"
                >
                  Read Article

                  <ArrowRight size={17} />

                </Link>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}