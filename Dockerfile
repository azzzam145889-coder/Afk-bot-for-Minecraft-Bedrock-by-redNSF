# استخدم صورة Node الرسمية
FROM node:20

# ثبّت الأدوات اللازمة لبناء raknet-native
RUN apt-get update && apt-get install -y make g++ cmake python3

# أنسخ كل ملفات المشروع إلى مجلد /app
WORKDIR /app
COPY . .

# ثبّت الحزم وابن raknet-native
RUN npm install && npm rebuild raknet-native --build-from-source

# شغّل البوت
CMD ["node", "bot.js"]
