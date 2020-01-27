const axios = require('axios');
const chat = require('../chat');


// eslint-disable-next-line no-unused-vars
const getFortuneCookie = async () => {
  const response = await axios.get('http://fortunecookieapi.herokuapp.com/v1/cookie');
  const quote = response.data[0].fortune.message;
  return quote;
};


module.exports = async (job, done) => {
  console.log('>> mulai scrapping data pengumuman...');
  try {
    const quote = await getFortuneCookie();
    chat.broadcastChannel(`"${quote}"`);
    done();
  } catch (error) {
    console.error(error);
    done(error);
  }
};
