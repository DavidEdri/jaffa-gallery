export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
        alt="The Salon"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* gradient: centered on mobile, left-side on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent md:bg-gradient-to-r md:from-black/55 md:via-black/20 md:to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left px-6 md:px-16 lg:px-24 md:max-w-2xl">
        <h1
          className="text-white leading-tight mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          A Private Art Salon<br />in Old Jaffa
        </h1>
        <p
          className="text-white/85 mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 300,
            letterSpacing: "0.01em",
          }}
        >
          For Meaningful Business &amp; Cultural Gatherings
        </p>
        <button
          onClick={scrollToContact}
          className="w-fit border border-white text-white bg-transparent px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
          style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif", letterSpacing: "0.12em" }}
        >
          Private Enquiry
        </button>
      </div>
    </section>
  );
}