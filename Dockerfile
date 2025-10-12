# استخدم Node 20
FROM node:20

# ثبّت الأدوات الأساسية
RUN apt-get update && apt-get install -y make g++ cmake python3

# ثبّت cmake-js عالمياً
RUN npm install -g cmake-js

# إعداد مجلد العمل
WORKDIR /app

# نسخ المشروع
COPY . .

# تثبيت الحزم وبناء raknet-native
RUN npm install && npm rebuild raknet-native --build-from-source

# أمر التشغيل
CMD ["node", "bot.js"]
