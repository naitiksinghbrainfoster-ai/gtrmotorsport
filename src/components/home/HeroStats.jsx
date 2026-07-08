const stats = [
  {
    value: "30+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "100%",
    label: "PORSCHE FOCUSED",
  },
  {
    value: "PIWIS",
    label: "FACTORY DIAGNOSTICS",
  },
  {
    value: "1",
    label: "MISSION: EXCELLENCE",
  },
];

export default function HeroStats() {
  return (
    <section
      style={{
        width: "100%",
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,.05)",
        borderBottom: "1px solid rgba(255,255,255,.05)",
      }}
    >
      <div
        className="hero-stats-grid"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "30px 38px",
              borderRight:
                index !== stats.length - 1
                  ? "1px solid rgba(255,255,255,.08)"
                  : "none",
            }}
          >
            <div
              style={{
                color: "#D50000",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: 1,
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              {item.value}
            </div>

            <div
              style={{
                marginTop: "10px",
                color: "#8A8A8A",
                fontSize: "15px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hero-stats-grid{
          min-height:140px;
        }

        @media (max-width:900px){

          .hero-stats-grid{
            grid-template-columns:repeat(2,1fr)!important;
          }

          .hero-stats-grid > div{
            border-right:none!important;
            border-bottom:1px solid rgba(255,255,255,.08);
          }

          .hero-stats-grid > div:nth-last-child(-n+2){
            border-bottom:none;
          }

        }

        @media (max-width:600px){

          .hero-stats-grid{
            grid-template-columns:1fr!important;
          }

          .hero-stats-grid > div{
            padding:24px;
            border-bottom:1px solid rgba(255,255,255,.08)!important;
          }

          .hero-stats-grid > div:last-child{
            border-bottom:none!important;
          }

        }
      `}</style>
    </section>
  );
}