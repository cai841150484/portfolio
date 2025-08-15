import { useLanguage } from "./LanguageContext";
import en from "./en";
import zh from "./zh";

const dict = { en, zh };

export function useI18n() {
  const { language, setLanguage } = useLanguage();
  const t = (path, fallback = "") => {
    const parts = path.split(".");
    let cur = dict[language] || {};
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        return fallback;
      }
    }
    return typeof cur === "string" ? cur : fallback;
  };
  return { t, language, setLanguage };
}

