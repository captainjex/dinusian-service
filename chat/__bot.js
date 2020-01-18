const Bot = require('node-telegram-bot-api');
const config = require('../config');

const token = config.TOKEN_TELEGRAM_BOT;
console.log('telegram bot set token', token);

const bot = new Bot(token, { polling: true });

module.exports = bot;
