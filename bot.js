# استخدم Node.js 20 رسمي
FROM node:20

# تثبيت الأدوات المطلوبة لبناء بعض الباكجات
RUN apt-get update && apt-get install -y make g++ cmake python3

# تثبيت cmake-js عالمياً
RUN npm install -g cmake-js

# تحديد مجلد العمل
WORKDIR /app

# نسخ ملفات المشروع
COPY . .

# تثبيت جميع الحزم وإعادة بناء raknet-native
RUN npm install && npm rebuild raknet-native --build-from-source

# تشغيل البوت عند تشغيل الحاوية
CMD ["node", "bot.js"]
