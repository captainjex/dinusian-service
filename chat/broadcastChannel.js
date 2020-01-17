const bot = require('../lib/telegramBot');

module.exports = (message) => {
  bot.sendMessage(process.env.NODE_ENV === 'development' ? '@devdinusian' : '@dinusian', message).then(() => {
    console.log('sent broadcast telegram channel');
  });
};
