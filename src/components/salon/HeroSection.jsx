import { useLang } from "./LanguageContext";

const t = {
  en: {
    title: "A Private Art Salon\nin Old Jaffa",
    sub: "For Meaningful Business & Cultural Gatherings",
    cta: "Private Enquiry",
  },
  he: {
    title: "סלון אמנות פרטי\nביפו העתיקה",
    sub: "למפגשים עסקיים ותרבותיים בעלי משמעות",
    cta: "פנייה פרטית",
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const c = t[lang];
  const isHe = lang === "he";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[40vh] md:h-screen md:min-h-[600px] overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
        alt="The Salon"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: isHe
          ? "linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
          : "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
      }} />

      {/* Text block */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:items-start md:text-left md:w-[45%] md:inset-auto md:top-0 md:bottom-0 md:px-[5%] ${isHe ? "md:right-0 md:text-right" : "md:left-0"}`}>
        <h1 style={{
          color: "white",
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "clamp(1.6rem, 5vw, 3.6rem)",
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          whiteSpace: "pre-line",
          marginBottom: "1rem",
        }}>
          {c.title}
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.85)",
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          fontWeight: 300,
          letterSpacing: "0.01em",
          marginBottom: "2.5rem",
        }}>
          {c.sub}
        </p>
        <button
          onClick={scrollToContact}
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            letterSpacing: "0.12em",
            border: "1px solid white",
            color: "white",
            background: "transparent",
            padding: "0.75rem 2rem",
            fontSize: "0.875rem",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
          onMouseEnter={e => { e.target.style.background = "white"; e.target.style.color = "black"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "white"; }}
        >
          {c.cta}
        </button>
      </div>
    </section>
  );
}