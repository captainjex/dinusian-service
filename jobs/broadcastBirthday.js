const bot = require('../lib/telegramBot')
const { getBirthdayData } = require('../factory/birthday')
const broadcastChannel = require('../chat/broadcastChannel')

module.exports = function (agenda) {
  agenda.define('broadcast birthday', async (job, done) => {
    try {
      let birthdayData = await getBirthdayData()
      if (birthdayData.length > 0) {
        broadcastChannel(bot, 'Ciyee ulang tahun nih ^_^')
        birthdayData.forEach(element => {
          if (element.nim[0] != 'A') return // ngefilter cuma nim yang depannya A
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
