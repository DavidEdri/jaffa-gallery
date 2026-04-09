import { useState, useEffect, useContext } from "react";
import { LanguageProvider, LanguageContext } from "./components/salon/LanguageContext";
import LanguageToggle from "./components/salon/LanguageToggle";

function FloatingToggle() {
  const { lang } = useContext(LanguageContext);
  const isHe = lang === "he";
  return (
    <div className={`fixed top-4 z-50 bg-black/30 backdrop-blur-sm px-2 py-1 rounded ${isHe ? "right-4" : "left-4"}`}>
      <LanguageToggle floating />
    </div>
  );
}

function NavBar() {
  const [visible, setVisible] = useState(false);
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {!visible && (
        <FloatingToggle />
      )}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-500 ${
          visible ? "opacity-100 pointer-events-auto bg-white/90 backdrop-blur-sm border-b border-stone-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <LanguageToggle />
        <button
          onClick={scrollToContact}
          className="border border-stone-800 text-stone-800 bg-transparent px-6 py-2 text-xs tracking-widest uppercase hover:bg-stone-800 hover:text-white transition-all duration-300"
          style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif", letterSpacing: "0.14em" }}
        >
          {lang === "he" ? "פנייה פרטית" : "Private Enquiry"}
        </button>
      </div>
    </>
  );
}

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');`}</style>
        <NavBar />
        {children}
      </div>
    </LanguageProvider>
  );
}