const bot = require('./__bot');
const config = require('../config');

module.exports = () => {
  bot.sendMessage(config.ADMIN_CHAT_ID, `bot started: ${config.NODE_ENV}`).then((/* res */) => {
    console.log('bot restarted');
  });
};
