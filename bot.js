// Minecraft Bedrock AFK Bot (يعمل على Render بدون raknet-native)

import { createClient } from 'bedrock-protocol-lite';

const bot = createClient({
  host: "emerald.magmanode.com",
  port: 33760,
  username: "AFK_Bot", // يمكنك تغييره لأي اسم تريده
  offline: false // إذا السيرفر لا يحتاج تسجيل Xbox، غيّرها إلى true
});

// عند الاتصال بالسيرفر
bot.on('connect', () => {
  console.log(`[+] تم الاتصال بالسيرفر emerald.magmanode.com:33760`);
});

// عند انقطاع الاتصال
bot.on('disconnect', (reason) => {
  console.log(`[-] تم فصل الاتصال: ${reason}`);
});

// في حال حدوث خطأ
bot.on('error', (err) => {
  console.error(`[!] خطأ: ${err.message}`);
});

// عند وصول رسالة في الشات
bot.on('text', (packet) => {
  console.log(`[CHAT] ${packet.source_name}: ${packet.message}`);
});

// وظيفة تبقي البوت نشطاً كل 30 ثانية
setInterval(() => {
  console.log(`[AFK] البوت مازال متصل وينتظر...`);
}, 30000);
