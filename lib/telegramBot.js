let Bot = require('node-telegram-bot-api');

const token = process.env.TOKEN_TELEGRAM_BOT || '';
console.log('telegram bot set token', token);

let bot = new Bot(token, { polling: true })

module.exports = bot
