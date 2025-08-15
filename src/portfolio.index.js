import { useLanguage } from "./i18n/LanguageContext";
import * as en from "./portfolio.en";
import * as zh from "./portfolio.zh";

export function usePortfolio() {
  const { language } = useLanguage();
  return language === "zh" ? zh : en;
}

