const columns = [
  {
    title: "Natural Mediterranean light.",
    sub: "Original artwork throughout.",
  },
  {
    title: "An intimate atmosphere by evening.",
    sub: "Activity until 23:00.",
  },
  {
    title: "External catering welcome.",
    sub: "Warming & serving only.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-16 bg-white">
      <p
        className="text-center text-stone-400 tracking-widest uppercase mb-16"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "1.1rem",
          letterSpacing: "0.25em",
        }}
      >
        The Experience
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {columns.map((col, i) => (
          <div
            key={i}
            className={`px-10 py-8 text-center ${
              i !== 0 ? "md:border-l border-stone-200" : ""
            }`}
          >
            <p
              className="text-stone-800 mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {col.title}
            </p>
            <p
              className="text-stone-400 text-sm"
              style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif" }}
            >
              {col.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}