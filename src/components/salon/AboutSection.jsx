import { useLang } from "./LanguageContext";

const t = {
  en: {
    title: "About The Space",
    body: "In the heart of ancient Jaffa, overlooking the Mediterranean, this working artist's studio offers a refined setting for gatherings that value atmosphere, presence and cultural depth.",
    sub1: "This is not a conventional venue.",
    sub2: "It is a living art space.",
  },
  he: {
    title: "על המרחב",
    body: "בלב יפו העתיקה, אל מול הים התיכון, בתוך מבנה אבן בן כ־800 שנה, פועל סלון אמנות פעיל באוצרות האמן אילן אדר.",
    sub1: "מרחב תרבותי חי בו היסטוריה, אדריכלות ואמנות עכשווית נפגשות.",
    sub2: "הסלון נפתח למספר מצומצם של מפגשים ואירועים פרטיים לאורך השנה.",
  },
};

export default function AboutSection() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <section className="py-8 md:py-14 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto text-center">
      <p
        className="text-stone-500 tracking-widest uppercase mb-12"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "1.1rem",
          letterSpacing: "0.25em",
        }}
      >
        {c.title}
      </p>
      <p
        className="text-stone-800 leading-relaxed mb-10"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
          fontWeight: 400,
          lineHeight: 1.75,
        }}
      >
        {c.body}
      </p>
      <div className="w-10 h-px bg-stone-300 mx-auto mb-10" />
      <p
        className="text-stone-500"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
          lineHeight: 1.9,
        }}
      >
        {c.sub1}
      </p>
      <p
        className="text-stone-500 italic"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
          lineHeight: 1.9,
        }}
      >
        {c.sub2}
      </p>
    </section>
  );
}