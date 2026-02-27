export default function ProductionsSection() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-16 bg-stone-50 text-center">
      <div className="max-w-xl mx-auto">
        <h2
          className="text-stone-700 mb-8 tracking-widest uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "1.1rem",
            letterSpacing: "0.22em",
          }}
        >
          Creative Productions
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
          Available for fashion shoots, campaigns, film and editorial productions.
          <br />
          <span className="text-stone-400 text-sm italic">Daily bookings upon request.</span>
        </p>
      </div>
    </section>
  );
}