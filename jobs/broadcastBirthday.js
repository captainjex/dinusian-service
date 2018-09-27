const bot = require('../lib/telegramBot')
const { getBirthdayData } = require('../factory/birthday')
const broadcastChannel = require('../chat/broadcastChannel')

module.exports = function (agenda) {
  agenda.define('broadcast birthday', async (job, done) => {
    try {
      let birthdayData = await getBirthdayData()
      if (birthdayData.length > 0) {
        broadcastChannel(bot, 'Selamat Ulang Tahun ^_^')
        birthdayData.forEach(element => {
          let message = element.name + '\n'
            + element.nim + '\n'
            + element.age + ' tahun' + '\n'
          broadcastChannel(bot, message)
        })
      }
      done()
    } catch (error) {
      console.log(error);
      done(error)
    }
  });
}
