# PixelMagnet Client

**PixelMagnet** — це клієнтська частина повноцінного веб-застосунку, який поєднує анімації, безпечну авторизацію, нескінченну прокрутку контенту та підключення до бекенду через MongoDB. Створено на базі **Next.js 14**, з використанням **Redux Toolkit**, **Effector**, **Lenis scroll**, **Mongoose**, **Axios**, **Framer Motion**, та інших сучасних бібліотек.

## ⚙️ Технологічний стек

- **Next.js 14**  
- **React 18 / Redux Toolkit / Effector**
- **TypeScript**
- **MongoDB + Mongoose**
- **Framer Motion / Lenis / Swiper / React Slick**
- **SCSS (SASS Loader)**
- **Axios, dotenv, jsonwebtoken, bcryptjs**

## 🚀 Основні особливості

- ⚙️ **Серверний рендеринг та SEO** завдяки Next.js 14
- 🔄 **Централізоване керування станом** через Redux Toolkit та Effector
- 🔐 **JWT-авторизація** з використанням `jsonwebtoken` та `bcryptjs`
- 🔄 **База даних MongoDB** — підключення через Mongoose
- 📱 **Мобільна адаптивність** та інтерактивність (слайдери, лічильники, модалки)
- 🔁 **Нескінченна прокрутка** через `react-infinite-scroll-component`
- ✉️ **Валідація форм** + інтерактивні нотифікації через `react-hot-toast`
- 📞 **Телефонні форми** з `react-phone-number-input`
- 🎯 **Smooth Scroll** через Lenis
- 📦 **Axios** — підключення до бекенду для отримання динамічних даних

## 📦 Встановлення

- bash
git clone https://github.com/BogdanPavliv/pixelmagnet-client.git
cd pixelmagnet-client
npm install
npm run dev

## 🚀 Команди

| Скрипт          | Опис                                           |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Запускає локальний сервер Next.js для розробки |
| `npm run build` | Створює продакшен-білд за допомогою Next.js    |
| `npm run start` | Запускає продакшен-версію сервера              |
| `npm run lint`  | Запускає аналіз коду за допомогою ESLint       |

## 🛠️ Розгортання

[Watch demo](https://pixelmagnet-mongodb-client.netlify.app/)

👨‍💻 Автор
Богдан Павлів — Frontend Developer
📧 [bogdan.pavliv@gmail.com]
🌐 [My portfolio](https://bogdan-pavliv.netlify.app)