import { useLang } from "./LanguageContext";

const t = {
  en: {
    title: "Designed For",
    items: [
      "Executive meetings",
      "Boutique conferences",
      "Investor hosting",
      "Brand launches",
      "International delegations",
      "Curated private celebrations",
    ],
    footer: "Each gathering is individually aligned with the character of the space.",
  },
  he: {
    title: "מיועד ל־",
    items: [
      "פגישות הנהלה",
      "אירוח משקיעים",
      "יוזמות אסטרטגיות ותרבותיות",
      "משלחות בינלאומיות",
      "אירועים פרטיים מוקפדים",
      "זמינות שנתית מצומצמת",
    ],
    footer: "כל מפגש מותאם לאופי החלל.",
  },
};

export default function DesignedForSection() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="w-full">
        <p
          className="text-center text-stone-400 tracking-widest uppercase mb-8 px-6"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "1.1rem",
            letterSpacing: "0.25em",
          }}
        >
          {c.title}
        </p>

        <div className="grid grid-cols-3 max-w-xl mx-auto">
          {c.items.map((item) => (
            <div
              key={item}
              className="[&:not(:nth-last-child(-n+3))]:border-b border-stone-200 px-4 py-0 text-center [&:not(:nth-child(3n))]:border-e aspect-square flex items-center justify-center"
            >
              <p
                className="text-stone-700"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  letterSpacing: "0.02em",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-center text-stone-400 italic mt-12 px-6"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
            lineHeight: 1.9,
          }}
        >
          {c.footer}
        </p>
      </div>
    </section>
  );
}