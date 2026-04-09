import { useLang } from "./LanguageContext";

const t = {
  en: {
    title: "Creative Productions",
    body: "Available for fashion shoots, campaigns, film and editorial productions.",
    sub: "Daily bookings upon request.",
  },
  he: {
    title: "הפקות יצירתיות",
    body: "זמין לצילומי אופנה, קמפיינים, סרטים והפקות עיתונאיות.",
    sub: "הזמנות יומיות על פי בקשה.",
  },
};

export default function ProductionsSection() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <section className="py-8 md:py-12 px-6 md:px-16 bg-stone-50 text-center">
      <div className="max-w-xl mx-auto">
        <h2
          className="text-stone-700 mb-8 tracking-widest uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "1.1rem",
            letterSpacing: "0.22em",
          }}
        >
          {c.title}
        </h2>
        <p
          className="text-stone-700"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            fontWeight: 300,
            lineHeight: 1.9,
          }}
        >
          {c.body}
          <br />
          <span className="text-stone-400 text-sm italic">{c.sub}</span>
        </p>
      </div>
    </section>
  );
}