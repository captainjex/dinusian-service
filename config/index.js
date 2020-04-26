require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  MONGO_STRING: process.env.MONGO_STRING || 'mongodb://localhost:27017/dinusian',
  TOKEN_TELEGRAM_BOT: process.env.TOKEN_TELEGRAM_BOT || 'yourtoken',
  ADMIN_CHAT_ID: process.env.ADMIN_CHAT_ID || 123456789,
  WEBHOOK_KEY: process.env.WEBHOOK_KEY || 'lalala1234',
};
