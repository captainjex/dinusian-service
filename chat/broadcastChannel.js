const bot = require('./__bot');
const config = require('../config');

module.exports = (message) => {
  bot.sendMessage(config.NODE_ENV === 'development' ? '@devdinusian' : '@dinusian', message).then(() => {
    console.log('sent broadcast telegram channel');
  });
};
