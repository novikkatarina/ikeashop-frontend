import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "AddToCart": "Add to cart",
                    "Welcome": "Welcome",
                    "Hello": "Hello",
                    "Bedroom": "Bedroom",
                    "Kitchen": "Kitchen",
                    "Bathroom": "Bathroom"
                    // Добавьте здесь другие фразы для английского языка
                }
            },
            ru: {
                translation: {
                    "AddToCart": "Добавить в корзину",
                    "Welcome": "Добро пожаловать",
                    "Hello": "Привет",
                    "Bedroom": "Спальня",
                    "Kitchen": "Кухня",
                    "Bathroom": "Ванная"
                    // Добавьте здесь другие фразы для русского языка
                }
            }
        },
        lng: "en", // Установите язык по умолчанию на английский
        fallbackLng: "en", // Установите язык, который будет использоваться, если перевод для выбранного языка отсутствует
        interpolation: {
            escapeValue: false // Выключите автоэкранирование (необязательно)
        }
    });

export default i18n;


/*
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Add to cart": "Add to cart",
        }
      },
      ru: {
        translation: {
          "Add to cart": "Добавить в корзину",
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
*/
