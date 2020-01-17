const bot = require('../lib/telegramBot');

module.exports = () => {
  bot.sendMessage(process.env.ADMIN_CHAT_ID, 'bot restarted').then((/* res */) => {
    console.log('bot restarted');
  });
};
