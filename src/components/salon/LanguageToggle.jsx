import { useLang } from "./LanguageContext";

export default function LanguageToggle({ className = "", floating = false }) {
  const { lang, setLang } = useLang();
  const activeClass = floating
    ? "text-white border-b border-white"
    : "text-stone-800 border-b border-stone-800";
  const inactiveClass = floating
    ? "text-white/60 hover:text-white"
    : "text-stone-400 hover:text-stone-600";
  const dividerClass = floating ? "text-white/40 text-xs" : "text-stone-300 text-xs";

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => setLang("he")}
        className={`text-xs tracking-widest px-2 py-1 transition-all duration-200 ${lang === "he" ? activeClass : inactiveClass}`}
        style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif", letterSpacing: "0.1em" }}
      >
        עב
      </button>
      <span className={dividerClass}>|</span>
      <button
        onClick={() => setLang("en")}
        className={`text-xs tracking-widest px-2 py-1 transition-all duration-200 ${lang === "en" ? activeClass : inactiveClass}`}
        style={{ fontFamily: "'Cormorant Garamond', 'Times New Roman', serif", letterSpacing: "0.1em" }}
      >
        EN
      </button>
    </div>
  );
}