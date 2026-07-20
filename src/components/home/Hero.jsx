import React, { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/img/home/hero-bg.jpg"; // swap in your actual image path


const STATS = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Porsche Focused" },
  { value: null, display: "PIWIS", label: "Factory Diagnostics" },
 
];

// Counts up from 0 to `value` once it scrolls into view
function StatNumber({ value, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Darker overlay: solid black on the left where the text sits, fading out on the right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
         background:
"linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 25%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.05) 100%)",
        }}
      />
      {/* Extra top-to-bottom darkening + solid black toward the stats bar at the bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
"linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 85%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Hero content */}
      <div
        className="gtr-hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5rem 4vw 3rem",
          maxWidth: "680px",
        }}
      >

        <h1
  className="gtr-anim"
  style={{
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
    lineHeight: 1,
    color: "#fff",
    textTransform: "uppercase",
    margin: "0 0 1.2rem 0",
    letterSpacing: "0.02em",
    animationDelay: "0.1s",
  }}
>
  PORSCHE <br />
  SPECIALISTS
</h1>
        

        <p
          className="gtr-hero-copy gtr-anim"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            lineHeight: 1.6,
            color: "#fff",
            margin: "2rem 0 0 0",
            maxWidth: "500px",
            animationDelay: "0.3s",
          }}
        >
          Porsche service, performance &amp; motorsport specialists. Three
          decades of European craftsmanship, dedicated exclusively to
          Porsche.
        </p>

        <a
          href="/contact"
          className="gtr-hero-cta gtr-anim"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            marginTop: "1.75rem",
           marginLeft: "0",
            padding: "0.9rem 2rem",
            background: "#e42020",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            animationDelay: "0.5s",
          }}
        >
         Book Service
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.55)",
          padding: "2.2rem 8vw",
        }}
      >
        <div
          className="gtr-stats-grid"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "#e42020",
                  lineHeight: 1,
                }}
              >
                {stat.value !== null ? (
                  <StatNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  marginTop: "0.4rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gtrFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gtr-anim {
          opacity: 0;
          animation: gtrFadeUp 0.8s ease-out forwards;
        }

        @media (max-width: 768px) {
          .gtr-hero-content { padding: 3.5rem 4vw 3rem; max-width: 100% !important; }
          .gtr-hero-copy { max-width: 100% !important; font-size: 0.95rem !important; margin-left: 0.6rem !important; }
          .gtr-hero-cta { padding: 0.8rem 1.5rem !important; font-size: 0.8rem !important; margin-left: 0.6rem !important; }
          .gtr-stats-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 1.8rem !important; }
        }
      `}</style>
    </section>
  );
}
