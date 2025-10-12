const { createBot } = require('bedrock-protocol');

const bot = createBot({
  host: 'emerald.magmanode.com',
  port: 33760,
  username: 'BotFares'
});

bot.on('spawn', () => {
  console.log('✅ البوت دخل السيرفر بنجاح');
});

bot.on('kick', (reason) => {
  console.log('⚠️ تم طرد البوت من السيرفر');
  console.log('سبب الطرد:', reason);
});

bot.on('disconnect', (reason) => {
  console.log('⚠️ تم قطع الاتصال بالسيرفر');
  console.log('السبب:', reason);
});

bot.on('message', (message) => {
  console.log('💬 رسالة جديدة:', message.toString());
});
