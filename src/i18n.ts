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
                    "Bathroom": "Bathroom",
                    "Invalidphone" : "Invalid phone number format. Please use the format: +7XXXXXXXXX or 8XXXXXXXXX",
                    "ShowDetails" : "Show Details",
                        "HideDetails" : "Hide Details",
                    "AddSome" : "Add some products in the cart!",
                    "ProductsIn" : "Products in cart quantity",
                    "Checkout" : "Checkout",
                    "Cart" : "Cart",
                    "Subtotal" : "SUBTOTAL",
                    "Rooms" : "Rooms",
                    "Product(s)" : "Product(s) found",
                    "CommitOrder" : "Commit Order",
                    "Payment" : "Payment",
                    "YourOrder" : "Your Order",
                    "OrderNumber" : "Order Number",
                    "EstimatedDel" : "Estimated Delivery Time",
                    "TotalPrice" : "Total Price",
                }
            },
            ru: {
                translation: {
                    "AddToCart": "Добавить в корзину",
                    "Welcome": "Добро пожаловать",
                    "Hello": "Привет",
                    "Bedroom": "Спальня",
                    "Kitchen": "Кухня",
                    "Bathroom": "Ванная",
                    "Invalidphone" : "Неверный формат номера телефона. Пожалуйста, используйте формат: +7XXXXXXXXX или 8XXXXXXXXX.",
                    "ShowDetails" : "Описание товара",
                    "HideDetails" : "Скрыть описание",
                    "AddSome" : "Добавьте товар в корзину!",
                    "ProductsIn" : "Количество товаров в корзине",
                    "Checkout" : "Проверить наличие",
                    "Cart" : "Корзина",
                    "Subtotal" : "ИТОГО",
                    "Rooms" : "Комнаты",
                    "Product(s)" : "Товара(ов) найдено",
                    "CommitOrder" : "Создать заказ",
                    "Payment" : "Оплата",
                    "YourOrder" : "Ваш заказ",
                    "OrderNumber" : "Номер заказа",
                    "EstimatedDel" : "Расчетное время доставки",
                    "TotalPrice" : "Итого",


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
