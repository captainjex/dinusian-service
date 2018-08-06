module.exports = function (bot, message) {
  bot.sendMessage('@dinusian', message).then(() => {
    console.log('sent broadcast telegram channel');
  })
}
