import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext({ lang: "he", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("he");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === "he" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}