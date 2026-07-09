import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import blogArticles from "../../data/blogArticles";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl rounded-sm border border-[#1B1B1B] bg-[#080808] p-10 text-center">
          <h1 className="font-oswald text-3xl uppercase">Article not found</h1>
          <p className="mt-4 font-inter text-[#A8A8A8]">
            The post you are looking for is not available right now.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-3 font-oswald uppercase tracking-[0.15em] text-[#C00000]"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1250px] px-5 py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-[#C00000]/40 bg-[#C00000]/10 px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C00000]">
                {article.category}
              </span>
              <h1 className="mt-6 font-oswald text-4xl font-semibold uppercase leading-tight sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 max-w-2xl font-inter text-lg leading-8 text-[#D9D9D9]">
                {article.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#B8B8B8]">
                <div className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-[#C00000]" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 size={15} className="text-[#C00000]" />
                  {article.read}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1250px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 font-oswald text-sm uppercase tracking-[0.15em] text-[#C00000]"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-10">
            {article.sections.map((section, index) => (
              <article key={index} className="rounded-sm border border-[#1B1B1B] bg-[#080808] p-8 md:p-10">
                <h2 className="font-oswald text-2xl uppercase text-white">
                  {section.heading}
                </h2>
                <p className="mt-4 font-inter text-[16px] leading-8 text-[#A8A8A8]">
                  {section.paragraph}
                </p>
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 font-inter text-[15px] leading-7 text-[#D6D6D6]">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C00000]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <aside className="rounded-sm border border-[#1B1B1B] bg-[#080808] p-8 h-fit">
            <h3 className="font-oswald text-xl uppercase text-white">More from GTR</h3>
            <p className="mt-4 font-inter text-[15px] leading-7 text-[#A8A8A8]">
              Explore more Porsche performance guides, track preparation advice, and workshop insights from our team.
            </p>
            <div className="mt-8 space-y-4">
              {blogArticles.slice(0, 3).map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="block rounded-sm border border-[#1B1B1B] bg-black/40 p-4 transition hover:border-[#C00000]"
                >
                  <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#C00000]">
                    {item.category}
                  </p>
                  <h4 className="mt-2 font-oswald text-lg uppercase text-white">
                    {item.title}
                  </h4>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
