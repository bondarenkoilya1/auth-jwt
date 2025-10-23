import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishLanguage from "./english.json";
import kazakhLanguage from "./kazakh.json";
import russianLanguage from "./russian.json";

const resources = {
  english: { translation: englishLanguage },
  kazakh: { translation: kazakhLanguage },
  russian: { translation: russianLanguage }
} as const;

export type LanguagesType = keyof typeof resources;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "russian",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
