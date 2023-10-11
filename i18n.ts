import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome": "Welcome",
          "Goodbye": "Goodbye"
        }
      },
      ru: {
        translation: {
          "Welcome": "Добро пожаловать",
          "Goodbye": "До свидания"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
