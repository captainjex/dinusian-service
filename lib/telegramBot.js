const Bot = require('node-telegram-bot-api');

const trigger = 'lihat';
const token = process.env.TOKEN_TELEGRAM_BOT || '';

const bot = new Bot(token, { polling: true });

bot.on('message', (event) => console.log(event.text.toString()))
bot.on('message', (msg) => {
  console.log('>> pesan dari', msg);

  if (msg.text.toString() === trigger) {
    return bot.sendMessage(msg.chat.id, 'oke mengirim pengumuman...');
  }

  bot.sendMessage(msg.chat.id, 'Hai, mau lihat pengumuman?', {
    reply_markup: {
      keyboard: [[trigger]]
    }
  });
});

bot.sendMessage(216204685, 'bot restarted').then((res) => {
  console.log('bot restarted');
})
