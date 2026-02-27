const items = [
  "Executive meetings",
  "Boutique conferences",
  "Investor hosting",
  "Brand launches",
  "International delegations",
  "Curated private celebrations",
];

export default function DesignedForSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="w-full">
        <p
          className="text-center text-stone-400 tracking-widest uppercase mb-14 px-6"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "1.1rem",
            letterSpacing: "0.25em",
          }}
        >
          Designed For
        </p>

        {/* 3×2 tic-tac-toe grid */}
        <div className="grid grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="[&:not(:nth-last-child(-n+3))]:border-b border-stone-200 px-6 py-10 text-center [&:not(:nth-child(3n))]:border-r aspect-square flex items-center justify-center"
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
          Each gathering is individually aligned with the character of the space.
        </p>
      </div>
    </section>
  );
}