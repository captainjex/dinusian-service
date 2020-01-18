const bot = require('./__bot');
const config = require('../config');

module.exports = () => {
  bot.sendMessage(config.ADMIN_CHAT_ID, 'bot restarted').then((/* res */) => {
    console.log('bot restarted');
  });
};
