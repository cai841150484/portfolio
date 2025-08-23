import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "lang";
const DEFAULT_LANG = "en";

const LanguageContext = createContext({ language: DEFAULT_LANG, setLanguage: () => {} });

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANG);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en") setLanguageState(saved);
    } catch {}
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  };

  // keep <html lang> in sync for a11y & SEO
  useEffect(() => {
    try {
      document.documentElement.setAttribute('lang', language);
    } catch {}
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

